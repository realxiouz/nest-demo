import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';

@Controller('users')
@ApiTags('用户模块')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiQuery({ name: 'id', required: true})
  @ApiResponse({
    status: 200,
    
  })
  index(@Query('id') id :string )  {
    return {
      id
    }
  }
}
