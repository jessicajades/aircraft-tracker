module.exports = class ApplicationPolicy {
    constructor(user, record) {
        this.user = user;
        this.record = record;
    }

    _isAdmin() {
        return this.user && this.user.role == 1;
    }

    new() {
        return this.user != null;
    }

    create() {
        return this.new();
    }

    show() {
        return this.user;
    }

    edit() {
        return this.new() && this.record && this._isAdmin();
    }

    update() {
        return this.edit();
    }
};
