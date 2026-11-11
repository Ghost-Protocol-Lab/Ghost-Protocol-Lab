/*
 * HOW TO ADD AN EVENT
 * 1. Copy the commented template object below.
 * 2. Paste it into the GHPL_EVENTS array and change each value.
 * 3. Save this file. No HTML editing is required.
 */
const GHPL_EVENTS = [
  {
    id: 'sample-workshop-night',
    title: '[DUMMY EVENT] Sample Workshop Night',
    type: 'Workshop',
    start: '2026-12-20T18:00:00+05:30',
    end: '2026-12-20T20:00:00+05:30',
    mode: 'Online',
    location: '[REDACTED]',
    summary: 'An obviously fictional workshop used to demonstrate the GHPL events layout.',
    description: 'This is a sample event to demonstrate the page layout. All details are fictional placeholders and do not represent a scheduled GHPL event.',
    agenda: [
      { time: '[TBD]', item: '[AGENDA ITEM PLACEHOLDER]' },
      { time: '[TBD]', item: '[AGENDA ITEM PLACEHOLDER]' }
    ],
    speakers: ['GHPL[REDACTED]-01'],
    registerUrl: '',
    coverImage: '',
    tags: ['[TAG PLACEHOLDER]', '[TAG PLACEHOLDER]']
  }
];

/*
{
  id: 'short-event-slug',
  title: '[EVENT TITLE]',
  type: 'Workshop',
  start: '2026-12-20T18:00:00+05:30',
  end: '2026-12-20T20:00:00+05:30',
  mode: 'Online',
  location: '[REDACTED]',
  summary: '[ONE OR TWO LINE SUMMARY]',
  description: '[LONGER DESCRIPTION]',
  agenda: [{ time: '[TIME]', item: '[AGENDA ITEM]' }],
  speakers: ['GHPL[REDACTED]-01'],
  registerUrl: '',
  coverImage: '',
  tags: ['[TAG]']
}
*/
