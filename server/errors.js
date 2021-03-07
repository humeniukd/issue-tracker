export class BadRequestError extends Error {
  constructor(message) {
    super(message);

    this.statusCode = 400;
  }
}

export class NotFoundError extends Error {
  constructor(message = 'Not found') {
    super(message);

    this.statusCode = 404;
  }
}
