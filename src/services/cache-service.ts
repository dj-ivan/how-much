import { Injectable } from '@angular/core';

@Injectable()
export class CacheService {

  public budgetAmount: number;
  public budgetLength: number;
  public budgetLengthIndication: string;

  // Seeding the db
  constructor() { }
}