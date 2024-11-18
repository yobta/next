interface ParseUnknownError {
  (unknownError: unknown): Error
}

export const parseUnknownError: ParseUnknownError = (unknownError) => {
  if (unknownError instanceof Error) {
    return unknownError
  }
  return new Error(String(unknownError))
}
