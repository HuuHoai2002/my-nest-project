import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class TestPipe implements PipeTransform {
  transform(value: any, _metadata: ArgumentMetadata) {
    console.log(value);
    console.log(_metadata);
    return value;
  }
}
