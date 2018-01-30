"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const bodyParser = require("body-parser");
const express = require("express");
const db = require("./db");
const allowCors_1 = require("./middlewares/allowCors");
const errors_1 = require("./middlewares/errors");
const errors = require("./middlewares/errors");
const routes_1 = require("./routes");
const settings = require("./settings");
const appService = require("./api/services/app");
db.connect();
const publicDir = __dirname + '/../dist';
const app = express();
app.use(express.static(publicDir));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(allowCors_1.allowCors);
app.use('/rank', routes_1.router);
app.get('/*', errors_1.notFound);
app.use(errors.notFound);
app.use(errors.parser);
app.listen(settings.port, () => console.log(`server started: PORT: ${settings.port} | ENV: ${settings.env}`));
process.on('unhandledRejection', (reason, p) => { });
appService.getApps(5).catch(console.error);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NlcnZlci9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXFDO0FBRXJDLDBDQUEwQztBQUMxQyxtQ0FBbUM7QUFFbkMsMkJBQTJCO0FBQzNCLHVEQUFvRDtBQUNwRCxpREFBZ0Q7QUFDaEQsK0NBQStDO0FBQy9DLHFDQUErQztBQUMvQyx1Q0FBdUM7QUFDdkMsaURBQWlEO0FBRWpELEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQUViLE1BQU0sU0FBUyxHQUFHLFNBQVMsR0FBRyxVQUFVLENBQUM7QUFDekMsTUFBTSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFFdEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7QUFFbkMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNuRCxHQUFHLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsQ0FBQztBQUVuQixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxlQUFTLENBQUMsQ0FBQztBQUM1QixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxpQkFBUSxDQUFDLENBQUM7QUFFeEIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDekIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFdkIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLFFBQVEsQ0FBQyxJQUFJLFdBQVcsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUM5RyxPQUFPLENBQUMsRUFBRSxDQUFDLG9CQUFvQixFQUFFLENBQUMsTUFBVyxFQUFFLENBQU0sRUFBRSxFQUFFLEdBQWdCLENBQUMsQ0FBQyxDQUFDO0FBRTVFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnc291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyJztcblxuaW1wb3J0ICogYXMgYm9keVBhcnNlciBmcm9tICdib2R5LXBhcnNlcic7XG5pbXBvcnQgKiBhcyBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuXG5pbXBvcnQgKiBhcyBkYiBmcm9tICcuL2RiJztcbmltcG9ydCB7IGFsbG93Q29ycyB9IGZyb20gJy4vbWlkZGxld2FyZXMvYWxsb3dDb3JzJztcbmltcG9ydCB7IG5vdEZvdW5kIH0gZnJvbSAnLi9taWRkbGV3YXJlcy9lcnJvcnMnO1xuaW1wb3J0ICogYXMgZXJyb3JzIGZyb20gJy4vbWlkZGxld2FyZXMvZXJyb3JzJztcbmltcG9ydCB7IHJvdXRlciBhcyBhcGlSb3V0ZXMgfSBmcm9tICcuL3JvdXRlcyc7XG5pbXBvcnQgKiBhcyBzZXR0aW5ncyBmcm9tICcuL3NldHRpbmdzJztcbmltcG9ydCAqIGFzIGFwcFNlcnZpY2UgZnJvbSAnLi9hcGkvc2VydmljZXMvYXBwJztcblxuZGIuY29ubmVjdCgpO1xuXG5jb25zdCBwdWJsaWNEaXIgPSBfX2Rpcm5hbWUgKyAnLy4uL2Rpc3QnO1xuY29uc3QgYXBwID0gZXhwcmVzcygpO1xuXG5hcHAudXNlKGV4cHJlc3Muc3RhdGljKHB1YmxpY0RpcikpO1xuXG5hcHAudXNlKGJvZHlQYXJzZXIudXJsZW5jb2RlZCh7IGV4dGVuZGVkOiB0cnVlIH0pKTtcbmFwcC51c2UoYWxsb3dDb3JzKTtcblxuYXBwLnVzZSgnL3JhbmsnLCBhcGlSb3V0ZXMpO1xuYXBwLmdldCgnLyonLCBub3RGb3VuZCk7XG5cbmFwcC51c2UoZXJyb3JzLm5vdEZvdW5kKTtcbmFwcC51c2UoZXJyb3JzLnBhcnNlcik7XG5cbmFwcC5saXN0ZW4oc2V0dGluZ3MucG9ydCwgKCkgPT4gY29uc29sZS5sb2coYHNlcnZlciBzdGFydGVkOiBQT1JUOiAke3NldHRpbmdzLnBvcnR9IHwgRU5WOiAke3NldHRpbmdzLmVudn1gKSk7XG5wcm9jZXNzLm9uKCd1bmhhbmRsZWRSZWplY3Rpb24nLCAocmVhc29uOiBhbnksIHA6IGFueSkgPT4geyAvKiBpZ25vcmUgKi8gfSk7XG5cbmFwcFNlcnZpY2UuZ2V0QXBwcyg1KS5jYXRjaChjb25zb2xlLmVycm9yKTtcbiJdfQ==