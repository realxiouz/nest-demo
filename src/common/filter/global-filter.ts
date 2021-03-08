import { ArgumentsHost, HttpException } from "@nestjs/common";
import { BaseExceptionFilter } from "@nestjs/core";
import { Request, Response } from "express";

export class GlobalFilter extends BaseExceptionFilter {

  catch(exception: HttpException, host: ArgumentsHost) {
    
    let request: Request = host.switchToHttp().getRequest()
    let response: Response = host.switchToHttp().getResponse()

    let { url, method} = request
    let { status, statusCode, statusMessage } = response
    let {} = exception

    response.status(200).json({
      url,
      method,
      status,
      statusCode,
      statusMessage
    })
  }
}