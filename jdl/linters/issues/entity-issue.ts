/**
 * Copyright 2013-2022 the original author or authors from the JHipster project.
 *
 * This file is part of the JHipster project, see https://www.jhipster.tech/
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import AbstractIssue, { AbstractIssueArgs } from './abstract-issue';

type EntityIssueArgs = AbstractIssueArgs & { entityName: string };

export default class EntityIssue extends AbstractIssue {
  entityName: string;

  constructor(args: EntityIssueArgs) {
    super(args);
    if (!args.entityName) {
      throw new Error('An entity name must be passed.');
    }
    this.entityName = args.entityName;
  }
}