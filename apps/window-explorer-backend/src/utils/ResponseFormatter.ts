export class ResponseFormatter {
  static success<T>(data: T) {
    return {
      data,
    };
  }
}