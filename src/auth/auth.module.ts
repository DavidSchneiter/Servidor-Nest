import { Module } from "@nestjs/common"
import { PassportModule } from "@nestjs/passport"
import { LocalStrategy } from "src/auth/passport/local.strategy"
import { SessionSerializer } from "src/auth/passport/session.serializer"
import { UserModule } from "src/user/user.module"
import { UserService } from "src/user/user.service"
import { AuthService } from "./auth.service"

@Module({
  imports: [UserModule, PassportModule.register({ session: true })],
  providers: [AuthService, LocalStrategy, SessionSerializer],
})
export class AuthModule {}
