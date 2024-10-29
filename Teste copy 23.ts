class PermissionsService {
    grantPermission(userId: number, permission: string): boolean {
        console.log(`Permission ${permission} granted to user ${userId}`);
        return true;
    }

    revokePermission(userId: number, permission: string): boolean {
        console.log(`Permission ${permission} revoked from user ${userId}`);
        return true;
    }

    hasPermission(userId: number, permission: string): boolean {
        return Math.random() > 0.5;
    }
}

class UserService3 {
    private permissionsService: PermissionsService;

    constructor(permissionsService: PermissionsService) {
        this.permissionsService = permissionsService;
    }

    grantPermission(userId: number, permission: string): boolean {
        return this.permissionsService.grantPermission(userId, permission);
    }

    revokePermission(userId: number, permission: string): boolean {
        return this.permissionsService.revokePermission(userId, permission);
    }

    hasPermission(userId: number, permission: string): boolean {
        return this.permissionsService.hasPermission(userId, permission);
    }
}
