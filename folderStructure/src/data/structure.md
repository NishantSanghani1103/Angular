# Angular Enterprise Project Structure

```text
src/
│
├── app/
│   │
│   ├── core/
│   │   ├── config/
│   │   │   ├── api.config.ts
│   │   │   ├── auth.config.ts
│   │   │   └── storage.config.ts
│   │   │
│   │   ├── constants/
│   │   │   ├── api.constants.ts
│   │   │   ├── app.constants.ts
│   │   │   └── storage.constants.ts
│   │   │
│   │   ├── guards/
│   │   │   ├── auth.guard.ts
│   │   │   ├── role.guard.ts
│   │   │   └── permission.guard.ts
│   │   │
│   │   ├── interceptors/
│   │   │   ├── auth.interceptor.ts
│   │   │   ├── error.interceptor.ts
│   │   │   ├── loader.interceptor.ts
│   │   │   └── logging.interceptor.ts
│   │   │
│   │   ├── services/
│   │   │   ├── auth.service.ts
│   │   │   ├── storage.service.ts
│   │   │   ├── notification.service.ts
│   │   │   ├── loader.service.ts
│   │   │   └── logger.service.ts
│   │   │
│   │   ├── models/
│   │   │   ├── api-response.model.ts
│   │   │   ├── current-user.model.ts
│   │   │   └── pagination.model.ts
│   │   │
│   │   ├── tokens/
│   │   │   ├── api.token.ts
│   │   │   └── storage.token.ts
│   │   │
│   │   ├── error-handlers/
│   │   │   └── global-error-handler.ts
│   │   │
│   │   └── initialization/
│   │       └── app-initializer.ts
│   │
│   │
│   ├── shared/
│   │   │
│   │   ├── components/
│   │   │   ├── button/
│   │   │   │   ├── button.component.ts
│   │   │   │   ├── button.component.html
│   │   │   │   └── button.component.scss
│   │   │   │
│   │   │   ├── table/
│   │   │   │   ├── table.component.ts
│   │   │   │   ├── table.component.html
│   │   │   │   └── table.component.scss
│   │   │   │
│   │   │   ├── modal/
│   │   │   ├── loader/
│   │   │   ├── pagination/
│   │   │   └── empty-state/
│   │   │
│   │   ├── directives/
│   │   │   ├── autofocus.directive.ts
│   │   │   ├── debounce-click.directive.ts
│   │   │   └── permission.directive.ts
│   │   │
│   │   ├── pipes/
│   │   │   ├── date-format.pipe.ts
│   │   │   ├── currency-format.pipe.ts
│   │   │   └── truncate.pipe.ts
│   │   │
│   │   ├── validators/
│   │   │   ├── email.validator.ts
│   │   │   ├── password.validator.ts
│   │   │   └── phone.validator.ts
│   │   │
│   │   ├── utils/
│   │   │   ├── date.util.ts
│   │   │   ├── string.util.ts
│   │   │   └── object.util.ts
│   │   │
│   │   ├── enums/
│   │   │   ├── role.enum.ts
│   │   │   └── status.enum.ts
│   │   │
│   │   ├── interfaces/
│   │   │   ├── api-response.interface.ts
│   │   │   └── dropdown-option.interface.ts
│   │   │
│   │   └── types/
│   │       └── common.types.ts
│   │
│   │
│   ├── layout/
│   │   │
│   │   ├── shell/
│   │   │   ├── shell.component.ts
│   │   │   ├── shell.component.html
│   │   │   └── shell.component.scss
│   │   │
│   │   ├── header/
│   │   ├── sidebar/
│   │   ├── footer/
│   │   ├── topbar/
│   │   └── breadcrumbs/
│   │
│   │
│   ├── features/
│   │   │
│   │   ├── authentication/
│   │   ├── dashboard/
│   │   ├── user-management/
│   │   ├── role-management/
│   │   ├── customer/
│   │   ├── reports/
│   │   ├── settings/
│   │   └── notifications/
│   │
│   │
│   ├── state/
│   │   ├── app.state.ts
│   │   ├── actions/
│   │   │   └── app.actions.ts
│   │   ├── reducers/
│   │   │   └── app.reducer.ts
│   │   ├── effects/
│   │   │   └── app.effects.ts
│   │   ├── selectors/
│   │   │   └── app.selectors.ts
│   │   └── facade/
│   │       └── app.facade.ts
│   │
│   ├── app.component.ts
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.routes.ts
│   └── app.config.ts
│
├── assets/
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   ├── svg/
│   ├── translations/
│   └── mock-data/
│
├── environments/
│   ├── environment.ts
│   ├── environment.dev.ts
│   ├── environment.qa.ts
│   ├── environment.uat.ts
│   └── environment.prod.ts
│
├── styles/
│   ├── abstracts/
│   │   ├── _variables.scss
│   │   ├── _mixins.scss
│   │   ├── _functions.scss
│   │   └── _breakpoints.scss
│   │
│   ├── base/
│   ├── layout/
│   ├── components/
│   ├── themes/
│   ├── vendors/
│   └── styles.scss
│
└── main.ts
```

## Feature Template

```text
user-management/
│
├── pages/
│   ├── user-list/
│   ├── user-create/
│   ├── user-edit/
│   └── user-details/
│
├── components/
│   ├── user-table/
│   ├── user-filter/
│   ├── user-form/
│   └── user-delete-dialog/
│
├── data-access/
│   ├── services/
│   │   └── user-api.service.ts
│   │
│   ├── repositories/
│   │   └── user.repository.ts
│   │
│   ├── mappers/
│   │   └── user.mapper.ts
│   │
│   └── api/
│       └── user.endpoints.ts
│
├── models/
│   ├── dto/
│   ├── request/
│   ├── response/
│   └── view-model/
│
├── state/
│   ├── actions/
│   │   └── user.actions.ts
│   ├── reducers/
│   │   └── user.reducer.ts
│   ├── effects/
│   │   └── user.effects.ts
│   ├── selectors/
│   │   └── user.selectors.ts
│   └── facade/
│       └── user.facade.ts
│
├── constants/
│   └── user.constants.ts
│
├── enums/
│   └── user-role.enum.ts
│
├── routes/
│   └── user.routes.ts
│
└── index.ts
```
