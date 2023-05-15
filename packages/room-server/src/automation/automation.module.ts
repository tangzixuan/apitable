/**
 * APITable <https://github.com/apitable/apitable>
 * Copyright (C) 2022 APITable Ltd. <https://apitable.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NodeModule } from 'node/node.module';
import { UserModule } from 'user/user.module';
import {
  AutomationService,
  RobotTriggerTypeService,
  RobotActionService,
  RobotRobotService,
  RobotActionTypeService,
  RobotTriggerService,
} from './services';
import {
  RobotActionController,
  RobotActionTypeController,
  RobotController,
  RobotRunHistoryController,
  RobotTriggerController,
  RobotTriggerTypeController,
} from './controller';
import {
  AutomationActionRepository,
  AutomationActionTypeRepository,
  AutomationRobotRepository,
  AutomationServiceRepository,
  AutomationTriggerTypeRepository,
  AutomationTriggerRepository,
  AutomationRunHistoryRepository,
} from './repositories';
import { QueueModule } from './queues';
import { FlowWorker } from './workers';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AutomationTriggerRepository,
      AutomationActionRepository,
      AutomationRobotRepository,
      AutomationRunHistoryRepository,
      AutomationServiceRepository,
      AutomationTriggerTypeRepository,
      AutomationActionTypeRepository,
    ]),
    NodeModule,
    UserModule,
    QueueModule,
  ],
  controllers: [
    RobotController,
    RobotRunHistoryController,
    RobotActionTypeController,
    RobotTriggerTypeController,
    RobotActionController,
    RobotTriggerController,
  ],
  providers: [
    AutomationService,
    RobotTriggerService,
    RobotTriggerTypeService,
    RobotActionService,
    RobotRobotService,
    RobotActionTypeService,
    FlowWorker,
  ],
  exports: [RobotRobotService],
})
export class AutomationModule {}
