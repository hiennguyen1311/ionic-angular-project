interface IResponseAPI<T> {
  result: T;
  error: Error | null;
  success: boolean;
}
