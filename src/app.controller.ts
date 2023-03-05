import { Controller, Get, Redirect} from '@nestjs/common';

@Controller()
export class AppController {
	
	@Get()
	@Redirect('/auth/login')
	redirectLogin():void {
		return;
	}

};

