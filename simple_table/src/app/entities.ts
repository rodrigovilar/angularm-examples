import { AngularmService, memoryDAO, entityType } from 'angularm';

export let describeDomain = (angularm: AngularmService) => {

  angularm.setupDomain(
    memoryDAO(
      entityType('student', 'students', {id: 'code'})
        .propertyType('code', 'number')
        .propertyType('name', 'string')),
    memoryDAO(
      entityType('client', 'clients', {id: 'id'})
        .propertyType('id', 'number')
        .propertyType('name', 'string'))
  );
};
