const MONTHS = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 }

// Turns key-date labels such as "27 Mar 2026", "Dec 2025" or "End Feb 2027" into a
// sortable timestamp. Returns 0 when no month and year can be found.
export function parseKeyDate(label = '') {
  const m = String(label).match(/(?:(\d{1,2})\s+)?(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+(\d{4})/i)
  if (!m) return 0
  return Date.UTC(Number(m[3]), MONTHS[m[2].toLowerCase()], m[1] ? Number(m[1]) : 1)
}
