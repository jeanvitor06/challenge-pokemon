"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appRepository = require("../repositories/app");
async function list(req, res, next) {
    try {
        const apps = await appRepository.list();
        res.status(200).send(apps);
    }
    catch (err) {
        next(err);
    }
}
exports.list = list;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlcnZlci9hcGkvcm91dGVzL2FjdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxxREFBcUQ7QUFFOUMsS0FBSyxlQUFlLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0I7SUFDeEUsSUFBSSxDQUFDO1FBQ0gsTUFBTSxJQUFJLEdBQUcsTUFBTSxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDWixDQUFDO0FBQ0gsQ0FBQztBQVBELG9CQU9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0ICogYXMgYXBwUmVwb3NpdG9yeSBmcm9tICcuLi9yZXBvc2l0b3JpZXMvYXBwJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxpc3QocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlLCBuZXh0OiBOZXh0RnVuY3Rpb24pOiBQcm9taXNlPHZvaWQ+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCBhcHBzID0gYXdhaXQgYXBwUmVwb3NpdG9yeS5saXN0KCk7XG4gICAgcmVzLnN0YXR1cygyMDApLnNlbmQoYXBwcyk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIG5leHQoZXJyKTtcbiAgfVxufSJdfQ==