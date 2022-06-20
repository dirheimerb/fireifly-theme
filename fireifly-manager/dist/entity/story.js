"use strict";
var __decorate =
  (this && this.__decorate) ||
  function (decorators, target, key, desc) {
    var c = arguments.length,
      r =
        c < 3
          ? target
          : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
      d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if ((d = decorators[i]))
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata =
  (this && this.__metadata) ||
  function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
exports.__esModule = true;
exports.Story = void 0;
var typeorm_1 = require("typeorm");
var Story = /** @class */ (function () {
  function Story() {}
  __decorate(
    [
      (0, typeorm_1.PrimaryGeneratedColumn)(),
      __metadata("design:type", Number),
    ],
    Story.prototype,
    "id"
  );
  __decorate(
    [
      (0, typeorm_1.Column)({
        length: 100,
      }),
      __metadata("design:type", String),
    ],
    Story.prototype,
    "name"
  );
  __decorate(
    [(0, typeorm_1.Column)("text"), __metadata("design:type", String)],
    Story.prototype,
    "description"
  );
  __decorate(
    [(0, typeorm_1.Column)(), __metadata("design:type", String)],
    Story.prototype,
    "filename"
  );
  __decorate(
    [(0, typeorm_1.Column)(), __metadata("design:type", String)],
    Story.prototype,
    "status"
  );
  __decorate(
    [(0, typeorm_1.Column)(), __metadata("design:type", String)],
    Story.prototype,
    "acceptance"
  );
  Story = __decorate([(0, typeorm_1.Entity)()], Story);
  return Story;
})();
exports.Story = Story;