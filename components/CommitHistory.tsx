import { contact } from "@/lib/data";

type Day = { date: string; level: number };

async function getContributions() {
  try {
    const response = await fetch("https://github.com/users/DarrelFW321/contributions", {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return null;
    const html = await response.text();
    const days: Day[] = [];
    for (const cell of html.match(/<td\b[^>]*>/g) ?? []) {
      const date = cell.match(/data-date="(\d{4}-\d{2}-\d{2})"/)?.[1];
      const level = cell.match(/data-level="([0-4])"/)?.[1];
      if (date && level) days.push({ date, level: Number(level) });
    }
    days.sort((a, b) => a.date.localeCompare(b.date));
    if (days.length < 350) return null;
    const total = html.match(/([\d,]+)\s+contributions\s+in the last year/)?.[1];
    return { days, total };
  } catch {
    return null;
  }
}

export default async function CommitHistory() {
  const activity = await getContributions();
  const levels = ["No", "Low", "Moderate", "High", "Very high"];
  const weeks = activity ? Math.ceil(activity.days.length / 7) : 0;
  const months = activity?.days.flatMap((day, index) => {
    const date = new Date(`${day.date}T00:00:00Z`);
    if (date.getUTCDate() !== 1) return [];
    return [{ label: date.toLocaleDateString("en-US", { month: "short", timeZone: "UTC" }), week: Math.floor(index / 7) + 1 }];
  });

  return (
    <section id="activity" className="fade" aria-labelledby="activity-heading">
      <div className="activity-heading">
        <h2 id="activity-heading" className="section-label">GitHub activity</h2>
        <a className="project-link" href={contact.github.url} target="_blank" rel="noopener noreferrer">View GitHub ↗</a>
      </div>
      {activity ? (
        <>
          <p className="activity-summary">{activity.total ? `${activity.total} contributions in the last year` : "Contributions in the last year"}</p>
          <div className="activity-scroll" tabIndex={0} role="region" aria-label="GitHub contribution calendar; scroll to view all months">
            <div className="activity-calendar" style={{ "--weeks": weeks } as React.CSSProperties}>
              <div className="activity-months" aria-hidden="true">
                {months?.map((month, index) => <span key={index} style={{ gridColumn: month.week }}>{month.label}</span>)}
              </div>
              <div className="activity-grid" role="img" aria-label={`${activity.total ?? "GitHub"} contributions over the last year. Darker green indicates less activity; brighter green indicates more.`}>
                {activity.days.map((day) => (
                  <span key={day.date} className={`activity-day level-${day.level}`} title={`${day.date}: ${levels[day.level]} contribution activity`} />
                ))}
              </div>
            </div>
          </div>
          <div className="activity-legend" aria-hidden="true">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((level) => <span key={level} className={`activity-day level-${level}`} />)}
            <span>More</span>
          </div>
        </>
      ) : (
        <p className="activity-summary">Explore my latest commits and contributions on <a href={contact.github.url}>GitHub ↗</a>.</p>
      )}
    </section>
  );
}
