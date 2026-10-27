// Off-screen decoy field. Real users never see or focus it; bots that fill
// every input trip it, and the server rejects the submission.
export default function HoneypotField({ inputRef, name }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-[-9999px] h-0 w-0 overflow-hidden opacity-0"
    >
      <label>
        Leave this field empty
        <input
          ref={inputRef}
          type="text"
          name={name}
          tabIndex={-1}
          autoComplete="off"
        />
      </label>
    </div>
  );
}
