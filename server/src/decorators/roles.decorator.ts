import { SetMetadata } from '@nestjs/common';
import { RolesType, ROLES_KEY} from '../shared';

export const Roles = (...roles: RolesType[]) => SetMetadata(ROLES_KEY, roles);
