import './styles.css';
import { ContextMenu } from './menu';

import { BackgroundModule } from './modules/background.module';
import { ClicksModule } from './modules/clicks.module';
import { ShapeModule } from './modules/shape.module';

const menu = new ContextMenu('#menu');

menu.add(new BackgroundModule());
menu.add(new ClicksModule());
menu.add(new ShapeModule());