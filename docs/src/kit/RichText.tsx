/** Plain text with `code` spans (as written in JSDoc, guidelines and example descriptions). */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(`[^`]+`)/g)
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('`') && part.endsWith('`') ? (
          // biome-ignore lint/suspicious/noArrayIndexKey: static text fragments
          <code key={i}>{part.slice(1, -1)}</code>
        ) : (
          part
        ),
      )}
    </>
  )
}
