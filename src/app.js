import "./styles.css";
import { menu } from './constants/contsants'

import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
import { ShapeModule } from "./modules/shape.module";
import { HeadingModule } from "./modules/heading.module";
import { TimerModule } from "./modules/timer.module";
import { MouseEffectModule } from "./modules/MouseEffect.module.js";
import { FortuneCookies } from "./modules/fortuneСookies.module.js";

menu.add(new FortuneCookies());
menu.add(new BackgroundModule());
menu.add(new ClicksModule());
menu.add(new ShapeModule());
menu.add(new HeadingModule());
menu.add(new TimerModule("timer", "Задать таймер"));
menu.add(
  new MouseEffectModule("mouse-effect", "Добавить случайный эффект мышке")
);