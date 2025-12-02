
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserTechnician
 * 
 */
export type UserTechnician = $Result.DefaultSelection<Prisma.$UserTechnicianPayload>
/**
 * Model SpecialityArea
 * 
 */
export type SpecialityArea = $Result.DefaultSelection<Prisma.$SpecialityAreaPayload>
/**
 * Model CategoryEtiquette
 * 
 */
export type CategoryEtiquette = $Result.DefaultSelection<Prisma.$CategoryEtiquettePayload>
/**
 * Model SLA
 * 
 */
export type SLA = $Result.DefaultSelection<Prisma.$SLAPayload>
/**
 * Model TicketCategory
 * 
 */
export type TicketCategory = $Result.DefaultSelection<Prisma.$TicketCategoryPayload>
/**
 * Model AutoTriageRule
 * 
 */
export type AutoTriageRule = $Result.DefaultSelection<Prisma.$AutoTriageRulePayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model TicketImage
 * 
 */
export type TicketImage = $Result.DefaultSelection<Prisma.$TicketImagePayload>
/**
 * Model TicketHistory
 * 
 */
export type TicketHistory = $Result.DefaultSelection<Prisma.$TicketHistoryPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model TicketValoration
 * 
 */
export type TicketValoration = $Result.DefaultSelection<Prisma.$TicketValorationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const E_AssignedMethod: {
  AUTOMATIC: 'AUTOMATIC',
  MANUAL: 'MANUAL'
};

export type E_AssignedMethod = (typeof E_AssignedMethod)[keyof typeof E_AssignedMethod]


export const E_Role: {
  ADMIN: 'ADMIN',
  USER: 'USER',
  TECHNICIAN: 'TECHNICIAN'
};

export type E_Role = (typeof E_Role)[keyof typeof E_Role]


export const E_TechnicianStatus: {
  AVAILABLE: 'AVAILABLE',
  BUSY: 'BUSY'
};

export type E_TechnicianStatus = (typeof E_TechnicianStatus)[keyof typeof E_TechnicianStatus]


export const E_TicketStatus: {
  PENDING: 'PENDING',
  ASSIGNED: 'ASSIGNED',
  IN_PROGRESS: 'IN_PROGRESS',
  RESOLVED: 'RESOLVED',
  CLOSED: 'CLOSED'
};

export type E_TicketStatus = (typeof E_TicketStatus)[keyof typeof E_TicketStatus]


export const E_TicketPriority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type E_TicketPriority = (typeof E_TicketPriority)[keyof typeof E_TicketPriority]

}

export type E_AssignedMethod = $Enums.E_AssignedMethod

export const E_AssignedMethod: typeof $Enums.E_AssignedMethod

export type E_Role = $Enums.E_Role

export const E_Role: typeof $Enums.E_Role

export type E_TechnicianStatus = $Enums.E_TechnicianStatus

export const E_TechnicianStatus: typeof $Enums.E_TechnicianStatus

export type E_TicketStatus = $Enums.E_TicketStatus

export const E_TicketStatus: typeof $Enums.E_TicketStatus

export type E_TicketPriority = $Enums.E_TicketPriority

export const E_TicketPriority: typeof $Enums.E_TicketPriority

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userTechnician`: Exposes CRUD operations for the **UserTechnician** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserTechnicians
    * const userTechnicians = await prisma.userTechnician.findMany()
    * ```
    */
  get userTechnician(): Prisma.UserTechnicianDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.specialityArea`: Exposes CRUD operations for the **SpecialityArea** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpecialityAreas
    * const specialityAreas = await prisma.specialityArea.findMany()
    * ```
    */
  get specialityArea(): Prisma.SpecialityAreaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoryEtiquette`: Exposes CRUD operations for the **CategoryEtiquette** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryEtiquettes
    * const categoryEtiquettes = await prisma.categoryEtiquette.findMany()
    * ```
    */
  get categoryEtiquette(): Prisma.CategoryEtiquetteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sLA`: Exposes CRUD operations for the **SLA** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SLAS
    * const sLAS = await prisma.sLA.findMany()
    * ```
    */
  get sLA(): Prisma.SLADelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketCategory`: Exposes CRUD operations for the **TicketCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketCategories
    * const ticketCategories = await prisma.ticketCategory.findMany()
    * ```
    */
  get ticketCategory(): Prisma.TicketCategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.autoTriageRule`: Exposes CRUD operations for the **AutoTriageRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AutoTriageRules
    * const autoTriageRules = await prisma.autoTriageRule.findMany()
    * ```
    */
  get autoTriageRule(): Prisma.AutoTriageRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketImage`: Exposes CRUD operations for the **TicketImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketImages
    * const ticketImages = await prisma.ticketImage.findMany()
    * ```
    */
  get ticketImage(): Prisma.TicketImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketHistory`: Exposes CRUD operations for the **TicketHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketHistories
    * const ticketHistories = await prisma.ticketHistory.findMany()
    * ```
    */
  get ticketHistory(): Prisma.TicketHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketValoration`: Exposes CRUD operations for the **TicketValoration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketValorations
    * const ticketValorations = await prisma.ticketValoration.findMany()
    * ```
    */
  get ticketValoration(): Prisma.TicketValorationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserTechnician: 'UserTechnician',
    SpecialityArea: 'SpecialityArea',
    CategoryEtiquette: 'CategoryEtiquette',
    SLA: 'SLA',
    TicketCategory: 'TicketCategory',
    AutoTriageRule: 'AutoTriageRule',
    Ticket: 'Ticket',
    TicketImage: 'TicketImage',
    TicketHistory: 'TicketHistory',
    Notification: 'Notification',
    TicketValoration: 'TicketValoration'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userTechnician" | "specialityArea" | "categoryEtiquette" | "sLA" | "ticketCategory" | "autoTriageRule" | "ticket" | "ticketImage" | "ticketHistory" | "notification" | "ticketValoration"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserTechnician: {
        payload: Prisma.$UserTechnicianPayload<ExtArgs>
        fields: Prisma.UserTechnicianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserTechnicianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTechnicianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserTechnicianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTechnicianPayload>
          }
          findFirst: {
            args: Prisma.UserTechnicianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTechnicianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserTechnicianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTechnicianPayload>
          }
          findMany: {
            args: Prisma.UserTechnicianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTechnicianPayload>[]
          }
          create: {
            args: Prisma.UserTechnicianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTechnicianPayload>
          }
          createMany: {
            args: Prisma.UserTechnicianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserTechnicianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTechnicianPayload>
          }
          update: {
            args: Prisma.UserTechnicianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTechnicianPayload>
          }
          deleteMany: {
            args: Prisma.UserTechnicianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserTechnicianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserTechnicianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserTechnicianPayload>
          }
          aggregate: {
            args: Prisma.UserTechnicianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserTechnician>
          }
          groupBy: {
            args: Prisma.UserTechnicianGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserTechnicianGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserTechnicianCountArgs<ExtArgs>
            result: $Utils.Optional<UserTechnicianCountAggregateOutputType> | number
          }
        }
      }
      SpecialityArea: {
        payload: Prisma.$SpecialityAreaPayload<ExtArgs>
        fields: Prisma.SpecialityAreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SpecialityAreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityAreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SpecialityAreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityAreaPayload>
          }
          findFirst: {
            args: Prisma.SpecialityAreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityAreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SpecialityAreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityAreaPayload>
          }
          findMany: {
            args: Prisma.SpecialityAreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityAreaPayload>[]
          }
          create: {
            args: Prisma.SpecialityAreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityAreaPayload>
          }
          createMany: {
            args: Prisma.SpecialityAreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SpecialityAreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityAreaPayload>
          }
          update: {
            args: Prisma.SpecialityAreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityAreaPayload>
          }
          deleteMany: {
            args: Prisma.SpecialityAreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SpecialityAreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SpecialityAreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SpecialityAreaPayload>
          }
          aggregate: {
            args: Prisma.SpecialityAreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecialityArea>
          }
          groupBy: {
            args: Prisma.SpecialityAreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecialityAreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.SpecialityAreaCountArgs<ExtArgs>
            result: $Utils.Optional<SpecialityAreaCountAggregateOutputType> | number
          }
        }
      }
      CategoryEtiquette: {
        payload: Prisma.$CategoryEtiquettePayload<ExtArgs>
        fields: Prisma.CategoryEtiquetteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryEtiquetteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryEtiquettePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryEtiquetteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryEtiquettePayload>
          }
          findFirst: {
            args: Prisma.CategoryEtiquetteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryEtiquettePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryEtiquetteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryEtiquettePayload>
          }
          findMany: {
            args: Prisma.CategoryEtiquetteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryEtiquettePayload>[]
          }
          create: {
            args: Prisma.CategoryEtiquetteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryEtiquettePayload>
          }
          createMany: {
            args: Prisma.CategoryEtiquetteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryEtiquetteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryEtiquettePayload>
          }
          update: {
            args: Prisma.CategoryEtiquetteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryEtiquettePayload>
          }
          deleteMany: {
            args: Prisma.CategoryEtiquetteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryEtiquetteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryEtiquetteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryEtiquettePayload>
          }
          aggregate: {
            args: Prisma.CategoryEtiquetteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoryEtiquette>
          }
          groupBy: {
            args: Prisma.CategoryEtiquetteGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryEtiquetteGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryEtiquetteCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryEtiquetteCountAggregateOutputType> | number
          }
        }
      }
      SLA: {
        payload: Prisma.$SLAPayload<ExtArgs>
        fields: Prisma.SLAFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SLAFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SLAPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SLAFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SLAPayload>
          }
          findFirst: {
            args: Prisma.SLAFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SLAPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SLAFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SLAPayload>
          }
          findMany: {
            args: Prisma.SLAFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SLAPayload>[]
          }
          create: {
            args: Prisma.SLACreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SLAPayload>
          }
          createMany: {
            args: Prisma.SLACreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SLADeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SLAPayload>
          }
          update: {
            args: Prisma.SLAUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SLAPayload>
          }
          deleteMany: {
            args: Prisma.SLADeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SLAUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SLAUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SLAPayload>
          }
          aggregate: {
            args: Prisma.SLAAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSLA>
          }
          groupBy: {
            args: Prisma.SLAGroupByArgs<ExtArgs>
            result: $Utils.Optional<SLAGroupByOutputType>[]
          }
          count: {
            args: Prisma.SLACountArgs<ExtArgs>
            result: $Utils.Optional<SLACountAggregateOutputType> | number
          }
        }
      }
      TicketCategory: {
        payload: Prisma.$TicketCategoryPayload<ExtArgs>
        fields: Prisma.TicketCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketCategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketCategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>
          }
          findFirst: {
            args: Prisma.TicketCategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketCategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>
          }
          findMany: {
            args: Prisma.TicketCategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>[]
          }
          create: {
            args: Prisma.TicketCategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>
          }
          createMany: {
            args: Prisma.TicketCategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TicketCategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>
          }
          update: {
            args: Prisma.TicketCategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>
          }
          deleteMany: {
            args: Prisma.TicketCategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketCategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketCategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketCategoryPayload>
          }
          aggregate: {
            args: Prisma.TicketCategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketCategory>
          }
          groupBy: {
            args: Prisma.TicketCategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCategoryCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCategoryCountAggregateOutputType> | number
          }
        }
      }
      AutoTriageRule: {
        payload: Prisma.$AutoTriageRulePayload<ExtArgs>
        fields: Prisma.AutoTriageRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutoTriageRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoTriageRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutoTriageRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoTriageRulePayload>
          }
          findFirst: {
            args: Prisma.AutoTriageRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoTriageRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutoTriageRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoTriageRulePayload>
          }
          findMany: {
            args: Prisma.AutoTriageRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoTriageRulePayload>[]
          }
          create: {
            args: Prisma.AutoTriageRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoTriageRulePayload>
          }
          createMany: {
            args: Prisma.AutoTriageRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AutoTriageRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoTriageRulePayload>
          }
          update: {
            args: Prisma.AutoTriageRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoTriageRulePayload>
          }
          deleteMany: {
            args: Prisma.AutoTriageRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutoTriageRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AutoTriageRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutoTriageRulePayload>
          }
          aggregate: {
            args: Prisma.AutoTriageRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutoTriageRule>
          }
          groupBy: {
            args: Prisma.AutoTriageRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutoTriageRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutoTriageRuleCountArgs<ExtArgs>
            result: $Utils.Optional<AutoTriageRuleCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      TicketImage: {
        payload: Prisma.$TicketImagePayload<ExtArgs>
        fields: Prisma.TicketImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketImagePayload>
          }
          findFirst: {
            args: Prisma.TicketImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketImagePayload>
          }
          findMany: {
            args: Prisma.TicketImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketImagePayload>[]
          }
          create: {
            args: Prisma.TicketImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketImagePayload>
          }
          createMany: {
            args: Prisma.TicketImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TicketImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketImagePayload>
          }
          update: {
            args: Prisma.TicketImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketImagePayload>
          }
          deleteMany: {
            args: Prisma.TicketImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketImagePayload>
          }
          aggregate: {
            args: Prisma.TicketImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketImage>
          }
          groupBy: {
            args: Prisma.TicketImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketImageCountArgs<ExtArgs>
            result: $Utils.Optional<TicketImageCountAggregateOutputType> | number
          }
        }
      }
      TicketHistory: {
        payload: Prisma.$TicketHistoryPayload<ExtArgs>
        fields: Prisma.TicketHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketHistoryPayload>
          }
          findFirst: {
            args: Prisma.TicketHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketHistoryPayload>
          }
          findMany: {
            args: Prisma.TicketHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketHistoryPayload>[]
          }
          create: {
            args: Prisma.TicketHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketHistoryPayload>
          }
          createMany: {
            args: Prisma.TicketHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TicketHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketHistoryPayload>
          }
          update: {
            args: Prisma.TicketHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TicketHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketHistoryPayload>
          }
          aggregate: {
            args: Prisma.TicketHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketHistory>
          }
          groupBy: {
            args: Prisma.TicketHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TicketHistoryCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      TicketValoration: {
        payload: Prisma.$TicketValorationPayload<ExtArgs>
        fields: Prisma.TicketValorationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketValorationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketValorationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketValorationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketValorationPayload>
          }
          findFirst: {
            args: Prisma.TicketValorationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketValorationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketValorationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketValorationPayload>
          }
          findMany: {
            args: Prisma.TicketValorationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketValorationPayload>[]
          }
          create: {
            args: Prisma.TicketValorationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketValorationPayload>
          }
          createMany: {
            args: Prisma.TicketValorationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TicketValorationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketValorationPayload>
          }
          update: {
            args: Prisma.TicketValorationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketValorationPayload>
          }
          deleteMany: {
            args: Prisma.TicketValorationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketValorationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketValorationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketValorationPayload>
          }
          aggregate: {
            args: Prisma.TicketValorationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketValoration>
          }
          groupBy: {
            args: Prisma.TicketValorationGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketValorationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketValorationCountArgs<ExtArgs>
            result: $Utils.Optional<TicketValorationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userTechnician?: UserTechnicianOmit
    specialityArea?: SpecialityAreaOmit
    categoryEtiquette?: CategoryEtiquetteOmit
    sLA?: SLAOmit
    ticketCategory?: TicketCategoryOmit
    autoTriageRule?: AutoTriageRuleOmit
    ticket?: TicketOmit
    ticketImage?: TicketImageOmit
    ticketHistory?: TicketHistoryOmit
    notification?: NotificationOmit
    ticketValoration?: TicketValorationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tickets: number
    ticketHistory: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | UserCountOutputTypeCountTicketsArgs
    ticketHistory?: boolean | UserCountOutputTypeCountTicketHistoryArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type UserTechnicianCountOutputType
   */

  export type UserTechnicianCountOutputType = {
    specialities: number
    tickets: number
  }

  export type UserTechnicianCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialities?: boolean | UserTechnicianCountOutputTypeCountSpecialitiesArgs
    tickets?: boolean | UserTechnicianCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * UserTechnicianCountOutputType without action
   */
  export type UserTechnicianCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnicianCountOutputType
     */
    select?: UserTechnicianCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserTechnicianCountOutputType without action
   */
  export type UserTechnicianCountOutputTypeCountSpecialitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialityAreaWhereInput
  }

  /**
   * UserTechnicianCountOutputType without action
   */
  export type UserTechnicianCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type SpecialityAreaCountOutputType
   */

  export type SpecialityAreaCountOutputType = {
    technicians: number
    ticketCategories: number
  }

  export type SpecialityAreaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technicians?: boolean | SpecialityAreaCountOutputTypeCountTechniciansArgs
    ticketCategories?: boolean | SpecialityAreaCountOutputTypeCountTicketCategoriesArgs
  }

  // Custom InputTypes
  /**
   * SpecialityAreaCountOutputType without action
   */
  export type SpecialityAreaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityAreaCountOutputType
     */
    select?: SpecialityAreaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SpecialityAreaCountOutputType without action
   */
  export type SpecialityAreaCountOutputTypeCountTechniciansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTechnicianWhereInput
  }

  /**
   * SpecialityAreaCountOutputType without action
   */
  export type SpecialityAreaCountOutputTypeCountTicketCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketCategoryWhereInput
  }


  /**
   * Count Type CategoryEtiquetteCountOutputType
   */

  export type CategoryEtiquetteCountOutputType = {
    ticketCategories: number
  }

  export type CategoryEtiquetteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketCategories?: boolean | CategoryEtiquetteCountOutputTypeCountTicketCategoriesArgs
  }

  // Custom InputTypes
  /**
   * CategoryEtiquetteCountOutputType without action
   */
  export type CategoryEtiquetteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryEtiquetteCountOutputType
     */
    select?: CategoryEtiquetteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryEtiquetteCountOutputType without action
   */
  export type CategoryEtiquetteCountOutputTypeCountTicketCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketCategoryWhereInput
  }


  /**
   * Count Type SLACountOutputType
   */

  export type SLACountOutputType = {
    TicketCategory: number
  }

  export type SLACountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TicketCategory?: boolean | SLACountOutputTypeCountTicketCategoryArgs
  }

  // Custom InputTypes
  /**
   * SLACountOutputType without action
   */
  export type SLACountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SLACountOutputType
     */
    select?: SLACountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SLACountOutputType without action
   */
  export type SLACountOutputTypeCountTicketCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketCategoryWhereInput
  }


  /**
   * Count Type TicketCategoryCountOutputType
   */

  export type TicketCategoryCountOutputType = {
    specialities: number
    categoryEtiquettes: number
    tickets: number
  }

  export type TicketCategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    specialities?: boolean | TicketCategoryCountOutputTypeCountSpecialitiesArgs
    categoryEtiquettes?: boolean | TicketCategoryCountOutputTypeCountCategoryEtiquettesArgs
    tickets?: boolean | TicketCategoryCountOutputTypeCountTicketsArgs
  }

  // Custom InputTypes
  /**
   * TicketCategoryCountOutputType without action
   */
  export type TicketCategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategoryCountOutputType
     */
    select?: TicketCategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCategoryCountOutputType without action
   */
  export type TicketCategoryCountOutputTypeCountSpecialitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialityAreaWhereInput
  }

  /**
   * TicketCategoryCountOutputType without action
   */
  export type TicketCategoryCountOutputTypeCountCategoryEtiquettesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryEtiquetteWhereInput
  }

  /**
   * TicketCategoryCountOutputType without action
   */
  export type TicketCategoryCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type AutoTriageRuleCountOutputType
   */

  export type AutoTriageRuleCountOutputType = {
    Ticket: number
  }

  export type AutoTriageRuleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticket?: boolean | AutoTriageRuleCountOutputTypeCountTicketArgs
  }

  // Custom InputTypes
  /**
   * AutoTriageRuleCountOutputType without action
   */
  export type AutoTriageRuleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoTriageRuleCountOutputType
     */
    select?: AutoTriageRuleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AutoTriageRuleCountOutputType without action
   */
  export type AutoTriageRuleCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    ticketImages: number
    ticketHistory: number
    notifications: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketImages?: boolean | TicketCountOutputTypeCountTicketImagesArgs
    ticketHistory?: boolean | TicketCountOutputTypeCountTicketHistoryArgs
    notifications?: boolean | TicketCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountTicketImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketImageWhereInput
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountTicketHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketHistoryWhereInput
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type TicketHistoryCountOutputType
   */

  export type TicketHistoryCountOutputType = {
    ticketImages: number
  }

  export type TicketHistoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketImages?: boolean | TicketHistoryCountOutputTypeCountTicketImagesArgs
  }

  // Custom InputTypes
  /**
   * TicketHistoryCountOutputType without action
   */
  export type TicketHistoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistoryCountOutputType
     */
    select?: TicketHistoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketHistoryCountOutputType without action
   */
  export type TicketHistoryCountOutputTypeCountTicketImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    lastName: string | null
    email: string | null
    password: string | null
    profileImage: string | null
    genre: string | null
    dob: Date | null
    cellphone: string | null
    role: $Enums.E_Role | null
    status: boolean | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    lastName: string | null
    email: string | null
    password: string | null
    profileImage: string | null
    genre: string | null
    dob: Date | null
    cellphone: string | null
    role: $Enums.E_Role | null
    status: boolean | null
    lastLogin: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    lastName: number
    email: number
    password: number
    profileImage: number
    genre: number
    dob: number
    cellphone: number
    role: number
    status: number
    lastLogin: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    email?: true
    password?: true
    profileImage?: true
    genre?: true
    dob?: true
    cellphone?: true
    role?: true
    status?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    email?: true
    password?: true
    profileImage?: true
    genre?: true
    dob?: true
    cellphone?: true
    role?: true
    status?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    lastName?: true
    email?: true
    password?: true
    profileImage?: true
    genre?: true
    dob?: true
    cellphone?: true
    role?: true
    status?: true
    lastLogin?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    lastName: string
    email: string
    password: string
    profileImage: string | null
    genre: string | null
    dob: Date | null
    cellphone: string | null
    role: $Enums.E_Role
    status: boolean
    lastLogin: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    profileImage?: boolean
    genre?: boolean
    dob?: boolean
    cellphone?: boolean
    role?: boolean
    status?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userTechnician?: boolean | User$userTechnicianArgs<ExtArgs>
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    ticketHistory?: boolean | User$ticketHistoryArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    profileImage?: boolean
    genre?: boolean
    dob?: boolean
    cellphone?: boolean
    role?: boolean
    status?: boolean
    lastLogin?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "lastName" | "email" | "password" | "profileImage" | "genre" | "dob" | "cellphone" | "role" | "status" | "lastLogin" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userTechnician?: boolean | User$userTechnicianArgs<ExtArgs>
    tickets?: boolean | User$ticketsArgs<ExtArgs>
    ticketHistory?: boolean | User$ticketHistoryArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userTechnician: Prisma.$UserTechnicianPayload<ExtArgs> | null
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      ticketHistory: Prisma.$TicketHistoryPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      lastName: string
      email: string
      password: string
      profileImage: string | null
      genre: string | null
      dob: Date | null
      cellphone: string | null
      role: $Enums.E_Role
      status: boolean
      lastLogin: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userTechnician<T extends User$userTechnicianArgs<ExtArgs> = {}>(args?: Subset<T, User$userTechnicianArgs<ExtArgs>>): Prisma__UserTechnicianClient<$Result.GetResult<Prisma.$UserTechnicianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tickets<T extends User$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, User$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticketHistory<T extends User$ticketHistoryArgs<ExtArgs> = {}>(args?: Subset<T, User$ticketHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly profileImage: FieldRef<"User", 'String'>
    readonly genre: FieldRef<"User", 'String'>
    readonly dob: FieldRef<"User", 'DateTime'>
    readonly cellphone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'E_Role'>
    readonly status: FieldRef<"User", 'Boolean'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userTechnician
   */
  export type User$userTechnicianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnician
     */
    select?: UserTechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnician
     */
    omit?: UserTechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnicianInclude<ExtArgs> | null
    where?: UserTechnicianWhereInput
  }

  /**
   * User.tickets
   */
  export type User$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * User.ticketHistory
   */
  export type User$ticketHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryInclude<ExtArgs> | null
    where?: TicketHistoryWhereInput
    orderBy?: TicketHistoryOrderByWithRelationInput | TicketHistoryOrderByWithRelationInput[]
    cursor?: TicketHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketHistoryScalarFieldEnum | TicketHistoryScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserTechnician
   */

  export type AggregateUserTechnician = {
    _count: UserTechnicianCountAggregateOutputType | null
    _avg: UserTechnicianAvgAggregateOutputType | null
    _sum: UserTechnicianSumAggregateOutputType | null
    _min: UserTechnicianMinAggregateOutputType | null
    _max: UserTechnicianMaxAggregateOutputType | null
  }

  export type UserTechnicianAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    workload: number | null
  }

  export type UserTechnicianSumAggregateOutputType = {
    id: number | null
    userId: number | null
    workload: number | null
  }

  export type UserTechnicianMinAggregateOutputType = {
    id: number | null
    userId: number | null
    status: $Enums.E_TechnicianStatus | null
    workload: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserTechnicianMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    status: $Enums.E_TechnicianStatus | null
    workload: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserTechnicianCountAggregateOutputType = {
    id: number
    userId: number
    status: number
    workload: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserTechnicianAvgAggregateInputType = {
    id?: true
    userId?: true
    workload?: true
  }

  export type UserTechnicianSumAggregateInputType = {
    id?: true
    userId?: true
    workload?: true
  }

  export type UserTechnicianMinAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    workload?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserTechnicianMaxAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    workload?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserTechnicianCountAggregateInputType = {
    id?: true
    userId?: true
    status?: true
    workload?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserTechnicianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTechnician to aggregate.
     */
    where?: UserTechnicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTechnicians to fetch.
     */
    orderBy?: UserTechnicianOrderByWithRelationInput | UserTechnicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserTechnicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTechnicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTechnicians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserTechnicians
    **/
    _count?: true | UserTechnicianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserTechnicianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserTechnicianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserTechnicianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserTechnicianMaxAggregateInputType
  }

  export type GetUserTechnicianAggregateType<T extends UserTechnicianAggregateArgs> = {
        [P in keyof T & keyof AggregateUserTechnician]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserTechnician[P]>
      : GetScalarType<T[P], AggregateUserTechnician[P]>
  }




  export type UserTechnicianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserTechnicianWhereInput
    orderBy?: UserTechnicianOrderByWithAggregationInput | UserTechnicianOrderByWithAggregationInput[]
    by: UserTechnicianScalarFieldEnum[] | UserTechnicianScalarFieldEnum
    having?: UserTechnicianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserTechnicianCountAggregateInputType | true
    _avg?: UserTechnicianAvgAggregateInputType
    _sum?: UserTechnicianSumAggregateInputType
    _min?: UserTechnicianMinAggregateInputType
    _max?: UserTechnicianMaxAggregateInputType
  }

  export type UserTechnicianGroupByOutputType = {
    id: number
    userId: number
    status: $Enums.E_TechnicianStatus
    workload: number
    createdAt: Date
    updatedAt: Date
    _count: UserTechnicianCountAggregateOutputType | null
    _avg: UserTechnicianAvgAggregateOutputType | null
    _sum: UserTechnicianSumAggregateOutputType | null
    _min: UserTechnicianMinAggregateOutputType | null
    _max: UserTechnicianMaxAggregateOutputType | null
  }

  type GetUserTechnicianGroupByPayload<T extends UserTechnicianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserTechnicianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserTechnicianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserTechnicianGroupByOutputType[P]>
            : GetScalarType<T[P], UserTechnicianGroupByOutputType[P]>
        }
      >
    >


  export type UserTechnicianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    status?: boolean
    workload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    specialities?: boolean | UserTechnician$specialitiesArgs<ExtArgs>
    tickets?: boolean | UserTechnician$ticketsArgs<ExtArgs>
    _count?: boolean | UserTechnicianCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userTechnician"]>



  export type UserTechnicianSelectScalar = {
    id?: boolean
    userId?: boolean
    status?: boolean
    workload?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserTechnicianOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "status" | "workload" | "createdAt" | "updatedAt", ExtArgs["result"]["userTechnician"]>
  export type UserTechnicianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    specialities?: boolean | UserTechnician$specialitiesArgs<ExtArgs>
    tickets?: boolean | UserTechnician$ticketsArgs<ExtArgs>
    _count?: boolean | UserTechnicianCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserTechnicianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserTechnician"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      specialities: Prisma.$SpecialityAreaPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      status: $Enums.E_TechnicianStatus
      workload: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userTechnician"]>
    composites: {}
  }

  type UserTechnicianGetPayload<S extends boolean | null | undefined | UserTechnicianDefaultArgs> = $Result.GetResult<Prisma.$UserTechnicianPayload, S>

  type UserTechnicianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserTechnicianFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserTechnicianCountAggregateInputType | true
    }

  export interface UserTechnicianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserTechnician'], meta: { name: 'UserTechnician' } }
    /**
     * Find zero or one UserTechnician that matches the filter.
     * @param {UserTechnicianFindUniqueArgs} args - Arguments to find a UserTechnician
     * @example
     * // Get one UserTechnician
     * const userTechnician = await prisma.userTechnician.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserTechnicianFindUniqueArgs>(args: SelectSubset<T, UserTechnicianFindUniqueArgs<ExtArgs>>): Prisma__UserTechnicianClient<$Result.GetResult<Prisma.$UserTechnicianPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserTechnician that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserTechnicianFindUniqueOrThrowArgs} args - Arguments to find a UserTechnician
     * @example
     * // Get one UserTechnician
     * const userTechnician = await prisma.userTechnician.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserTechnicianFindUniqueOrThrowArgs>(args: SelectSubset<T, UserTechnicianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserTechnicianClient<$Result.GetResult<Prisma.$UserTechnicianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTechnician that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTechnicianFindFirstArgs} args - Arguments to find a UserTechnician
     * @example
     * // Get one UserTechnician
     * const userTechnician = await prisma.userTechnician.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserTechnicianFindFirstArgs>(args?: SelectSubset<T, UserTechnicianFindFirstArgs<ExtArgs>>): Prisma__UserTechnicianClient<$Result.GetResult<Prisma.$UserTechnicianPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserTechnician that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTechnicianFindFirstOrThrowArgs} args - Arguments to find a UserTechnician
     * @example
     * // Get one UserTechnician
     * const userTechnician = await prisma.userTechnician.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserTechnicianFindFirstOrThrowArgs>(args?: SelectSubset<T, UserTechnicianFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserTechnicianClient<$Result.GetResult<Prisma.$UserTechnicianPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserTechnicians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTechnicianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserTechnicians
     * const userTechnicians = await prisma.userTechnician.findMany()
     * 
     * // Get first 10 UserTechnicians
     * const userTechnicians = await prisma.userTechnician.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userTechnicianWithIdOnly = await prisma.userTechnician.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserTechnicianFindManyArgs>(args?: SelectSubset<T, UserTechnicianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTechnicianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserTechnician.
     * @param {UserTechnicianCreateArgs} args - Arguments to create a UserTechnician.
     * @example
     * // Create one UserTechnician
     * const UserTechnician = await prisma.userTechnician.create({
     *   data: {
     *     // ... data to create a UserTechnician
     *   }
     * })
     * 
     */
    create<T extends UserTechnicianCreateArgs>(args: SelectSubset<T, UserTechnicianCreateArgs<ExtArgs>>): Prisma__UserTechnicianClient<$Result.GetResult<Prisma.$UserTechnicianPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserTechnicians.
     * @param {UserTechnicianCreateManyArgs} args - Arguments to create many UserTechnicians.
     * @example
     * // Create many UserTechnicians
     * const userTechnician = await prisma.userTechnician.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserTechnicianCreateManyArgs>(args?: SelectSubset<T, UserTechnicianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserTechnician.
     * @param {UserTechnicianDeleteArgs} args - Arguments to delete one UserTechnician.
     * @example
     * // Delete one UserTechnician
     * const UserTechnician = await prisma.userTechnician.delete({
     *   where: {
     *     // ... filter to delete one UserTechnician
     *   }
     * })
     * 
     */
    delete<T extends UserTechnicianDeleteArgs>(args: SelectSubset<T, UserTechnicianDeleteArgs<ExtArgs>>): Prisma__UserTechnicianClient<$Result.GetResult<Prisma.$UserTechnicianPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserTechnician.
     * @param {UserTechnicianUpdateArgs} args - Arguments to update one UserTechnician.
     * @example
     * // Update one UserTechnician
     * const userTechnician = await prisma.userTechnician.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserTechnicianUpdateArgs>(args: SelectSubset<T, UserTechnicianUpdateArgs<ExtArgs>>): Prisma__UserTechnicianClient<$Result.GetResult<Prisma.$UserTechnicianPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserTechnicians.
     * @param {UserTechnicianDeleteManyArgs} args - Arguments to filter UserTechnicians to delete.
     * @example
     * // Delete a few UserTechnicians
     * const { count } = await prisma.userTechnician.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserTechnicianDeleteManyArgs>(args?: SelectSubset<T, UserTechnicianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserTechnicians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTechnicianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserTechnicians
     * const userTechnician = await prisma.userTechnician.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserTechnicianUpdateManyArgs>(args: SelectSubset<T, UserTechnicianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserTechnician.
     * @param {UserTechnicianUpsertArgs} args - Arguments to update or create a UserTechnician.
     * @example
     * // Update or create a UserTechnician
     * const userTechnician = await prisma.userTechnician.upsert({
     *   create: {
     *     // ... data to create a UserTechnician
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserTechnician we want to update
     *   }
     * })
     */
    upsert<T extends UserTechnicianUpsertArgs>(args: SelectSubset<T, UserTechnicianUpsertArgs<ExtArgs>>): Prisma__UserTechnicianClient<$Result.GetResult<Prisma.$UserTechnicianPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserTechnicians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTechnicianCountArgs} args - Arguments to filter UserTechnicians to count.
     * @example
     * // Count the number of UserTechnicians
     * const count = await prisma.userTechnician.count({
     *   where: {
     *     // ... the filter for the UserTechnicians we want to count
     *   }
     * })
    **/
    count<T extends UserTechnicianCountArgs>(
      args?: Subset<T, UserTechnicianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserTechnicianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserTechnician.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTechnicianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserTechnicianAggregateArgs>(args: Subset<T, UserTechnicianAggregateArgs>): Prisma.PrismaPromise<GetUserTechnicianAggregateType<T>>

    /**
     * Group by UserTechnician.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserTechnicianGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserTechnicianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserTechnicianGroupByArgs['orderBy'] }
        : { orderBy?: UserTechnicianGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserTechnicianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserTechnicianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserTechnician model
   */
  readonly fields: UserTechnicianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserTechnician.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserTechnicianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    specialities<T extends UserTechnician$specialitiesArgs<ExtArgs> = {}>(args?: Subset<T, UserTechnician$specialitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialityAreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends UserTechnician$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, UserTechnician$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserTechnician model
   */
  interface UserTechnicianFieldRefs {
    readonly id: FieldRef<"UserTechnician", 'Int'>
    readonly userId: FieldRef<"UserTechnician", 'Int'>
    readonly status: FieldRef<"UserTechnician", 'E_TechnicianStatus'>
    readonly workload: FieldRef<"UserTechnician", 'Int'>
    readonly createdAt: FieldRef<"UserTechnician", 'DateTime'>
    readonly updatedAt: FieldRef<"UserTechnician", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserTechnician findUnique
   */
  export type UserTechnicianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnician
     */
    select?: UserTechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnician
     */
    omit?: UserTechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnicianInclude<ExtArgs> | null
    /**
     * Filter, which UserTechnician to fetch.
     */
    where: UserTechnicianWhereUniqueInput
  }

  /**
   * UserTechnician findUniqueOrThrow
   */
  export type UserTechnicianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnician
     */
    select?: UserTechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnician
     */
    omit?: UserTechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnicianInclude<ExtArgs> | null
    /**
     * Filter, which UserTechnician to fetch.
     */
    where: UserTechnicianWhereUniqueInput
  }

  /**
   * UserTechnician findFirst
   */
  export type UserTechnicianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnician
     */
    select?: UserTechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnician
     */
    omit?: UserTechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnicianInclude<ExtArgs> | null
    /**
     * Filter, which UserTechnician to fetch.
     */
    where?: UserTechnicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTechnicians to fetch.
     */
    orderBy?: UserTechnicianOrderByWithRelationInput | UserTechnicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTechnicians.
     */
    cursor?: UserTechnicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTechnicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTechnicians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTechnicians.
     */
    distinct?: UserTechnicianScalarFieldEnum | UserTechnicianScalarFieldEnum[]
  }

  /**
   * UserTechnician findFirstOrThrow
   */
  export type UserTechnicianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnician
     */
    select?: UserTechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnician
     */
    omit?: UserTechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnicianInclude<ExtArgs> | null
    /**
     * Filter, which UserTechnician to fetch.
     */
    where?: UserTechnicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTechnicians to fetch.
     */
    orderBy?: UserTechnicianOrderByWithRelationInput | UserTechnicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserTechnicians.
     */
    cursor?: UserTechnicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTechnicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTechnicians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserTechnicians.
     */
    distinct?: UserTechnicianScalarFieldEnum | UserTechnicianScalarFieldEnum[]
  }

  /**
   * UserTechnician findMany
   */
  export type UserTechnicianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnician
     */
    select?: UserTechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnician
     */
    omit?: UserTechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnicianInclude<ExtArgs> | null
    /**
     * Filter, which UserTechnicians to fetch.
     */
    where?: UserTechnicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserTechnicians to fetch.
     */
    orderBy?: UserTechnicianOrderByWithRelationInput | UserTechnicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserTechnicians.
     */
    cursor?: UserTechnicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserTechnicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserTechnicians.
     */
    skip?: number
    distinct?: UserTechnicianScalarFieldEnum | UserTechnicianScalarFieldEnum[]
  }

  /**
   * UserTechnician create
   */
  export type UserTechnicianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnician
     */
    select?: UserTechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnician
     */
    omit?: UserTechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnicianInclude<ExtArgs> | null
    /**
     * The data needed to create a UserTechnician.
     */
    data: XOR<UserTechnicianCreateInput, UserTechnicianUncheckedCreateInput>
  }

  /**
   * UserTechnician createMany
   */
  export type UserTechnicianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserTechnicians.
     */
    data: UserTechnicianCreateManyInput | UserTechnicianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserTechnician update
   */
  export type UserTechnicianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnician
     */
    select?: UserTechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnician
     */
    omit?: UserTechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnicianInclude<ExtArgs> | null
    /**
     * The data needed to update a UserTechnician.
     */
    data: XOR<UserTechnicianUpdateInput, UserTechnicianUncheckedUpdateInput>
    /**
     * Choose, which UserTechnician to update.
     */
    where: UserTechnicianWhereUniqueInput
  }

  /**
   * UserTechnician updateMany
   */
  export type UserTechnicianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserTechnicians.
     */
    data: XOR<UserTechnicianUpdateManyMutationInput, UserTechnicianUncheckedUpdateManyInput>
    /**
     * Filter which UserTechnicians to update
     */
    where?: UserTechnicianWhereInput
    /**
     * Limit how many UserTechnicians to update.
     */
    limit?: number
  }

  /**
   * UserTechnician upsert
   */
  export type UserTechnicianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnician
     */
    select?: UserTechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnician
     */
    omit?: UserTechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnicianInclude<ExtArgs> | null
    /**
     * The filter to search for the UserTechnician to update in case it exists.
     */
    where: UserTechnicianWhereUniqueInput
    /**
     * In case the UserTechnician found by the `where` argument doesn't exist, create a new UserTechnician with this data.
     */
    create: XOR<UserTechnicianCreateInput, UserTechnicianUncheckedCreateInput>
    /**
     * In case the UserTechnician was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserTechnicianUpdateInput, UserTechnicianUncheckedUpdateInput>
  }

  /**
   * UserTechnician delete
   */
  export type UserTechnicianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnician
     */
    select?: UserTechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnician
     */
    omit?: UserTechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnicianInclude<ExtArgs> | null
    /**
     * Filter which UserTechnician to delete.
     */
    where: UserTechnicianWhereUniqueInput
  }

  /**
   * UserTechnician deleteMany
   */
  export type UserTechnicianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserTechnicians to delete
     */
    where?: UserTechnicianWhereInput
    /**
     * Limit how many UserTechnicians to delete.
     */
    limit?: number
  }

  /**
   * UserTechnician.specialities
   */
  export type UserTechnician$specialitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityArea
     */
    select?: SpecialityAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialityArea
     */
    omit?: SpecialityAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityAreaInclude<ExtArgs> | null
    where?: SpecialityAreaWhereInput
    orderBy?: SpecialityAreaOrderByWithRelationInput | SpecialityAreaOrderByWithRelationInput[]
    cursor?: SpecialityAreaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpecialityAreaScalarFieldEnum | SpecialityAreaScalarFieldEnum[]
  }

  /**
   * UserTechnician.tickets
   */
  export type UserTechnician$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * UserTechnician without action
   */
  export type UserTechnicianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnician
     */
    select?: UserTechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnician
     */
    omit?: UserTechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnicianInclude<ExtArgs> | null
  }


  /**
   * Model SpecialityArea
   */

  export type AggregateSpecialityArea = {
    _count: SpecialityAreaCountAggregateOutputType | null
    _avg: SpecialityAreaAvgAggregateOutputType | null
    _sum: SpecialityAreaSumAggregateOutputType | null
    _min: SpecialityAreaMinAggregateOutputType | null
    _max: SpecialityAreaMaxAggregateOutputType | null
  }

  export type SpecialityAreaAvgAggregateOutputType = {
    id: number | null
  }

  export type SpecialityAreaSumAggregateOutputType = {
    id: number | null
  }

  export type SpecialityAreaMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpecialityAreaMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SpecialityAreaCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SpecialityAreaAvgAggregateInputType = {
    id?: true
  }

  export type SpecialityAreaSumAggregateInputType = {
    id?: true
  }

  export type SpecialityAreaMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpecialityAreaMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SpecialityAreaCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SpecialityAreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpecialityArea to aggregate.
     */
    where?: SpecialityAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialityAreas to fetch.
     */
    orderBy?: SpecialityAreaOrderByWithRelationInput | SpecialityAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SpecialityAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialityAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialityAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SpecialityAreas
    **/
    _count?: true | SpecialityAreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecialityAreaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecialityAreaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecialityAreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecialityAreaMaxAggregateInputType
  }

  export type GetSpecialityAreaAggregateType<T extends SpecialityAreaAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecialityArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecialityArea[P]>
      : GetScalarType<T[P], AggregateSpecialityArea[P]>
  }




  export type SpecialityAreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SpecialityAreaWhereInput
    orderBy?: SpecialityAreaOrderByWithAggregationInput | SpecialityAreaOrderByWithAggregationInput[]
    by: SpecialityAreaScalarFieldEnum[] | SpecialityAreaScalarFieldEnum
    having?: SpecialityAreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecialityAreaCountAggregateInputType | true
    _avg?: SpecialityAreaAvgAggregateInputType
    _sum?: SpecialityAreaSumAggregateInputType
    _min?: SpecialityAreaMinAggregateInputType
    _max?: SpecialityAreaMaxAggregateInputType
  }

  export type SpecialityAreaGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: SpecialityAreaCountAggregateOutputType | null
    _avg: SpecialityAreaAvgAggregateOutputType | null
    _sum: SpecialityAreaSumAggregateOutputType | null
    _min: SpecialityAreaMinAggregateOutputType | null
    _max: SpecialityAreaMaxAggregateOutputType | null
  }

  type GetSpecialityAreaGroupByPayload<T extends SpecialityAreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecialityAreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecialityAreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecialityAreaGroupByOutputType[P]>
            : GetScalarType<T[P], SpecialityAreaGroupByOutputType[P]>
        }
      >
    >


  export type SpecialityAreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    technicians?: boolean | SpecialityArea$techniciansArgs<ExtArgs>
    ticketCategories?: boolean | SpecialityArea$ticketCategoriesArgs<ExtArgs>
    _count?: boolean | SpecialityAreaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specialityArea"]>



  export type SpecialityAreaSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SpecialityAreaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["specialityArea"]>
  export type SpecialityAreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    technicians?: boolean | SpecialityArea$techniciansArgs<ExtArgs>
    ticketCategories?: boolean | SpecialityArea$ticketCategoriesArgs<ExtArgs>
    _count?: boolean | SpecialityAreaCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SpecialityAreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SpecialityArea"
    objects: {
      technicians: Prisma.$UserTechnicianPayload<ExtArgs>[]
      ticketCategories: Prisma.$TicketCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["specialityArea"]>
    composites: {}
  }

  type SpecialityAreaGetPayload<S extends boolean | null | undefined | SpecialityAreaDefaultArgs> = $Result.GetResult<Prisma.$SpecialityAreaPayload, S>

  type SpecialityAreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SpecialityAreaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SpecialityAreaCountAggregateInputType | true
    }

  export interface SpecialityAreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SpecialityArea'], meta: { name: 'SpecialityArea' } }
    /**
     * Find zero or one SpecialityArea that matches the filter.
     * @param {SpecialityAreaFindUniqueArgs} args - Arguments to find a SpecialityArea
     * @example
     * // Get one SpecialityArea
     * const specialityArea = await prisma.specialityArea.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SpecialityAreaFindUniqueArgs>(args: SelectSubset<T, SpecialityAreaFindUniqueArgs<ExtArgs>>): Prisma__SpecialityAreaClient<$Result.GetResult<Prisma.$SpecialityAreaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SpecialityArea that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SpecialityAreaFindUniqueOrThrowArgs} args - Arguments to find a SpecialityArea
     * @example
     * // Get one SpecialityArea
     * const specialityArea = await prisma.specialityArea.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SpecialityAreaFindUniqueOrThrowArgs>(args: SelectSubset<T, SpecialityAreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SpecialityAreaClient<$Result.GetResult<Prisma.$SpecialityAreaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpecialityArea that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityAreaFindFirstArgs} args - Arguments to find a SpecialityArea
     * @example
     * // Get one SpecialityArea
     * const specialityArea = await prisma.specialityArea.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SpecialityAreaFindFirstArgs>(args?: SelectSubset<T, SpecialityAreaFindFirstArgs<ExtArgs>>): Prisma__SpecialityAreaClient<$Result.GetResult<Prisma.$SpecialityAreaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SpecialityArea that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityAreaFindFirstOrThrowArgs} args - Arguments to find a SpecialityArea
     * @example
     * // Get one SpecialityArea
     * const specialityArea = await prisma.specialityArea.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SpecialityAreaFindFirstOrThrowArgs>(args?: SelectSubset<T, SpecialityAreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__SpecialityAreaClient<$Result.GetResult<Prisma.$SpecialityAreaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SpecialityAreas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityAreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpecialityAreas
     * const specialityAreas = await prisma.specialityArea.findMany()
     * 
     * // Get first 10 SpecialityAreas
     * const specialityAreas = await prisma.specialityArea.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specialityAreaWithIdOnly = await prisma.specialityArea.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SpecialityAreaFindManyArgs>(args?: SelectSubset<T, SpecialityAreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialityAreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SpecialityArea.
     * @param {SpecialityAreaCreateArgs} args - Arguments to create a SpecialityArea.
     * @example
     * // Create one SpecialityArea
     * const SpecialityArea = await prisma.specialityArea.create({
     *   data: {
     *     // ... data to create a SpecialityArea
     *   }
     * })
     * 
     */
    create<T extends SpecialityAreaCreateArgs>(args: SelectSubset<T, SpecialityAreaCreateArgs<ExtArgs>>): Prisma__SpecialityAreaClient<$Result.GetResult<Prisma.$SpecialityAreaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SpecialityAreas.
     * @param {SpecialityAreaCreateManyArgs} args - Arguments to create many SpecialityAreas.
     * @example
     * // Create many SpecialityAreas
     * const specialityArea = await prisma.specialityArea.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SpecialityAreaCreateManyArgs>(args?: SelectSubset<T, SpecialityAreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SpecialityArea.
     * @param {SpecialityAreaDeleteArgs} args - Arguments to delete one SpecialityArea.
     * @example
     * // Delete one SpecialityArea
     * const SpecialityArea = await prisma.specialityArea.delete({
     *   where: {
     *     // ... filter to delete one SpecialityArea
     *   }
     * })
     * 
     */
    delete<T extends SpecialityAreaDeleteArgs>(args: SelectSubset<T, SpecialityAreaDeleteArgs<ExtArgs>>): Prisma__SpecialityAreaClient<$Result.GetResult<Prisma.$SpecialityAreaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SpecialityArea.
     * @param {SpecialityAreaUpdateArgs} args - Arguments to update one SpecialityArea.
     * @example
     * // Update one SpecialityArea
     * const specialityArea = await prisma.specialityArea.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SpecialityAreaUpdateArgs>(args: SelectSubset<T, SpecialityAreaUpdateArgs<ExtArgs>>): Prisma__SpecialityAreaClient<$Result.GetResult<Prisma.$SpecialityAreaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SpecialityAreas.
     * @param {SpecialityAreaDeleteManyArgs} args - Arguments to filter SpecialityAreas to delete.
     * @example
     * // Delete a few SpecialityAreas
     * const { count } = await prisma.specialityArea.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SpecialityAreaDeleteManyArgs>(args?: SelectSubset<T, SpecialityAreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpecialityAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityAreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpecialityAreas
     * const specialityArea = await prisma.specialityArea.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SpecialityAreaUpdateManyArgs>(args: SelectSubset<T, SpecialityAreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SpecialityArea.
     * @param {SpecialityAreaUpsertArgs} args - Arguments to update or create a SpecialityArea.
     * @example
     * // Update or create a SpecialityArea
     * const specialityArea = await prisma.specialityArea.upsert({
     *   create: {
     *     // ... data to create a SpecialityArea
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpecialityArea we want to update
     *   }
     * })
     */
    upsert<T extends SpecialityAreaUpsertArgs>(args: SelectSubset<T, SpecialityAreaUpsertArgs<ExtArgs>>): Prisma__SpecialityAreaClient<$Result.GetResult<Prisma.$SpecialityAreaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SpecialityAreas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityAreaCountArgs} args - Arguments to filter SpecialityAreas to count.
     * @example
     * // Count the number of SpecialityAreas
     * const count = await prisma.specialityArea.count({
     *   where: {
     *     // ... the filter for the SpecialityAreas we want to count
     *   }
     * })
    **/
    count<T extends SpecialityAreaCountArgs>(
      args?: Subset<T, SpecialityAreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecialityAreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpecialityArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityAreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpecialityAreaAggregateArgs>(args: Subset<T, SpecialityAreaAggregateArgs>): Prisma.PrismaPromise<GetSpecialityAreaAggregateType<T>>

    /**
     * Group by SpecialityArea.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecialityAreaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SpecialityAreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SpecialityAreaGroupByArgs['orderBy'] }
        : { orderBy?: SpecialityAreaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SpecialityAreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecialityAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SpecialityArea model
   */
  readonly fields: SpecialityAreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SpecialityArea.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SpecialityAreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    technicians<T extends SpecialityArea$techniciansArgs<ExtArgs> = {}>(args?: Subset<T, SpecialityArea$techniciansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserTechnicianPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticketCategories<T extends SpecialityArea$ticketCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, SpecialityArea$ticketCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SpecialityArea model
   */
  interface SpecialityAreaFieldRefs {
    readonly id: FieldRef<"SpecialityArea", 'Int'>
    readonly name: FieldRef<"SpecialityArea", 'String'>
    readonly description: FieldRef<"SpecialityArea", 'String'>
    readonly createdAt: FieldRef<"SpecialityArea", 'DateTime'>
    readonly updatedAt: FieldRef<"SpecialityArea", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SpecialityArea findUnique
   */
  export type SpecialityAreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityArea
     */
    select?: SpecialityAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialityArea
     */
    omit?: SpecialityAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityAreaInclude<ExtArgs> | null
    /**
     * Filter, which SpecialityArea to fetch.
     */
    where: SpecialityAreaWhereUniqueInput
  }

  /**
   * SpecialityArea findUniqueOrThrow
   */
  export type SpecialityAreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityArea
     */
    select?: SpecialityAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialityArea
     */
    omit?: SpecialityAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityAreaInclude<ExtArgs> | null
    /**
     * Filter, which SpecialityArea to fetch.
     */
    where: SpecialityAreaWhereUniqueInput
  }

  /**
   * SpecialityArea findFirst
   */
  export type SpecialityAreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityArea
     */
    select?: SpecialityAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialityArea
     */
    omit?: SpecialityAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityAreaInclude<ExtArgs> | null
    /**
     * Filter, which SpecialityArea to fetch.
     */
    where?: SpecialityAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialityAreas to fetch.
     */
    orderBy?: SpecialityAreaOrderByWithRelationInput | SpecialityAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpecialityAreas.
     */
    cursor?: SpecialityAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialityAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialityAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecialityAreas.
     */
    distinct?: SpecialityAreaScalarFieldEnum | SpecialityAreaScalarFieldEnum[]
  }

  /**
   * SpecialityArea findFirstOrThrow
   */
  export type SpecialityAreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityArea
     */
    select?: SpecialityAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialityArea
     */
    omit?: SpecialityAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityAreaInclude<ExtArgs> | null
    /**
     * Filter, which SpecialityArea to fetch.
     */
    where?: SpecialityAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialityAreas to fetch.
     */
    orderBy?: SpecialityAreaOrderByWithRelationInput | SpecialityAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SpecialityAreas.
     */
    cursor?: SpecialityAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialityAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialityAreas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SpecialityAreas.
     */
    distinct?: SpecialityAreaScalarFieldEnum | SpecialityAreaScalarFieldEnum[]
  }

  /**
   * SpecialityArea findMany
   */
  export type SpecialityAreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityArea
     */
    select?: SpecialityAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialityArea
     */
    omit?: SpecialityAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityAreaInclude<ExtArgs> | null
    /**
     * Filter, which SpecialityAreas to fetch.
     */
    where?: SpecialityAreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SpecialityAreas to fetch.
     */
    orderBy?: SpecialityAreaOrderByWithRelationInput | SpecialityAreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SpecialityAreas.
     */
    cursor?: SpecialityAreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SpecialityAreas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SpecialityAreas.
     */
    skip?: number
    distinct?: SpecialityAreaScalarFieldEnum | SpecialityAreaScalarFieldEnum[]
  }

  /**
   * SpecialityArea create
   */
  export type SpecialityAreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityArea
     */
    select?: SpecialityAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialityArea
     */
    omit?: SpecialityAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityAreaInclude<ExtArgs> | null
    /**
     * The data needed to create a SpecialityArea.
     */
    data: XOR<SpecialityAreaCreateInput, SpecialityAreaUncheckedCreateInput>
  }

  /**
   * SpecialityArea createMany
   */
  export type SpecialityAreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SpecialityAreas.
     */
    data: SpecialityAreaCreateManyInput | SpecialityAreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SpecialityArea update
   */
  export type SpecialityAreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityArea
     */
    select?: SpecialityAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialityArea
     */
    omit?: SpecialityAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityAreaInclude<ExtArgs> | null
    /**
     * The data needed to update a SpecialityArea.
     */
    data: XOR<SpecialityAreaUpdateInput, SpecialityAreaUncheckedUpdateInput>
    /**
     * Choose, which SpecialityArea to update.
     */
    where: SpecialityAreaWhereUniqueInput
  }

  /**
   * SpecialityArea updateMany
   */
  export type SpecialityAreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SpecialityAreas.
     */
    data: XOR<SpecialityAreaUpdateManyMutationInput, SpecialityAreaUncheckedUpdateManyInput>
    /**
     * Filter which SpecialityAreas to update
     */
    where?: SpecialityAreaWhereInput
    /**
     * Limit how many SpecialityAreas to update.
     */
    limit?: number
  }

  /**
   * SpecialityArea upsert
   */
  export type SpecialityAreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityArea
     */
    select?: SpecialityAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialityArea
     */
    omit?: SpecialityAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityAreaInclude<ExtArgs> | null
    /**
     * The filter to search for the SpecialityArea to update in case it exists.
     */
    where: SpecialityAreaWhereUniqueInput
    /**
     * In case the SpecialityArea found by the `where` argument doesn't exist, create a new SpecialityArea with this data.
     */
    create: XOR<SpecialityAreaCreateInput, SpecialityAreaUncheckedCreateInput>
    /**
     * In case the SpecialityArea was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SpecialityAreaUpdateInput, SpecialityAreaUncheckedUpdateInput>
  }

  /**
   * SpecialityArea delete
   */
  export type SpecialityAreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityArea
     */
    select?: SpecialityAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialityArea
     */
    omit?: SpecialityAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityAreaInclude<ExtArgs> | null
    /**
     * Filter which SpecialityArea to delete.
     */
    where: SpecialityAreaWhereUniqueInput
  }

  /**
   * SpecialityArea deleteMany
   */
  export type SpecialityAreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SpecialityAreas to delete
     */
    where?: SpecialityAreaWhereInput
    /**
     * Limit how many SpecialityAreas to delete.
     */
    limit?: number
  }

  /**
   * SpecialityArea.technicians
   */
  export type SpecialityArea$techniciansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnician
     */
    select?: UserTechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnician
     */
    omit?: UserTechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnicianInclude<ExtArgs> | null
    where?: UserTechnicianWhereInput
    orderBy?: UserTechnicianOrderByWithRelationInput | UserTechnicianOrderByWithRelationInput[]
    cursor?: UserTechnicianWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserTechnicianScalarFieldEnum | UserTechnicianScalarFieldEnum[]
  }

  /**
   * SpecialityArea.ticketCategories
   */
  export type SpecialityArea$ticketCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    where?: TicketCategoryWhereInput
    orderBy?: TicketCategoryOrderByWithRelationInput | TicketCategoryOrderByWithRelationInput[]
    cursor?: TicketCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketCategoryScalarFieldEnum | TicketCategoryScalarFieldEnum[]
  }

  /**
   * SpecialityArea without action
   */
  export type SpecialityAreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityArea
     */
    select?: SpecialityAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialityArea
     */
    omit?: SpecialityAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityAreaInclude<ExtArgs> | null
  }


  /**
   * Model CategoryEtiquette
   */

  export type AggregateCategoryEtiquette = {
    _count: CategoryEtiquetteCountAggregateOutputType | null
    _avg: CategoryEtiquetteAvgAggregateOutputType | null
    _sum: CategoryEtiquetteSumAggregateOutputType | null
    _min: CategoryEtiquetteMinAggregateOutputType | null
    _max: CategoryEtiquetteMaxAggregateOutputType | null
  }

  export type CategoryEtiquetteAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoryEtiquetteSumAggregateOutputType = {
    id: number | null
  }

  export type CategoryEtiquetteMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryEtiquetteMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryEtiquetteCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryEtiquetteAvgAggregateInputType = {
    id?: true
  }

  export type CategoryEtiquetteSumAggregateInputType = {
    id?: true
  }

  export type CategoryEtiquetteMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryEtiquetteMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CategoryEtiquetteCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryEtiquetteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryEtiquette to aggregate.
     */
    where?: CategoryEtiquetteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryEtiquettes to fetch.
     */
    orderBy?: CategoryEtiquetteOrderByWithRelationInput | CategoryEtiquetteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryEtiquetteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryEtiquettes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryEtiquettes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryEtiquettes
    **/
    _count?: true | CategoryEtiquetteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryEtiquetteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoryEtiquetteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryEtiquetteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryEtiquetteMaxAggregateInputType
  }

  export type GetCategoryEtiquetteAggregateType<T extends CategoryEtiquetteAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryEtiquette]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryEtiquette[P]>
      : GetScalarType<T[P], AggregateCategoryEtiquette[P]>
  }




  export type CategoryEtiquetteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryEtiquetteWhereInput
    orderBy?: CategoryEtiquetteOrderByWithAggregationInput | CategoryEtiquetteOrderByWithAggregationInput[]
    by: CategoryEtiquetteScalarFieldEnum[] | CategoryEtiquetteScalarFieldEnum
    having?: CategoryEtiquetteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryEtiquetteCountAggregateInputType | true
    _avg?: CategoryEtiquetteAvgAggregateInputType
    _sum?: CategoryEtiquetteSumAggregateInputType
    _min?: CategoryEtiquetteMinAggregateInputType
    _max?: CategoryEtiquetteMaxAggregateInputType
  }

  export type CategoryEtiquetteGroupByOutputType = {
    id: number
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: CategoryEtiquetteCountAggregateOutputType | null
    _avg: CategoryEtiquetteAvgAggregateOutputType | null
    _sum: CategoryEtiquetteSumAggregateOutputType | null
    _min: CategoryEtiquetteMinAggregateOutputType | null
    _max: CategoryEtiquetteMaxAggregateOutputType | null
  }

  type GetCategoryEtiquetteGroupByPayload<T extends CategoryEtiquetteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryEtiquetteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryEtiquetteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryEtiquetteGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryEtiquetteGroupByOutputType[P]>
        }
      >
    >


  export type CategoryEtiquetteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ticketCategories?: boolean | CategoryEtiquette$ticketCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryEtiquetteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryEtiquette"]>



  export type CategoryEtiquetteSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryEtiquetteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["categoryEtiquette"]>
  export type CategoryEtiquetteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticketCategories?: boolean | CategoryEtiquette$ticketCategoriesArgs<ExtArgs>
    _count?: boolean | CategoryEtiquetteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryEtiquettePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoryEtiquette"
    objects: {
      ticketCategories: Prisma.$TicketCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["categoryEtiquette"]>
    composites: {}
  }

  type CategoryEtiquetteGetPayload<S extends boolean | null | undefined | CategoryEtiquetteDefaultArgs> = $Result.GetResult<Prisma.$CategoryEtiquettePayload, S>

  type CategoryEtiquetteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryEtiquetteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryEtiquetteCountAggregateInputType | true
    }

  export interface CategoryEtiquetteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoryEtiquette'], meta: { name: 'CategoryEtiquette' } }
    /**
     * Find zero or one CategoryEtiquette that matches the filter.
     * @param {CategoryEtiquetteFindUniqueArgs} args - Arguments to find a CategoryEtiquette
     * @example
     * // Get one CategoryEtiquette
     * const categoryEtiquette = await prisma.categoryEtiquette.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryEtiquetteFindUniqueArgs>(args: SelectSubset<T, CategoryEtiquetteFindUniqueArgs<ExtArgs>>): Prisma__CategoryEtiquetteClient<$Result.GetResult<Prisma.$CategoryEtiquettePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoryEtiquette that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryEtiquetteFindUniqueOrThrowArgs} args - Arguments to find a CategoryEtiquette
     * @example
     * // Get one CategoryEtiquette
     * const categoryEtiquette = await prisma.categoryEtiquette.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryEtiquetteFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryEtiquetteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryEtiquetteClient<$Result.GetResult<Prisma.$CategoryEtiquettePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryEtiquette that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryEtiquetteFindFirstArgs} args - Arguments to find a CategoryEtiquette
     * @example
     * // Get one CategoryEtiquette
     * const categoryEtiquette = await prisma.categoryEtiquette.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryEtiquetteFindFirstArgs>(args?: SelectSubset<T, CategoryEtiquetteFindFirstArgs<ExtArgs>>): Prisma__CategoryEtiquetteClient<$Result.GetResult<Prisma.$CategoryEtiquettePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryEtiquette that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryEtiquetteFindFirstOrThrowArgs} args - Arguments to find a CategoryEtiquette
     * @example
     * // Get one CategoryEtiquette
     * const categoryEtiquette = await prisma.categoryEtiquette.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryEtiquetteFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryEtiquetteFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryEtiquetteClient<$Result.GetResult<Prisma.$CategoryEtiquettePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoryEtiquettes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryEtiquetteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryEtiquettes
     * const categoryEtiquettes = await prisma.categoryEtiquette.findMany()
     * 
     * // Get first 10 CategoryEtiquettes
     * const categoryEtiquettes = await prisma.categoryEtiquette.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryEtiquetteWithIdOnly = await prisma.categoryEtiquette.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryEtiquetteFindManyArgs>(args?: SelectSubset<T, CategoryEtiquetteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryEtiquettePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoryEtiquette.
     * @param {CategoryEtiquetteCreateArgs} args - Arguments to create a CategoryEtiquette.
     * @example
     * // Create one CategoryEtiquette
     * const CategoryEtiquette = await prisma.categoryEtiquette.create({
     *   data: {
     *     // ... data to create a CategoryEtiquette
     *   }
     * })
     * 
     */
    create<T extends CategoryEtiquetteCreateArgs>(args: SelectSubset<T, CategoryEtiquetteCreateArgs<ExtArgs>>): Prisma__CategoryEtiquetteClient<$Result.GetResult<Prisma.$CategoryEtiquettePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoryEtiquettes.
     * @param {CategoryEtiquetteCreateManyArgs} args - Arguments to create many CategoryEtiquettes.
     * @example
     * // Create many CategoryEtiquettes
     * const categoryEtiquette = await prisma.categoryEtiquette.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryEtiquetteCreateManyArgs>(args?: SelectSubset<T, CategoryEtiquetteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CategoryEtiquette.
     * @param {CategoryEtiquetteDeleteArgs} args - Arguments to delete one CategoryEtiquette.
     * @example
     * // Delete one CategoryEtiquette
     * const CategoryEtiquette = await prisma.categoryEtiquette.delete({
     *   where: {
     *     // ... filter to delete one CategoryEtiquette
     *   }
     * })
     * 
     */
    delete<T extends CategoryEtiquetteDeleteArgs>(args: SelectSubset<T, CategoryEtiquetteDeleteArgs<ExtArgs>>): Prisma__CategoryEtiquetteClient<$Result.GetResult<Prisma.$CategoryEtiquettePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoryEtiquette.
     * @param {CategoryEtiquetteUpdateArgs} args - Arguments to update one CategoryEtiquette.
     * @example
     * // Update one CategoryEtiquette
     * const categoryEtiquette = await prisma.categoryEtiquette.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryEtiquetteUpdateArgs>(args: SelectSubset<T, CategoryEtiquetteUpdateArgs<ExtArgs>>): Prisma__CategoryEtiquetteClient<$Result.GetResult<Prisma.$CategoryEtiquettePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoryEtiquettes.
     * @param {CategoryEtiquetteDeleteManyArgs} args - Arguments to filter CategoryEtiquettes to delete.
     * @example
     * // Delete a few CategoryEtiquettes
     * const { count } = await prisma.categoryEtiquette.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryEtiquetteDeleteManyArgs>(args?: SelectSubset<T, CategoryEtiquetteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryEtiquettes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryEtiquetteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryEtiquettes
     * const categoryEtiquette = await prisma.categoryEtiquette.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryEtiquetteUpdateManyArgs>(args: SelectSubset<T, CategoryEtiquetteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoryEtiquette.
     * @param {CategoryEtiquetteUpsertArgs} args - Arguments to update or create a CategoryEtiquette.
     * @example
     * // Update or create a CategoryEtiquette
     * const categoryEtiquette = await prisma.categoryEtiquette.upsert({
     *   create: {
     *     // ... data to create a CategoryEtiquette
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryEtiquette we want to update
     *   }
     * })
     */
    upsert<T extends CategoryEtiquetteUpsertArgs>(args: SelectSubset<T, CategoryEtiquetteUpsertArgs<ExtArgs>>): Prisma__CategoryEtiquetteClient<$Result.GetResult<Prisma.$CategoryEtiquettePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategoryEtiquettes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryEtiquetteCountArgs} args - Arguments to filter CategoryEtiquettes to count.
     * @example
     * // Count the number of CategoryEtiquettes
     * const count = await prisma.categoryEtiquette.count({
     *   where: {
     *     // ... the filter for the CategoryEtiquettes we want to count
     *   }
     * })
    **/
    count<T extends CategoryEtiquetteCountArgs>(
      args?: Subset<T, CategoryEtiquetteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryEtiquetteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryEtiquette.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryEtiquetteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryEtiquetteAggregateArgs>(args: Subset<T, CategoryEtiquetteAggregateArgs>): Prisma.PrismaPromise<GetCategoryEtiquetteAggregateType<T>>

    /**
     * Group by CategoryEtiquette.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryEtiquetteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryEtiquetteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryEtiquetteGroupByArgs['orderBy'] }
        : { orderBy?: CategoryEtiquetteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryEtiquetteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryEtiquetteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoryEtiquette model
   */
  readonly fields: CategoryEtiquetteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryEtiquette.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryEtiquetteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticketCategories<T extends CategoryEtiquette$ticketCategoriesArgs<ExtArgs> = {}>(args?: Subset<T, CategoryEtiquette$ticketCategoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CategoryEtiquette model
   */
  interface CategoryEtiquetteFieldRefs {
    readonly id: FieldRef<"CategoryEtiquette", 'Int'>
    readonly name: FieldRef<"CategoryEtiquette", 'String'>
    readonly description: FieldRef<"CategoryEtiquette", 'String'>
    readonly createdAt: FieldRef<"CategoryEtiquette", 'DateTime'>
    readonly updatedAt: FieldRef<"CategoryEtiquette", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CategoryEtiquette findUnique
   */
  export type CategoryEtiquetteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryEtiquette
     */
    select?: CategoryEtiquetteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryEtiquette
     */
    omit?: CategoryEtiquetteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryEtiquetteInclude<ExtArgs> | null
    /**
     * Filter, which CategoryEtiquette to fetch.
     */
    where: CategoryEtiquetteWhereUniqueInput
  }

  /**
   * CategoryEtiquette findUniqueOrThrow
   */
  export type CategoryEtiquetteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryEtiquette
     */
    select?: CategoryEtiquetteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryEtiquette
     */
    omit?: CategoryEtiquetteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryEtiquetteInclude<ExtArgs> | null
    /**
     * Filter, which CategoryEtiquette to fetch.
     */
    where: CategoryEtiquetteWhereUniqueInput
  }

  /**
   * CategoryEtiquette findFirst
   */
  export type CategoryEtiquetteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryEtiquette
     */
    select?: CategoryEtiquetteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryEtiquette
     */
    omit?: CategoryEtiquetteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryEtiquetteInclude<ExtArgs> | null
    /**
     * Filter, which CategoryEtiquette to fetch.
     */
    where?: CategoryEtiquetteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryEtiquettes to fetch.
     */
    orderBy?: CategoryEtiquetteOrderByWithRelationInput | CategoryEtiquetteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryEtiquettes.
     */
    cursor?: CategoryEtiquetteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryEtiquettes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryEtiquettes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryEtiquettes.
     */
    distinct?: CategoryEtiquetteScalarFieldEnum | CategoryEtiquetteScalarFieldEnum[]
  }

  /**
   * CategoryEtiquette findFirstOrThrow
   */
  export type CategoryEtiquetteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryEtiquette
     */
    select?: CategoryEtiquetteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryEtiquette
     */
    omit?: CategoryEtiquetteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryEtiquetteInclude<ExtArgs> | null
    /**
     * Filter, which CategoryEtiquette to fetch.
     */
    where?: CategoryEtiquetteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryEtiquettes to fetch.
     */
    orderBy?: CategoryEtiquetteOrderByWithRelationInput | CategoryEtiquetteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryEtiquettes.
     */
    cursor?: CategoryEtiquetteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryEtiquettes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryEtiquettes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryEtiquettes.
     */
    distinct?: CategoryEtiquetteScalarFieldEnum | CategoryEtiquetteScalarFieldEnum[]
  }

  /**
   * CategoryEtiquette findMany
   */
  export type CategoryEtiquetteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryEtiquette
     */
    select?: CategoryEtiquetteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryEtiquette
     */
    omit?: CategoryEtiquetteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryEtiquetteInclude<ExtArgs> | null
    /**
     * Filter, which CategoryEtiquettes to fetch.
     */
    where?: CategoryEtiquetteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryEtiquettes to fetch.
     */
    orderBy?: CategoryEtiquetteOrderByWithRelationInput | CategoryEtiquetteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryEtiquettes.
     */
    cursor?: CategoryEtiquetteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryEtiquettes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryEtiquettes.
     */
    skip?: number
    distinct?: CategoryEtiquetteScalarFieldEnum | CategoryEtiquetteScalarFieldEnum[]
  }

  /**
   * CategoryEtiquette create
   */
  export type CategoryEtiquetteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryEtiquette
     */
    select?: CategoryEtiquetteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryEtiquette
     */
    omit?: CategoryEtiquetteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryEtiquetteInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoryEtiquette.
     */
    data: XOR<CategoryEtiquetteCreateInput, CategoryEtiquetteUncheckedCreateInput>
  }

  /**
   * CategoryEtiquette createMany
   */
  export type CategoryEtiquetteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoryEtiquettes.
     */
    data: CategoryEtiquetteCreateManyInput | CategoryEtiquetteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoryEtiquette update
   */
  export type CategoryEtiquetteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryEtiquette
     */
    select?: CategoryEtiquetteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryEtiquette
     */
    omit?: CategoryEtiquetteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryEtiquetteInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoryEtiquette.
     */
    data: XOR<CategoryEtiquetteUpdateInput, CategoryEtiquetteUncheckedUpdateInput>
    /**
     * Choose, which CategoryEtiquette to update.
     */
    where: CategoryEtiquetteWhereUniqueInput
  }

  /**
   * CategoryEtiquette updateMany
   */
  export type CategoryEtiquetteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoryEtiquettes.
     */
    data: XOR<CategoryEtiquetteUpdateManyMutationInput, CategoryEtiquetteUncheckedUpdateManyInput>
    /**
     * Filter which CategoryEtiquettes to update
     */
    where?: CategoryEtiquetteWhereInput
    /**
     * Limit how many CategoryEtiquettes to update.
     */
    limit?: number
  }

  /**
   * CategoryEtiquette upsert
   */
  export type CategoryEtiquetteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryEtiquette
     */
    select?: CategoryEtiquetteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryEtiquette
     */
    omit?: CategoryEtiquetteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryEtiquetteInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoryEtiquette to update in case it exists.
     */
    where: CategoryEtiquetteWhereUniqueInput
    /**
     * In case the CategoryEtiquette found by the `where` argument doesn't exist, create a new CategoryEtiquette with this data.
     */
    create: XOR<CategoryEtiquetteCreateInput, CategoryEtiquetteUncheckedCreateInput>
    /**
     * In case the CategoryEtiquette was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryEtiquetteUpdateInput, CategoryEtiquetteUncheckedUpdateInput>
  }

  /**
   * CategoryEtiquette delete
   */
  export type CategoryEtiquetteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryEtiquette
     */
    select?: CategoryEtiquetteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryEtiquette
     */
    omit?: CategoryEtiquetteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryEtiquetteInclude<ExtArgs> | null
    /**
     * Filter which CategoryEtiquette to delete.
     */
    where: CategoryEtiquetteWhereUniqueInput
  }

  /**
   * CategoryEtiquette deleteMany
   */
  export type CategoryEtiquetteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryEtiquettes to delete
     */
    where?: CategoryEtiquetteWhereInput
    /**
     * Limit how many CategoryEtiquettes to delete.
     */
    limit?: number
  }

  /**
   * CategoryEtiquette.ticketCategories
   */
  export type CategoryEtiquette$ticketCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    where?: TicketCategoryWhereInput
    orderBy?: TicketCategoryOrderByWithRelationInput | TicketCategoryOrderByWithRelationInput[]
    cursor?: TicketCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketCategoryScalarFieldEnum | TicketCategoryScalarFieldEnum[]
  }

  /**
   * CategoryEtiquette without action
   */
  export type CategoryEtiquetteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryEtiquette
     */
    select?: CategoryEtiquetteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryEtiquette
     */
    omit?: CategoryEtiquetteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryEtiquetteInclude<ExtArgs> | null
  }


  /**
   * Model SLA
   */

  export type AggregateSLA = {
    _count: SLACountAggregateOutputType | null
    _avg: SLAAvgAggregateOutputType | null
    _sum: SLASumAggregateOutputType | null
    _min: SLAMinAggregateOutputType | null
    _max: SLAMaxAggregateOutputType | null
  }

  export type SLAAvgAggregateOutputType = {
    id: number | null
    slaReplyHours: number | null
    slaResolutionHours: number | null
  }

  export type SLASumAggregateOutputType = {
    id: number | null
    slaReplyHours: number | null
    slaResolutionHours: number | null
  }

  export type SLAMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    slaReplyHours: number | null
    slaResolutionHours: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SLAMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    slaReplyHours: number | null
    slaResolutionHours: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SLACountAggregateOutputType = {
    id: number
    name: number
    description: number
    slaReplyHours: number
    slaResolutionHours: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SLAAvgAggregateInputType = {
    id?: true
    slaReplyHours?: true
    slaResolutionHours?: true
  }

  export type SLASumAggregateInputType = {
    id?: true
    slaReplyHours?: true
    slaResolutionHours?: true
  }

  export type SLAMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    slaReplyHours?: true
    slaResolutionHours?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SLAMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    slaReplyHours?: true
    slaResolutionHours?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SLACountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    slaReplyHours?: true
    slaResolutionHours?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SLAAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SLA to aggregate.
     */
    where?: SLAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SLAS to fetch.
     */
    orderBy?: SLAOrderByWithRelationInput | SLAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SLAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SLAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SLAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SLAS
    **/
    _count?: true | SLACountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SLAAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SLASumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SLAMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SLAMaxAggregateInputType
  }

  export type GetSLAAggregateType<T extends SLAAggregateArgs> = {
        [P in keyof T & keyof AggregateSLA]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSLA[P]>
      : GetScalarType<T[P], AggregateSLA[P]>
  }




  export type SLAGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SLAWhereInput
    orderBy?: SLAOrderByWithAggregationInput | SLAOrderByWithAggregationInput[]
    by: SLAScalarFieldEnum[] | SLAScalarFieldEnum
    having?: SLAScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SLACountAggregateInputType | true
    _avg?: SLAAvgAggregateInputType
    _sum?: SLASumAggregateInputType
    _min?: SLAMinAggregateInputType
    _max?: SLAMaxAggregateInputType
  }

  export type SLAGroupByOutputType = {
    id: number
    name: string
    description: string | null
    slaReplyHours: number
    slaResolutionHours: number
    createdAt: Date
    updatedAt: Date
    _count: SLACountAggregateOutputType | null
    _avg: SLAAvgAggregateOutputType | null
    _sum: SLASumAggregateOutputType | null
    _min: SLAMinAggregateOutputType | null
    _max: SLAMaxAggregateOutputType | null
  }

  type GetSLAGroupByPayload<T extends SLAGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SLAGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SLAGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SLAGroupByOutputType[P]>
            : GetScalarType<T[P], SLAGroupByOutputType[P]>
        }
      >
    >


  export type SLASelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    slaReplyHours?: boolean
    slaResolutionHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    TicketCategory?: boolean | SLA$TicketCategoryArgs<ExtArgs>
    _count?: boolean | SLACountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sLA"]>



  export type SLASelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    slaReplyHours?: boolean
    slaResolutionHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SLAOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "slaReplyHours" | "slaResolutionHours" | "createdAt" | "updatedAt", ExtArgs["result"]["sLA"]>
  export type SLAInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    TicketCategory?: boolean | SLA$TicketCategoryArgs<ExtArgs>
    _count?: boolean | SLACountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SLAPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SLA"
    objects: {
      TicketCategory: Prisma.$TicketCategoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      slaReplyHours: number
      slaResolutionHours: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sLA"]>
    composites: {}
  }

  type SLAGetPayload<S extends boolean | null | undefined | SLADefaultArgs> = $Result.GetResult<Prisma.$SLAPayload, S>

  type SLACountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SLAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SLACountAggregateInputType | true
    }

  export interface SLADelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SLA'], meta: { name: 'SLA' } }
    /**
     * Find zero or one SLA that matches the filter.
     * @param {SLAFindUniqueArgs} args - Arguments to find a SLA
     * @example
     * // Get one SLA
     * const sLA = await prisma.sLA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SLAFindUniqueArgs>(args: SelectSubset<T, SLAFindUniqueArgs<ExtArgs>>): Prisma__SLAClient<$Result.GetResult<Prisma.$SLAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SLA that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SLAFindUniqueOrThrowArgs} args - Arguments to find a SLA
     * @example
     * // Get one SLA
     * const sLA = await prisma.sLA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SLAFindUniqueOrThrowArgs>(args: SelectSubset<T, SLAFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SLAClient<$Result.GetResult<Prisma.$SLAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SLA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SLAFindFirstArgs} args - Arguments to find a SLA
     * @example
     * // Get one SLA
     * const sLA = await prisma.sLA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SLAFindFirstArgs>(args?: SelectSubset<T, SLAFindFirstArgs<ExtArgs>>): Prisma__SLAClient<$Result.GetResult<Prisma.$SLAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SLA that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SLAFindFirstOrThrowArgs} args - Arguments to find a SLA
     * @example
     * // Get one SLA
     * const sLA = await prisma.sLA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SLAFindFirstOrThrowArgs>(args?: SelectSubset<T, SLAFindFirstOrThrowArgs<ExtArgs>>): Prisma__SLAClient<$Result.GetResult<Prisma.$SLAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SLAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SLAFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SLAS
     * const sLAS = await prisma.sLA.findMany()
     * 
     * // Get first 10 SLAS
     * const sLAS = await prisma.sLA.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sLAWithIdOnly = await prisma.sLA.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SLAFindManyArgs>(args?: SelectSubset<T, SLAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SLAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SLA.
     * @param {SLACreateArgs} args - Arguments to create a SLA.
     * @example
     * // Create one SLA
     * const SLA = await prisma.sLA.create({
     *   data: {
     *     // ... data to create a SLA
     *   }
     * })
     * 
     */
    create<T extends SLACreateArgs>(args: SelectSubset<T, SLACreateArgs<ExtArgs>>): Prisma__SLAClient<$Result.GetResult<Prisma.$SLAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SLAS.
     * @param {SLACreateManyArgs} args - Arguments to create many SLAS.
     * @example
     * // Create many SLAS
     * const sLA = await prisma.sLA.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SLACreateManyArgs>(args?: SelectSubset<T, SLACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SLA.
     * @param {SLADeleteArgs} args - Arguments to delete one SLA.
     * @example
     * // Delete one SLA
     * const SLA = await prisma.sLA.delete({
     *   where: {
     *     // ... filter to delete one SLA
     *   }
     * })
     * 
     */
    delete<T extends SLADeleteArgs>(args: SelectSubset<T, SLADeleteArgs<ExtArgs>>): Prisma__SLAClient<$Result.GetResult<Prisma.$SLAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SLA.
     * @param {SLAUpdateArgs} args - Arguments to update one SLA.
     * @example
     * // Update one SLA
     * const sLA = await prisma.sLA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SLAUpdateArgs>(args: SelectSubset<T, SLAUpdateArgs<ExtArgs>>): Prisma__SLAClient<$Result.GetResult<Prisma.$SLAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SLAS.
     * @param {SLADeleteManyArgs} args - Arguments to filter SLAS to delete.
     * @example
     * // Delete a few SLAS
     * const { count } = await prisma.sLA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SLADeleteManyArgs>(args?: SelectSubset<T, SLADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SLAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SLAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SLAS
     * const sLA = await prisma.sLA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SLAUpdateManyArgs>(args: SelectSubset<T, SLAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SLA.
     * @param {SLAUpsertArgs} args - Arguments to update or create a SLA.
     * @example
     * // Update or create a SLA
     * const sLA = await prisma.sLA.upsert({
     *   create: {
     *     // ... data to create a SLA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SLA we want to update
     *   }
     * })
     */
    upsert<T extends SLAUpsertArgs>(args: SelectSubset<T, SLAUpsertArgs<ExtArgs>>): Prisma__SLAClient<$Result.GetResult<Prisma.$SLAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SLAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SLACountArgs} args - Arguments to filter SLAS to count.
     * @example
     * // Count the number of SLAS
     * const count = await prisma.sLA.count({
     *   where: {
     *     // ... the filter for the SLAS we want to count
     *   }
     * })
    **/
    count<T extends SLACountArgs>(
      args?: Subset<T, SLACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SLACountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SLA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SLAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SLAAggregateArgs>(args: Subset<T, SLAAggregateArgs>): Prisma.PrismaPromise<GetSLAAggregateType<T>>

    /**
     * Group by SLA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SLAGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SLAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SLAGroupByArgs['orderBy'] }
        : { orderBy?: SLAGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SLAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSLAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SLA model
   */
  readonly fields: SLAFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SLA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SLAClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    TicketCategory<T extends SLA$TicketCategoryArgs<ExtArgs> = {}>(args?: Subset<T, SLA$TicketCategoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SLA model
   */
  interface SLAFieldRefs {
    readonly id: FieldRef<"SLA", 'Int'>
    readonly name: FieldRef<"SLA", 'String'>
    readonly description: FieldRef<"SLA", 'String'>
    readonly slaReplyHours: FieldRef<"SLA", 'Int'>
    readonly slaResolutionHours: FieldRef<"SLA", 'Int'>
    readonly createdAt: FieldRef<"SLA", 'DateTime'>
    readonly updatedAt: FieldRef<"SLA", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SLA findUnique
   */
  export type SLAFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SLA
     */
    select?: SLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the SLA
     */
    omit?: SLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SLAInclude<ExtArgs> | null
    /**
     * Filter, which SLA to fetch.
     */
    where: SLAWhereUniqueInput
  }

  /**
   * SLA findUniqueOrThrow
   */
  export type SLAFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SLA
     */
    select?: SLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the SLA
     */
    omit?: SLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SLAInclude<ExtArgs> | null
    /**
     * Filter, which SLA to fetch.
     */
    where: SLAWhereUniqueInput
  }

  /**
   * SLA findFirst
   */
  export type SLAFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SLA
     */
    select?: SLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the SLA
     */
    omit?: SLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SLAInclude<ExtArgs> | null
    /**
     * Filter, which SLA to fetch.
     */
    where?: SLAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SLAS to fetch.
     */
    orderBy?: SLAOrderByWithRelationInput | SLAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SLAS.
     */
    cursor?: SLAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SLAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SLAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SLAS.
     */
    distinct?: SLAScalarFieldEnum | SLAScalarFieldEnum[]
  }

  /**
   * SLA findFirstOrThrow
   */
  export type SLAFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SLA
     */
    select?: SLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the SLA
     */
    omit?: SLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SLAInclude<ExtArgs> | null
    /**
     * Filter, which SLA to fetch.
     */
    where?: SLAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SLAS to fetch.
     */
    orderBy?: SLAOrderByWithRelationInput | SLAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SLAS.
     */
    cursor?: SLAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SLAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SLAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SLAS.
     */
    distinct?: SLAScalarFieldEnum | SLAScalarFieldEnum[]
  }

  /**
   * SLA findMany
   */
  export type SLAFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SLA
     */
    select?: SLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the SLA
     */
    omit?: SLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SLAInclude<ExtArgs> | null
    /**
     * Filter, which SLAS to fetch.
     */
    where?: SLAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SLAS to fetch.
     */
    orderBy?: SLAOrderByWithRelationInput | SLAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SLAS.
     */
    cursor?: SLAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SLAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SLAS.
     */
    skip?: number
    distinct?: SLAScalarFieldEnum | SLAScalarFieldEnum[]
  }

  /**
   * SLA create
   */
  export type SLACreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SLA
     */
    select?: SLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the SLA
     */
    omit?: SLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SLAInclude<ExtArgs> | null
    /**
     * The data needed to create a SLA.
     */
    data: XOR<SLACreateInput, SLAUncheckedCreateInput>
  }

  /**
   * SLA createMany
   */
  export type SLACreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SLAS.
     */
    data: SLACreateManyInput | SLACreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SLA update
   */
  export type SLAUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SLA
     */
    select?: SLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the SLA
     */
    omit?: SLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SLAInclude<ExtArgs> | null
    /**
     * The data needed to update a SLA.
     */
    data: XOR<SLAUpdateInput, SLAUncheckedUpdateInput>
    /**
     * Choose, which SLA to update.
     */
    where: SLAWhereUniqueInput
  }

  /**
   * SLA updateMany
   */
  export type SLAUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SLAS.
     */
    data: XOR<SLAUpdateManyMutationInput, SLAUncheckedUpdateManyInput>
    /**
     * Filter which SLAS to update
     */
    where?: SLAWhereInput
    /**
     * Limit how many SLAS to update.
     */
    limit?: number
  }

  /**
   * SLA upsert
   */
  export type SLAUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SLA
     */
    select?: SLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the SLA
     */
    omit?: SLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SLAInclude<ExtArgs> | null
    /**
     * The filter to search for the SLA to update in case it exists.
     */
    where: SLAWhereUniqueInput
    /**
     * In case the SLA found by the `where` argument doesn't exist, create a new SLA with this data.
     */
    create: XOR<SLACreateInput, SLAUncheckedCreateInput>
    /**
     * In case the SLA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SLAUpdateInput, SLAUncheckedUpdateInput>
  }

  /**
   * SLA delete
   */
  export type SLADeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SLA
     */
    select?: SLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the SLA
     */
    omit?: SLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SLAInclude<ExtArgs> | null
    /**
     * Filter which SLA to delete.
     */
    where: SLAWhereUniqueInput
  }

  /**
   * SLA deleteMany
   */
  export type SLADeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SLAS to delete
     */
    where?: SLAWhereInput
    /**
     * Limit how many SLAS to delete.
     */
    limit?: number
  }

  /**
   * SLA.TicketCategory
   */
  export type SLA$TicketCategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    where?: TicketCategoryWhereInput
    orderBy?: TicketCategoryOrderByWithRelationInput | TicketCategoryOrderByWithRelationInput[]
    cursor?: TicketCategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketCategoryScalarFieldEnum | TicketCategoryScalarFieldEnum[]
  }

  /**
   * SLA without action
   */
  export type SLADefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SLA
     */
    select?: SLASelect<ExtArgs> | null
    /**
     * Omit specific fields from the SLA
     */
    omit?: SLAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SLAInclude<ExtArgs> | null
  }


  /**
   * Model TicketCategory
   */

  export type AggregateTicketCategory = {
    _count: TicketCategoryCountAggregateOutputType | null
    _avg: TicketCategoryAvgAggregateOutputType | null
    _sum: TicketCategorySumAggregateOutputType | null
    _min: TicketCategoryMinAggregateOutputType | null
    _max: TicketCategoryMaxAggregateOutputType | null
  }

  export type TicketCategoryAvgAggregateOutputType = {
    id: number | null
    slaId: number | null
  }

  export type TicketCategorySumAggregateOutputType = {
    id: number | null
    slaId: number | null
  }

  export type TicketCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    slaId: number | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    slaId: number | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    slaId: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketCategoryAvgAggregateInputType = {
    id?: true
    slaId?: true
  }

  export type TicketCategorySumAggregateInputType = {
    id?: true
    slaId?: true
  }

  export type TicketCategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    slaId?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    slaId?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    slaId?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketCategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketCategory to aggregate.
     */
    where?: TicketCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketCategories to fetch.
     */
    orderBy?: TicketCategoryOrderByWithRelationInput | TicketCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketCategories
    **/
    _count?: true | TicketCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketCategoryMaxAggregateInputType
  }

  export type GetTicketCategoryAggregateType<T extends TicketCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketCategory[P]>
      : GetScalarType<T[P], AggregateTicketCategory[P]>
  }




  export type TicketCategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketCategoryWhereInput
    orderBy?: TicketCategoryOrderByWithAggregationInput | TicketCategoryOrderByWithAggregationInput[]
    by: TicketCategoryScalarFieldEnum[] | TicketCategoryScalarFieldEnum
    having?: TicketCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCategoryCountAggregateInputType | true
    _avg?: TicketCategoryAvgAggregateInputType
    _sum?: TicketCategorySumAggregateInputType
    _min?: TicketCategoryMinAggregateInputType
    _max?: TicketCategoryMaxAggregateInputType
  }

  export type TicketCategoryGroupByOutputType = {
    id: number
    name: string
    description: string | null
    slaId: number
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: TicketCategoryCountAggregateOutputType | null
    _avg: TicketCategoryAvgAggregateOutputType | null
    _sum: TicketCategorySumAggregateOutputType | null
    _min: TicketCategoryMinAggregateOutputType | null
    _max: TicketCategoryMaxAggregateOutputType | null
  }

  type GetTicketCategoryGroupByPayload<T extends TicketCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], TicketCategoryGroupByOutputType[P]>
        }
      >
    >


  export type TicketCategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    slaId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    SLA?: boolean | SLADefaultArgs<ExtArgs>
    specialities?: boolean | TicketCategory$specialitiesArgs<ExtArgs>
    categoryEtiquettes?: boolean | TicketCategory$categoryEtiquettesArgs<ExtArgs>
    tickets?: boolean | TicketCategory$ticketsArgs<ExtArgs>
    _count?: boolean | TicketCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketCategory"]>



  export type TicketCategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    slaId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketCategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "slaId" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["ticketCategory"]>
  export type TicketCategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SLA?: boolean | SLADefaultArgs<ExtArgs>
    specialities?: boolean | TicketCategory$specialitiesArgs<ExtArgs>
    categoryEtiquettes?: boolean | TicketCategory$categoryEtiquettesArgs<ExtArgs>
    tickets?: boolean | TicketCategory$ticketsArgs<ExtArgs>
    _count?: boolean | TicketCategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TicketCategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketCategory"
    objects: {
      SLA: Prisma.$SLAPayload<ExtArgs>
      specialities: Prisma.$SpecialityAreaPayload<ExtArgs>[]
      categoryEtiquettes: Prisma.$CategoryEtiquettePayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      slaId: number
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticketCategory"]>
    composites: {}
  }

  type TicketCategoryGetPayload<S extends boolean | null | undefined | TicketCategoryDefaultArgs> = $Result.GetResult<Prisma.$TicketCategoryPayload, S>

  type TicketCategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketCategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCategoryCountAggregateInputType | true
    }

  export interface TicketCategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketCategory'], meta: { name: 'TicketCategory' } }
    /**
     * Find zero or one TicketCategory that matches the filter.
     * @param {TicketCategoryFindUniqueArgs} args - Arguments to find a TicketCategory
     * @example
     * // Get one TicketCategory
     * const ticketCategory = await prisma.ticketCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketCategoryFindUniqueArgs>(args: SelectSubset<T, TicketCategoryFindUniqueArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketCategory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketCategoryFindUniqueOrThrowArgs} args - Arguments to find a TicketCategory
     * @example
     * // Get one TicketCategory
     * const ticketCategory = await prisma.ticketCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketCategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketCategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryFindFirstArgs} args - Arguments to find a TicketCategory
     * @example
     * // Get one TicketCategory
     * const ticketCategory = await prisma.ticketCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketCategoryFindFirstArgs>(args?: SelectSubset<T, TicketCategoryFindFirstArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryFindFirstOrThrowArgs} args - Arguments to find a TicketCategory
     * @example
     * // Get one TicketCategory
     * const ticketCategory = await prisma.ticketCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketCategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketCategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketCategories
     * const ticketCategories = await prisma.ticketCategory.findMany()
     * 
     * // Get first 10 TicketCategories
     * const ticketCategories = await prisma.ticketCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketCategoryWithIdOnly = await prisma.ticketCategory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketCategoryFindManyArgs>(args?: SelectSubset<T, TicketCategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketCategory.
     * @param {TicketCategoryCreateArgs} args - Arguments to create a TicketCategory.
     * @example
     * // Create one TicketCategory
     * const TicketCategory = await prisma.ticketCategory.create({
     *   data: {
     *     // ... data to create a TicketCategory
     *   }
     * })
     * 
     */
    create<T extends TicketCategoryCreateArgs>(args: SelectSubset<T, TicketCategoryCreateArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketCategories.
     * @param {TicketCategoryCreateManyArgs} args - Arguments to create many TicketCategories.
     * @example
     * // Create many TicketCategories
     * const ticketCategory = await prisma.ticketCategory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCategoryCreateManyArgs>(args?: SelectSubset<T, TicketCategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TicketCategory.
     * @param {TicketCategoryDeleteArgs} args - Arguments to delete one TicketCategory.
     * @example
     * // Delete one TicketCategory
     * const TicketCategory = await prisma.ticketCategory.delete({
     *   where: {
     *     // ... filter to delete one TicketCategory
     *   }
     * })
     * 
     */
    delete<T extends TicketCategoryDeleteArgs>(args: SelectSubset<T, TicketCategoryDeleteArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketCategory.
     * @param {TicketCategoryUpdateArgs} args - Arguments to update one TicketCategory.
     * @example
     * // Update one TicketCategory
     * const ticketCategory = await prisma.ticketCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketCategoryUpdateArgs>(args: SelectSubset<T, TicketCategoryUpdateArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketCategories.
     * @param {TicketCategoryDeleteManyArgs} args - Arguments to filter TicketCategories to delete.
     * @example
     * // Delete a few TicketCategories
     * const { count } = await prisma.ticketCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketCategoryDeleteManyArgs>(args?: SelectSubset<T, TicketCategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketCategories
     * const ticketCategory = await prisma.ticketCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketCategoryUpdateManyArgs>(args: SelectSubset<T, TicketCategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TicketCategory.
     * @param {TicketCategoryUpsertArgs} args - Arguments to update or create a TicketCategory.
     * @example
     * // Update or create a TicketCategory
     * const ticketCategory = await prisma.ticketCategory.upsert({
     *   create: {
     *     // ... data to create a TicketCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketCategory we want to update
     *   }
     * })
     */
    upsert<T extends TicketCategoryUpsertArgs>(args: SelectSubset<T, TicketCategoryUpsertArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryCountArgs} args - Arguments to filter TicketCategories to count.
     * @example
     * // Count the number of TicketCategories
     * const count = await prisma.ticketCategory.count({
     *   where: {
     *     // ... the filter for the TicketCategories we want to count
     *   }
     * })
    **/
    count<T extends TicketCategoryCountArgs>(
      args?: Subset<T, TicketCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketCategoryAggregateArgs>(args: Subset<T, TicketCategoryAggregateArgs>): Prisma.PrismaPromise<GetTicketCategoryAggregateType<T>>

    /**
     * Group by TicketCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketCategoryGroupByArgs['orderBy'] }
        : { orderBy?: TicketCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketCategory model
   */
  readonly fields: TicketCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketCategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SLA<T extends SLADefaultArgs<ExtArgs> = {}>(args?: Subset<T, SLADefaultArgs<ExtArgs>>): Prisma__SLAClient<$Result.GetResult<Prisma.$SLAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    specialities<T extends TicketCategory$specialitiesArgs<ExtArgs> = {}>(args?: Subset<T, TicketCategory$specialitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SpecialityAreaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categoryEtiquettes<T extends TicketCategory$categoryEtiquettesArgs<ExtArgs> = {}>(args?: Subset<T, TicketCategory$categoryEtiquettesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryEtiquettePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends TicketCategory$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, TicketCategory$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TicketCategory model
   */
  interface TicketCategoryFieldRefs {
    readonly id: FieldRef<"TicketCategory", 'Int'>
    readonly name: FieldRef<"TicketCategory", 'String'>
    readonly description: FieldRef<"TicketCategory", 'String'>
    readonly slaId: FieldRef<"TicketCategory", 'Int'>
    readonly imageUrl: FieldRef<"TicketCategory", 'String'>
    readonly createdAt: FieldRef<"TicketCategory", 'DateTime'>
    readonly updatedAt: FieldRef<"TicketCategory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketCategory findUnique
   */
  export type TicketCategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketCategory to fetch.
     */
    where: TicketCategoryWhereUniqueInput
  }

  /**
   * TicketCategory findUniqueOrThrow
   */
  export type TicketCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketCategory to fetch.
     */
    where: TicketCategoryWhereUniqueInput
  }

  /**
   * TicketCategory findFirst
   */
  export type TicketCategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketCategory to fetch.
     */
    where?: TicketCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketCategories to fetch.
     */
    orderBy?: TicketCategoryOrderByWithRelationInput | TicketCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketCategories.
     */
    cursor?: TicketCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketCategories.
     */
    distinct?: TicketCategoryScalarFieldEnum | TicketCategoryScalarFieldEnum[]
  }

  /**
   * TicketCategory findFirstOrThrow
   */
  export type TicketCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketCategory to fetch.
     */
    where?: TicketCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketCategories to fetch.
     */
    orderBy?: TicketCategoryOrderByWithRelationInput | TicketCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketCategories.
     */
    cursor?: TicketCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketCategories.
     */
    distinct?: TicketCategoryScalarFieldEnum | TicketCategoryScalarFieldEnum[]
  }

  /**
   * TicketCategory findMany
   */
  export type TicketCategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketCategories to fetch.
     */
    where?: TicketCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketCategories to fetch.
     */
    orderBy?: TicketCategoryOrderByWithRelationInput | TicketCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketCategories.
     */
    cursor?: TicketCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketCategories.
     */
    skip?: number
    distinct?: TicketCategoryScalarFieldEnum | TicketCategoryScalarFieldEnum[]
  }

  /**
   * TicketCategory create
   */
  export type TicketCategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketCategory.
     */
    data: XOR<TicketCategoryCreateInput, TicketCategoryUncheckedCreateInput>
  }

  /**
   * TicketCategory createMany
   */
  export type TicketCategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketCategories.
     */
    data: TicketCategoryCreateManyInput | TicketCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketCategory update
   */
  export type TicketCategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketCategory.
     */
    data: XOR<TicketCategoryUpdateInput, TicketCategoryUncheckedUpdateInput>
    /**
     * Choose, which TicketCategory to update.
     */
    where: TicketCategoryWhereUniqueInput
  }

  /**
   * TicketCategory updateMany
   */
  export type TicketCategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketCategories.
     */
    data: XOR<TicketCategoryUpdateManyMutationInput, TicketCategoryUncheckedUpdateManyInput>
    /**
     * Filter which TicketCategories to update
     */
    where?: TicketCategoryWhereInput
    /**
     * Limit how many TicketCategories to update.
     */
    limit?: number
  }

  /**
   * TicketCategory upsert
   */
  export type TicketCategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketCategory to update in case it exists.
     */
    where: TicketCategoryWhereUniqueInput
    /**
     * In case the TicketCategory found by the `where` argument doesn't exist, create a new TicketCategory with this data.
     */
    create: XOR<TicketCategoryCreateInput, TicketCategoryUncheckedCreateInput>
    /**
     * In case the TicketCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketCategoryUpdateInput, TicketCategoryUncheckedUpdateInput>
  }

  /**
   * TicketCategory delete
   */
  export type TicketCategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
    /**
     * Filter which TicketCategory to delete.
     */
    where: TicketCategoryWhereUniqueInput
  }

  /**
   * TicketCategory deleteMany
   */
  export type TicketCategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketCategories to delete
     */
    where?: TicketCategoryWhereInput
    /**
     * Limit how many TicketCategories to delete.
     */
    limit?: number
  }

  /**
   * TicketCategory.specialities
   */
  export type TicketCategory$specialitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SpecialityArea
     */
    select?: SpecialityAreaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SpecialityArea
     */
    omit?: SpecialityAreaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SpecialityAreaInclude<ExtArgs> | null
    where?: SpecialityAreaWhereInput
    orderBy?: SpecialityAreaOrderByWithRelationInput | SpecialityAreaOrderByWithRelationInput[]
    cursor?: SpecialityAreaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SpecialityAreaScalarFieldEnum | SpecialityAreaScalarFieldEnum[]
  }

  /**
   * TicketCategory.categoryEtiquettes
   */
  export type TicketCategory$categoryEtiquettesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryEtiquette
     */
    select?: CategoryEtiquetteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryEtiquette
     */
    omit?: CategoryEtiquetteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryEtiquetteInclude<ExtArgs> | null
    where?: CategoryEtiquetteWhereInput
    orderBy?: CategoryEtiquetteOrderByWithRelationInput | CategoryEtiquetteOrderByWithRelationInput[]
    cursor?: CategoryEtiquetteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryEtiquetteScalarFieldEnum | CategoryEtiquetteScalarFieldEnum[]
  }

  /**
   * TicketCategory.tickets
   */
  export type TicketCategory$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * TicketCategory without action
   */
  export type TicketCategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCategory
     */
    select?: TicketCategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketCategory
     */
    omit?: TicketCategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketCategoryInclude<ExtArgs> | null
  }


  /**
   * Model AutoTriageRule
   */

  export type AggregateAutoTriageRule = {
    _count: AutoTriageRuleCountAggregateOutputType | null
    _avg: AutoTriageRuleAvgAggregateOutputType | null
    _sum: AutoTriageRuleSumAggregateOutputType | null
    _min: AutoTriageRuleMinAggregateOutputType | null
    _max: AutoTriageRuleMaxAggregateOutputType | null
  }

  export type AutoTriageRuleAvgAggregateOutputType = {
    id: number | null
    timeRemainingSLA: number | null
    technicianSpecialityId: number | null
  }

  export type AutoTriageRuleSumAggregateOutputType = {
    id: number | null
    timeRemainingSLA: number | null
    technicianSpecialityId: number | null
  }

  export type AutoTriageRuleMinAggregateOutputType = {
    id: number | null
    timeRemainingSLA: number | null
    ticketPriority: $Enums.E_TicketPriority | null
    technicianSpecialityId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AutoTriageRuleMaxAggregateOutputType = {
    id: number | null
    timeRemainingSLA: number | null
    ticketPriority: $Enums.E_TicketPriority | null
    technicianSpecialityId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AutoTriageRuleCountAggregateOutputType = {
    id: number
    timeRemainingSLA: number
    ticketPriority: number
    technicianSpecialityId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AutoTriageRuleAvgAggregateInputType = {
    id?: true
    timeRemainingSLA?: true
    technicianSpecialityId?: true
  }

  export type AutoTriageRuleSumAggregateInputType = {
    id?: true
    timeRemainingSLA?: true
    technicianSpecialityId?: true
  }

  export type AutoTriageRuleMinAggregateInputType = {
    id?: true
    timeRemainingSLA?: true
    ticketPriority?: true
    technicianSpecialityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AutoTriageRuleMaxAggregateInputType = {
    id?: true
    timeRemainingSLA?: true
    ticketPriority?: true
    technicianSpecialityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AutoTriageRuleCountAggregateInputType = {
    id?: true
    timeRemainingSLA?: true
    ticketPriority?: true
    technicianSpecialityId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AutoTriageRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutoTriageRule to aggregate.
     */
    where?: AutoTriageRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutoTriageRules to fetch.
     */
    orderBy?: AutoTriageRuleOrderByWithRelationInput | AutoTriageRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutoTriageRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutoTriageRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutoTriageRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AutoTriageRules
    **/
    _count?: true | AutoTriageRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AutoTriageRuleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AutoTriageRuleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutoTriageRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutoTriageRuleMaxAggregateInputType
  }

  export type GetAutoTriageRuleAggregateType<T extends AutoTriageRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateAutoTriageRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutoTriageRule[P]>
      : GetScalarType<T[P], AggregateAutoTriageRule[P]>
  }




  export type AutoTriageRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutoTriageRuleWhereInput
    orderBy?: AutoTriageRuleOrderByWithAggregationInput | AutoTriageRuleOrderByWithAggregationInput[]
    by: AutoTriageRuleScalarFieldEnum[] | AutoTriageRuleScalarFieldEnum
    having?: AutoTriageRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutoTriageRuleCountAggregateInputType | true
    _avg?: AutoTriageRuleAvgAggregateInputType
    _sum?: AutoTriageRuleSumAggregateInputType
    _min?: AutoTriageRuleMinAggregateInputType
    _max?: AutoTriageRuleMaxAggregateInputType
  }

  export type AutoTriageRuleGroupByOutputType = {
    id: number
    timeRemainingSLA: number
    ticketPriority: $Enums.E_TicketPriority
    technicianSpecialityId: number | null
    createdAt: Date
    updatedAt: Date
    _count: AutoTriageRuleCountAggregateOutputType | null
    _avg: AutoTriageRuleAvgAggregateOutputType | null
    _sum: AutoTriageRuleSumAggregateOutputType | null
    _min: AutoTriageRuleMinAggregateOutputType | null
    _max: AutoTriageRuleMaxAggregateOutputType | null
  }

  type GetAutoTriageRuleGroupByPayload<T extends AutoTriageRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutoTriageRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutoTriageRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutoTriageRuleGroupByOutputType[P]>
            : GetScalarType<T[P], AutoTriageRuleGroupByOutputType[P]>
        }
      >
    >


  export type AutoTriageRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    timeRemainingSLA?: boolean
    ticketPriority?: boolean
    technicianSpecialityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Ticket?: boolean | AutoTriageRule$TicketArgs<ExtArgs>
    _count?: boolean | AutoTriageRuleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["autoTriageRule"]>



  export type AutoTriageRuleSelectScalar = {
    id?: boolean
    timeRemainingSLA?: boolean
    ticketPriority?: boolean
    technicianSpecialityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AutoTriageRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "timeRemainingSLA" | "ticketPriority" | "technicianSpecialityId" | "createdAt" | "updatedAt", ExtArgs["result"]["autoTriageRule"]>
  export type AutoTriageRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ticket?: boolean | AutoTriageRule$TicketArgs<ExtArgs>
    _count?: boolean | AutoTriageRuleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AutoTriageRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AutoTriageRule"
    objects: {
      Ticket: Prisma.$TicketPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      timeRemainingSLA: number
      ticketPriority: $Enums.E_TicketPriority
      technicianSpecialityId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["autoTriageRule"]>
    composites: {}
  }

  type AutoTriageRuleGetPayload<S extends boolean | null | undefined | AutoTriageRuleDefaultArgs> = $Result.GetResult<Prisma.$AutoTriageRulePayload, S>

  type AutoTriageRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutoTriageRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutoTriageRuleCountAggregateInputType | true
    }

  export interface AutoTriageRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AutoTriageRule'], meta: { name: 'AutoTriageRule' } }
    /**
     * Find zero or one AutoTriageRule that matches the filter.
     * @param {AutoTriageRuleFindUniqueArgs} args - Arguments to find a AutoTriageRule
     * @example
     * // Get one AutoTriageRule
     * const autoTriageRule = await prisma.autoTriageRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutoTriageRuleFindUniqueArgs>(args: SelectSubset<T, AutoTriageRuleFindUniqueArgs<ExtArgs>>): Prisma__AutoTriageRuleClient<$Result.GetResult<Prisma.$AutoTriageRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AutoTriageRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutoTriageRuleFindUniqueOrThrowArgs} args - Arguments to find a AutoTriageRule
     * @example
     * // Get one AutoTriageRule
     * const autoTriageRule = await prisma.autoTriageRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutoTriageRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, AutoTriageRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutoTriageRuleClient<$Result.GetResult<Prisma.$AutoTriageRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AutoTriageRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoTriageRuleFindFirstArgs} args - Arguments to find a AutoTriageRule
     * @example
     * // Get one AutoTriageRule
     * const autoTriageRule = await prisma.autoTriageRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutoTriageRuleFindFirstArgs>(args?: SelectSubset<T, AutoTriageRuleFindFirstArgs<ExtArgs>>): Prisma__AutoTriageRuleClient<$Result.GetResult<Prisma.$AutoTriageRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AutoTriageRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoTriageRuleFindFirstOrThrowArgs} args - Arguments to find a AutoTriageRule
     * @example
     * // Get one AutoTriageRule
     * const autoTriageRule = await prisma.autoTriageRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutoTriageRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, AutoTriageRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutoTriageRuleClient<$Result.GetResult<Prisma.$AutoTriageRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AutoTriageRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoTriageRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AutoTriageRules
     * const autoTriageRules = await prisma.autoTriageRule.findMany()
     * 
     * // Get first 10 AutoTriageRules
     * const autoTriageRules = await prisma.autoTriageRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const autoTriageRuleWithIdOnly = await prisma.autoTriageRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutoTriageRuleFindManyArgs>(args?: SelectSubset<T, AutoTriageRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutoTriageRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AutoTriageRule.
     * @param {AutoTriageRuleCreateArgs} args - Arguments to create a AutoTriageRule.
     * @example
     * // Create one AutoTriageRule
     * const AutoTriageRule = await prisma.autoTriageRule.create({
     *   data: {
     *     // ... data to create a AutoTriageRule
     *   }
     * })
     * 
     */
    create<T extends AutoTriageRuleCreateArgs>(args: SelectSubset<T, AutoTriageRuleCreateArgs<ExtArgs>>): Prisma__AutoTriageRuleClient<$Result.GetResult<Prisma.$AutoTriageRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AutoTriageRules.
     * @param {AutoTriageRuleCreateManyArgs} args - Arguments to create many AutoTriageRules.
     * @example
     * // Create many AutoTriageRules
     * const autoTriageRule = await prisma.autoTriageRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutoTriageRuleCreateManyArgs>(args?: SelectSubset<T, AutoTriageRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AutoTriageRule.
     * @param {AutoTriageRuleDeleteArgs} args - Arguments to delete one AutoTriageRule.
     * @example
     * // Delete one AutoTriageRule
     * const AutoTriageRule = await prisma.autoTriageRule.delete({
     *   where: {
     *     // ... filter to delete one AutoTriageRule
     *   }
     * })
     * 
     */
    delete<T extends AutoTriageRuleDeleteArgs>(args: SelectSubset<T, AutoTriageRuleDeleteArgs<ExtArgs>>): Prisma__AutoTriageRuleClient<$Result.GetResult<Prisma.$AutoTriageRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AutoTriageRule.
     * @param {AutoTriageRuleUpdateArgs} args - Arguments to update one AutoTriageRule.
     * @example
     * // Update one AutoTriageRule
     * const autoTriageRule = await prisma.autoTriageRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutoTriageRuleUpdateArgs>(args: SelectSubset<T, AutoTriageRuleUpdateArgs<ExtArgs>>): Prisma__AutoTriageRuleClient<$Result.GetResult<Prisma.$AutoTriageRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AutoTriageRules.
     * @param {AutoTriageRuleDeleteManyArgs} args - Arguments to filter AutoTriageRules to delete.
     * @example
     * // Delete a few AutoTriageRules
     * const { count } = await prisma.autoTriageRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutoTriageRuleDeleteManyArgs>(args?: SelectSubset<T, AutoTriageRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AutoTriageRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoTriageRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AutoTriageRules
     * const autoTriageRule = await prisma.autoTriageRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutoTriageRuleUpdateManyArgs>(args: SelectSubset<T, AutoTriageRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AutoTriageRule.
     * @param {AutoTriageRuleUpsertArgs} args - Arguments to update or create a AutoTriageRule.
     * @example
     * // Update or create a AutoTriageRule
     * const autoTriageRule = await prisma.autoTriageRule.upsert({
     *   create: {
     *     // ... data to create a AutoTriageRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AutoTriageRule we want to update
     *   }
     * })
     */
    upsert<T extends AutoTriageRuleUpsertArgs>(args: SelectSubset<T, AutoTriageRuleUpsertArgs<ExtArgs>>): Prisma__AutoTriageRuleClient<$Result.GetResult<Prisma.$AutoTriageRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AutoTriageRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoTriageRuleCountArgs} args - Arguments to filter AutoTriageRules to count.
     * @example
     * // Count the number of AutoTriageRules
     * const count = await prisma.autoTriageRule.count({
     *   where: {
     *     // ... the filter for the AutoTriageRules we want to count
     *   }
     * })
    **/
    count<T extends AutoTriageRuleCountArgs>(
      args?: Subset<T, AutoTriageRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutoTriageRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AutoTriageRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoTriageRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AutoTriageRuleAggregateArgs>(args: Subset<T, AutoTriageRuleAggregateArgs>): Prisma.PrismaPromise<GetAutoTriageRuleAggregateType<T>>

    /**
     * Group by AutoTriageRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutoTriageRuleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AutoTriageRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutoTriageRuleGroupByArgs['orderBy'] }
        : { orderBy?: AutoTriageRuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AutoTriageRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutoTriageRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AutoTriageRule model
   */
  readonly fields: AutoTriageRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AutoTriageRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutoTriageRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ticket<T extends AutoTriageRule$TicketArgs<ExtArgs> = {}>(args?: Subset<T, AutoTriageRule$TicketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AutoTriageRule model
   */
  interface AutoTriageRuleFieldRefs {
    readonly id: FieldRef<"AutoTriageRule", 'Int'>
    readonly timeRemainingSLA: FieldRef<"AutoTriageRule", 'Int'>
    readonly ticketPriority: FieldRef<"AutoTriageRule", 'E_TicketPriority'>
    readonly technicianSpecialityId: FieldRef<"AutoTriageRule", 'Int'>
    readonly createdAt: FieldRef<"AutoTriageRule", 'DateTime'>
    readonly updatedAt: FieldRef<"AutoTriageRule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AutoTriageRule findUnique
   */
  export type AutoTriageRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoTriageRule
     */
    select?: AutoTriageRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoTriageRule
     */
    omit?: AutoTriageRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoTriageRuleInclude<ExtArgs> | null
    /**
     * Filter, which AutoTriageRule to fetch.
     */
    where: AutoTriageRuleWhereUniqueInput
  }

  /**
   * AutoTriageRule findUniqueOrThrow
   */
  export type AutoTriageRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoTriageRule
     */
    select?: AutoTriageRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoTriageRule
     */
    omit?: AutoTriageRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoTriageRuleInclude<ExtArgs> | null
    /**
     * Filter, which AutoTriageRule to fetch.
     */
    where: AutoTriageRuleWhereUniqueInput
  }

  /**
   * AutoTriageRule findFirst
   */
  export type AutoTriageRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoTriageRule
     */
    select?: AutoTriageRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoTriageRule
     */
    omit?: AutoTriageRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoTriageRuleInclude<ExtArgs> | null
    /**
     * Filter, which AutoTriageRule to fetch.
     */
    where?: AutoTriageRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutoTriageRules to fetch.
     */
    orderBy?: AutoTriageRuleOrderByWithRelationInput | AutoTriageRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutoTriageRules.
     */
    cursor?: AutoTriageRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutoTriageRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutoTriageRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutoTriageRules.
     */
    distinct?: AutoTriageRuleScalarFieldEnum | AutoTriageRuleScalarFieldEnum[]
  }

  /**
   * AutoTriageRule findFirstOrThrow
   */
  export type AutoTriageRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoTriageRule
     */
    select?: AutoTriageRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoTriageRule
     */
    omit?: AutoTriageRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoTriageRuleInclude<ExtArgs> | null
    /**
     * Filter, which AutoTriageRule to fetch.
     */
    where?: AutoTriageRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutoTriageRules to fetch.
     */
    orderBy?: AutoTriageRuleOrderByWithRelationInput | AutoTriageRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AutoTriageRules.
     */
    cursor?: AutoTriageRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutoTriageRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutoTriageRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AutoTriageRules.
     */
    distinct?: AutoTriageRuleScalarFieldEnum | AutoTriageRuleScalarFieldEnum[]
  }

  /**
   * AutoTriageRule findMany
   */
  export type AutoTriageRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoTriageRule
     */
    select?: AutoTriageRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoTriageRule
     */
    omit?: AutoTriageRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoTriageRuleInclude<ExtArgs> | null
    /**
     * Filter, which AutoTriageRules to fetch.
     */
    where?: AutoTriageRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AutoTriageRules to fetch.
     */
    orderBy?: AutoTriageRuleOrderByWithRelationInput | AutoTriageRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AutoTriageRules.
     */
    cursor?: AutoTriageRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AutoTriageRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AutoTriageRules.
     */
    skip?: number
    distinct?: AutoTriageRuleScalarFieldEnum | AutoTriageRuleScalarFieldEnum[]
  }

  /**
   * AutoTriageRule create
   */
  export type AutoTriageRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoTriageRule
     */
    select?: AutoTriageRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoTriageRule
     */
    omit?: AutoTriageRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoTriageRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a AutoTriageRule.
     */
    data: XOR<AutoTriageRuleCreateInput, AutoTriageRuleUncheckedCreateInput>
  }

  /**
   * AutoTriageRule createMany
   */
  export type AutoTriageRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AutoTriageRules.
     */
    data: AutoTriageRuleCreateManyInput | AutoTriageRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AutoTriageRule update
   */
  export type AutoTriageRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoTriageRule
     */
    select?: AutoTriageRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoTriageRule
     */
    omit?: AutoTriageRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoTriageRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a AutoTriageRule.
     */
    data: XOR<AutoTriageRuleUpdateInput, AutoTriageRuleUncheckedUpdateInput>
    /**
     * Choose, which AutoTriageRule to update.
     */
    where: AutoTriageRuleWhereUniqueInput
  }

  /**
   * AutoTriageRule updateMany
   */
  export type AutoTriageRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AutoTriageRules.
     */
    data: XOR<AutoTriageRuleUpdateManyMutationInput, AutoTriageRuleUncheckedUpdateManyInput>
    /**
     * Filter which AutoTriageRules to update
     */
    where?: AutoTriageRuleWhereInput
    /**
     * Limit how many AutoTriageRules to update.
     */
    limit?: number
  }

  /**
   * AutoTriageRule upsert
   */
  export type AutoTriageRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoTriageRule
     */
    select?: AutoTriageRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoTriageRule
     */
    omit?: AutoTriageRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoTriageRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the AutoTriageRule to update in case it exists.
     */
    where: AutoTriageRuleWhereUniqueInput
    /**
     * In case the AutoTriageRule found by the `where` argument doesn't exist, create a new AutoTriageRule with this data.
     */
    create: XOR<AutoTriageRuleCreateInput, AutoTriageRuleUncheckedCreateInput>
    /**
     * In case the AutoTriageRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutoTriageRuleUpdateInput, AutoTriageRuleUncheckedUpdateInput>
  }

  /**
   * AutoTriageRule delete
   */
  export type AutoTriageRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoTriageRule
     */
    select?: AutoTriageRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoTriageRule
     */
    omit?: AutoTriageRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoTriageRuleInclude<ExtArgs> | null
    /**
     * Filter which AutoTriageRule to delete.
     */
    where: AutoTriageRuleWhereUniqueInput
  }

  /**
   * AutoTriageRule deleteMany
   */
  export type AutoTriageRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AutoTriageRules to delete
     */
    where?: AutoTriageRuleWhereInput
    /**
     * Limit how many AutoTriageRules to delete.
     */
    limit?: number
  }

  /**
   * AutoTriageRule.Ticket
   */
  export type AutoTriageRule$TicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * AutoTriageRule without action
   */
  export type AutoTriageRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoTriageRule
     */
    select?: AutoTriageRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoTriageRule
     */
    omit?: AutoTriageRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoTriageRuleInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    technicianId: number | null
    ticketCategoryId: number | null
    storyPoints: number | null
    resolutionDays: number | null
    ticketValorationId: number | null
    automaticTriageRuleId: number | null
  }

  export type TicketSumAggregateOutputType = {
    id: number | null
    userId: number | null
    technicianId: number | null
    ticketCategoryId: number | null
    storyPoints: number | null
    resolutionDays: number | null
    ticketValorationId: number | null
    automaticTriageRuleId: number | null
  }

  export type TicketMinAggregateOutputType = {
    id: number | null
    userId: number | null
    technicianId: number | null
    ticketCategoryId: number | null
    title: string | null
    description: string | null
    status: $Enums.E_TicketStatus | null
    priority: $Enums.E_TicketPriority | null
    storyPoints: number | null
    aceptanceCriteria: string | null
    comments: string | null
    resolutionDays: number | null
    slaReply: Date | null
    slaResolution: Date | null
    replyAchieved: boolean | null
    resolutionAchieved: boolean | null
    ticketValorationId: number | null
    closedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    assignedAt: Date | null
    assignedMethod: $Enums.E_AssignedMethod | null
    automaticTriageRuleId: number | null
  }

  export type TicketMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    technicianId: number | null
    ticketCategoryId: number | null
    title: string | null
    description: string | null
    status: $Enums.E_TicketStatus | null
    priority: $Enums.E_TicketPriority | null
    storyPoints: number | null
    aceptanceCriteria: string | null
    comments: string | null
    resolutionDays: number | null
    slaReply: Date | null
    slaResolution: Date | null
    replyAchieved: boolean | null
    resolutionAchieved: boolean | null
    ticketValorationId: number | null
    closedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    assignedAt: Date | null
    assignedMethod: $Enums.E_AssignedMethod | null
    automaticTriageRuleId: number | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    userId: number
    technicianId: number
    ticketCategoryId: number
    title: number
    description: number
    status: number
    priority: number
    storyPoints: number
    aceptanceCriteria: number
    comments: number
    resolutionDays: number
    slaReply: number
    slaResolution: number
    replyAchieved: number
    resolutionAchieved: number
    ticketValorationId: number
    closedAt: number
    createdAt: number
    updatedAt: number
    assignedAt: number
    assignedMethod: number
    automaticTriageRuleId: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    id?: true
    userId?: true
    technicianId?: true
    ticketCategoryId?: true
    storyPoints?: true
    resolutionDays?: true
    ticketValorationId?: true
    automaticTriageRuleId?: true
  }

  export type TicketSumAggregateInputType = {
    id?: true
    userId?: true
    technicianId?: true
    ticketCategoryId?: true
    storyPoints?: true
    resolutionDays?: true
    ticketValorationId?: true
    automaticTriageRuleId?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    userId?: true
    technicianId?: true
    ticketCategoryId?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    storyPoints?: true
    aceptanceCriteria?: true
    comments?: true
    resolutionDays?: true
    slaReply?: true
    slaResolution?: true
    replyAchieved?: true
    resolutionAchieved?: true
    ticketValorationId?: true
    closedAt?: true
    createdAt?: true
    updatedAt?: true
    assignedAt?: true
    assignedMethod?: true
    automaticTriageRuleId?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    userId?: true
    technicianId?: true
    ticketCategoryId?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    storyPoints?: true
    aceptanceCriteria?: true
    comments?: true
    resolutionDays?: true
    slaReply?: true
    slaResolution?: true
    replyAchieved?: true
    resolutionAchieved?: true
    ticketValorationId?: true
    closedAt?: true
    createdAt?: true
    updatedAt?: true
    assignedAt?: true
    assignedMethod?: true
    automaticTriageRuleId?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    userId?: true
    technicianId?: true
    ticketCategoryId?: true
    title?: true
    description?: true
    status?: true
    priority?: true
    storyPoints?: true
    aceptanceCriteria?: true
    comments?: true
    resolutionDays?: true
    slaReply?: true
    slaResolution?: true
    replyAchieved?: true
    resolutionAchieved?: true
    ticketValorationId?: true
    closedAt?: true
    createdAt?: true
    updatedAt?: true
    assignedAt?: true
    assignedMethod?: true
    automaticTriageRuleId?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: number
    userId: number
    technicianId: number | null
    ticketCategoryId: number
    title: string
    description: string | null
    status: $Enums.E_TicketStatus
    priority: $Enums.E_TicketPriority
    storyPoints: number | null
    aceptanceCriteria: string | null
    comments: string | null
    resolutionDays: number | null
    slaReply: Date | null
    slaResolution: Date | null
    replyAchieved: boolean | null
    resolutionAchieved: boolean | null
    ticketValorationId: number | null
    closedAt: Date | null
    createdAt: Date
    updatedAt: Date
    assignedAt: Date | null
    assignedMethod: $Enums.E_AssignedMethod | null
    automaticTriageRuleId: number | null
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    technicianId?: boolean
    ticketCategoryId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    storyPoints?: boolean
    aceptanceCriteria?: boolean
    comments?: boolean
    resolutionDays?: boolean
    slaReply?: boolean
    slaResolution?: boolean
    replyAchieved?: boolean
    resolutionAchieved?: boolean
    ticketValorationId?: boolean
    closedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignedAt?: boolean
    assignedMethod?: boolean
    automaticTriageRuleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    technician?: boolean | Ticket$technicianArgs<ExtArgs>
    ticketImages?: boolean | Ticket$ticketImagesArgs<ExtArgs>
    ticketHistory?: boolean | Ticket$ticketHistoryArgs<ExtArgs>
    ticketCategory?: boolean | TicketCategoryDefaultArgs<ExtArgs>
    notifications?: boolean | Ticket$notificationsArgs<ExtArgs>
    ticketValoration?: boolean | Ticket$ticketValorationArgs<ExtArgs>
    automaticTriageRule?: boolean | Ticket$automaticTriageRuleArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>



  export type TicketSelectScalar = {
    id?: boolean
    userId?: boolean
    technicianId?: boolean
    ticketCategoryId?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    priority?: boolean
    storyPoints?: boolean
    aceptanceCriteria?: boolean
    comments?: boolean
    resolutionDays?: boolean
    slaReply?: boolean
    slaResolution?: boolean
    replyAchieved?: boolean
    resolutionAchieved?: boolean
    ticketValorationId?: boolean
    closedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignedAt?: boolean
    assignedMethod?: boolean
    automaticTriageRuleId?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "technicianId" | "ticketCategoryId" | "title" | "description" | "status" | "priority" | "storyPoints" | "aceptanceCriteria" | "comments" | "resolutionDays" | "slaReply" | "slaResolution" | "replyAchieved" | "resolutionAchieved" | "ticketValorationId" | "closedAt" | "createdAt" | "updatedAt" | "assignedAt" | "assignedMethod" | "automaticTriageRuleId", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    technician?: boolean | Ticket$technicianArgs<ExtArgs>
    ticketImages?: boolean | Ticket$ticketImagesArgs<ExtArgs>
    ticketHistory?: boolean | Ticket$ticketHistoryArgs<ExtArgs>
    ticketCategory?: boolean | TicketCategoryDefaultArgs<ExtArgs>
    notifications?: boolean | Ticket$notificationsArgs<ExtArgs>
    ticketValoration?: boolean | Ticket$ticketValorationArgs<ExtArgs>
    automaticTriageRule?: boolean | Ticket$automaticTriageRuleArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      technician: Prisma.$UserTechnicianPayload<ExtArgs> | null
      ticketImages: Prisma.$TicketImagePayload<ExtArgs>[]
      ticketHistory: Prisma.$TicketHistoryPayload<ExtArgs>[]
      ticketCategory: Prisma.$TicketCategoryPayload<ExtArgs>
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      ticketValoration: Prisma.$TicketValorationPayload<ExtArgs> | null
      automaticTriageRule: Prisma.$AutoTriageRulePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      technicianId: number | null
      ticketCategoryId: number
      title: string
      description: string | null
      status: $Enums.E_TicketStatus
      priority: $Enums.E_TicketPriority
      storyPoints: number | null
      aceptanceCriteria: string | null
      comments: string | null
      resolutionDays: number | null
      slaReply: Date | null
      slaResolution: Date | null
      replyAchieved: boolean | null
      resolutionAchieved: boolean | null
      ticketValorationId: number | null
      closedAt: Date | null
      createdAt: Date
      updatedAt: Date
      assignedAt: Date | null
      assignedMethod: $Enums.E_AssignedMethod | null
      automaticTriageRuleId: number | null
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    technician<T extends Ticket$technicianArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$technicianArgs<ExtArgs>>): Prisma__UserTechnicianClient<$Result.GetResult<Prisma.$UserTechnicianPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ticketImages<T extends Ticket$ticketImagesArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$ticketImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticketHistory<T extends Ticket$ticketHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$ticketHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticketCategory<T extends TicketCategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketCategoryDefaultArgs<ExtArgs>>): Prisma__TicketCategoryClient<$Result.GetResult<Prisma.$TicketCategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notifications<T extends Ticket$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticketValoration<T extends Ticket$ticketValorationArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$ticketValorationArgs<ExtArgs>>): Prisma__TicketValorationClient<$Result.GetResult<Prisma.$TicketValorationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    automaticTriageRule<T extends Ticket$automaticTriageRuleArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$automaticTriageRuleArgs<ExtArgs>>): Prisma__AutoTriageRuleClient<$Result.GetResult<Prisma.$AutoTriageRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'Int'>
    readonly userId: FieldRef<"Ticket", 'Int'>
    readonly technicianId: FieldRef<"Ticket", 'Int'>
    readonly ticketCategoryId: FieldRef<"Ticket", 'Int'>
    readonly title: FieldRef<"Ticket", 'String'>
    readonly description: FieldRef<"Ticket", 'String'>
    readonly status: FieldRef<"Ticket", 'E_TicketStatus'>
    readonly priority: FieldRef<"Ticket", 'E_TicketPriority'>
    readonly storyPoints: FieldRef<"Ticket", 'Int'>
    readonly aceptanceCriteria: FieldRef<"Ticket", 'String'>
    readonly comments: FieldRef<"Ticket", 'String'>
    readonly resolutionDays: FieldRef<"Ticket", 'Int'>
    readonly slaReply: FieldRef<"Ticket", 'DateTime'>
    readonly slaResolution: FieldRef<"Ticket", 'DateTime'>
    readonly replyAchieved: FieldRef<"Ticket", 'Boolean'>
    readonly resolutionAchieved: FieldRef<"Ticket", 'Boolean'>
    readonly ticketValorationId: FieldRef<"Ticket", 'Int'>
    readonly closedAt: FieldRef<"Ticket", 'DateTime'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
    readonly assignedAt: FieldRef<"Ticket", 'DateTime'>
    readonly assignedMethod: FieldRef<"Ticket", 'E_AssignedMethod'>
    readonly automaticTriageRuleId: FieldRef<"Ticket", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.technician
   */
  export type Ticket$technicianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserTechnician
     */
    select?: UserTechnicianSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserTechnician
     */
    omit?: UserTechnicianOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserTechnicianInclude<ExtArgs> | null
    where?: UserTechnicianWhereInput
  }

  /**
   * Ticket.ticketImages
   */
  export type Ticket$ticketImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketImage
     */
    select?: TicketImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketImage
     */
    omit?: TicketImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketImageInclude<ExtArgs> | null
    where?: TicketImageWhereInput
    orderBy?: TicketImageOrderByWithRelationInput | TicketImageOrderByWithRelationInput[]
    cursor?: TicketImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketImageScalarFieldEnum | TicketImageScalarFieldEnum[]
  }

  /**
   * Ticket.ticketHistory
   */
  export type Ticket$ticketHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryInclude<ExtArgs> | null
    where?: TicketHistoryWhereInput
    orderBy?: TicketHistoryOrderByWithRelationInput | TicketHistoryOrderByWithRelationInput[]
    cursor?: TicketHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketHistoryScalarFieldEnum | TicketHistoryScalarFieldEnum[]
  }

  /**
   * Ticket.notifications
   */
  export type Ticket$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Ticket.ticketValoration
   */
  export type Ticket$ticketValorationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketValoration
     */
    select?: TicketValorationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketValoration
     */
    omit?: TicketValorationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketValorationInclude<ExtArgs> | null
    where?: TicketValorationWhereInput
  }

  /**
   * Ticket.automaticTriageRule
   */
  export type Ticket$automaticTriageRuleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutoTriageRule
     */
    select?: AutoTriageRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AutoTriageRule
     */
    omit?: AutoTriageRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutoTriageRuleInclude<ExtArgs> | null
    where?: AutoTriageRuleWhereInput
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model TicketImage
   */

  export type AggregateTicketImage = {
    _count: TicketImageCountAggregateOutputType | null
    _avg: TicketImageAvgAggregateOutputType | null
    _sum: TicketImageSumAggregateOutputType | null
    _min: TicketImageMinAggregateOutputType | null
    _max: TicketImageMaxAggregateOutputType | null
  }

  export type TicketImageAvgAggregateOutputType = {
    id: number | null
    ticketId: number | null
    ticketHistoryId: number | null
  }

  export type TicketImageSumAggregateOutputType = {
    id: number | null
    ticketId: number | null
    ticketHistoryId: number | null
  }

  export type TicketImageMinAggregateOutputType = {
    id: number | null
    ticketId: number | null
    ticketHistoryId: number | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketImageMaxAggregateOutputType = {
    id: number | null
    ticketId: number | null
    ticketHistoryId: number | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketImageCountAggregateOutputType = {
    id: number
    ticketId: number
    ticketHistoryId: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketImageAvgAggregateInputType = {
    id?: true
    ticketId?: true
    ticketHistoryId?: true
  }

  export type TicketImageSumAggregateInputType = {
    id?: true
    ticketId?: true
    ticketHistoryId?: true
  }

  export type TicketImageMinAggregateInputType = {
    id?: true
    ticketId?: true
    ticketHistoryId?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketImageMaxAggregateInputType = {
    id?: true
    ticketId?: true
    ticketHistoryId?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketImageCountAggregateInputType = {
    id?: true
    ticketId?: true
    ticketHistoryId?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketImage to aggregate.
     */
    where?: TicketImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketImages to fetch.
     */
    orderBy?: TicketImageOrderByWithRelationInput | TicketImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketImages
    **/
    _count?: true | TicketImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketImageMaxAggregateInputType
  }

  export type GetTicketImageAggregateType<T extends TicketImageAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketImage[P]>
      : GetScalarType<T[P], AggregateTicketImage[P]>
  }




  export type TicketImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketImageWhereInput
    orderBy?: TicketImageOrderByWithAggregationInput | TicketImageOrderByWithAggregationInput[]
    by: TicketImageScalarFieldEnum[] | TicketImageScalarFieldEnum
    having?: TicketImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketImageCountAggregateInputType | true
    _avg?: TicketImageAvgAggregateInputType
    _sum?: TicketImageSumAggregateInputType
    _min?: TicketImageMinAggregateInputType
    _max?: TicketImageMaxAggregateInputType
  }

  export type TicketImageGroupByOutputType = {
    id: number
    ticketId: number | null
    ticketHistoryId: number | null
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    _count: TicketImageCountAggregateOutputType | null
    _avg: TicketImageAvgAggregateOutputType | null
    _sum: TicketImageSumAggregateOutputType | null
    _min: TicketImageMinAggregateOutputType | null
    _max: TicketImageMaxAggregateOutputType | null
  }

  type GetTicketImageGroupByPayload<T extends TicketImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketImageGroupByOutputType[P]>
            : GetScalarType<T[P], TicketImageGroupByOutputType[P]>
        }
      >
    >


  export type TicketImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    ticketHistoryId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ticket?: boolean | TicketImage$ticketArgs<ExtArgs>
    ticketHistory?: boolean | TicketImage$ticketHistoryArgs<ExtArgs>
  }, ExtArgs["result"]["ticketImage"]>



  export type TicketImageSelectScalar = {
    id?: boolean
    ticketId?: boolean
    ticketHistoryId?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketId" | "ticketHistoryId" | "imageUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["ticketImage"]>
  export type TicketImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketImage$ticketArgs<ExtArgs>
    ticketHistory?: boolean | TicketImage$ticketHistoryArgs<ExtArgs>
  }

  export type $TicketImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketImage"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs> | null
      ticketHistory: Prisma.$TicketHistoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ticketId: number | null
      ticketHistoryId: number | null
      imageUrl: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticketImage"]>
    composites: {}
  }

  type TicketImageGetPayload<S extends boolean | null | undefined | TicketImageDefaultArgs> = $Result.GetResult<Prisma.$TicketImagePayload, S>

  type TicketImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketImageCountAggregateInputType | true
    }

  export interface TicketImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketImage'], meta: { name: 'TicketImage' } }
    /**
     * Find zero or one TicketImage that matches the filter.
     * @param {TicketImageFindUniqueArgs} args - Arguments to find a TicketImage
     * @example
     * // Get one TicketImage
     * const ticketImage = await prisma.ticketImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketImageFindUniqueArgs>(args: SelectSubset<T, TicketImageFindUniqueArgs<ExtArgs>>): Prisma__TicketImageClient<$Result.GetResult<Prisma.$TicketImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketImageFindUniqueOrThrowArgs} args - Arguments to find a TicketImage
     * @example
     * // Get one TicketImage
     * const ticketImage = await prisma.ticketImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketImageFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketImageClient<$Result.GetResult<Prisma.$TicketImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketImageFindFirstArgs} args - Arguments to find a TicketImage
     * @example
     * // Get one TicketImage
     * const ticketImage = await prisma.ticketImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketImageFindFirstArgs>(args?: SelectSubset<T, TicketImageFindFirstArgs<ExtArgs>>): Prisma__TicketImageClient<$Result.GetResult<Prisma.$TicketImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketImageFindFirstOrThrowArgs} args - Arguments to find a TicketImage
     * @example
     * // Get one TicketImage
     * const ticketImage = await prisma.ticketImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketImageFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketImageClient<$Result.GetResult<Prisma.$TicketImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketImages
     * const ticketImages = await prisma.ticketImage.findMany()
     * 
     * // Get first 10 TicketImages
     * const ticketImages = await prisma.ticketImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketImageWithIdOnly = await prisma.ticketImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketImageFindManyArgs>(args?: SelectSubset<T, TicketImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketImage.
     * @param {TicketImageCreateArgs} args - Arguments to create a TicketImage.
     * @example
     * // Create one TicketImage
     * const TicketImage = await prisma.ticketImage.create({
     *   data: {
     *     // ... data to create a TicketImage
     *   }
     * })
     * 
     */
    create<T extends TicketImageCreateArgs>(args: SelectSubset<T, TicketImageCreateArgs<ExtArgs>>): Prisma__TicketImageClient<$Result.GetResult<Prisma.$TicketImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketImages.
     * @param {TicketImageCreateManyArgs} args - Arguments to create many TicketImages.
     * @example
     * // Create many TicketImages
     * const ticketImage = await prisma.ticketImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketImageCreateManyArgs>(args?: SelectSubset<T, TicketImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TicketImage.
     * @param {TicketImageDeleteArgs} args - Arguments to delete one TicketImage.
     * @example
     * // Delete one TicketImage
     * const TicketImage = await prisma.ticketImage.delete({
     *   where: {
     *     // ... filter to delete one TicketImage
     *   }
     * })
     * 
     */
    delete<T extends TicketImageDeleteArgs>(args: SelectSubset<T, TicketImageDeleteArgs<ExtArgs>>): Prisma__TicketImageClient<$Result.GetResult<Prisma.$TicketImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketImage.
     * @param {TicketImageUpdateArgs} args - Arguments to update one TicketImage.
     * @example
     * // Update one TicketImage
     * const ticketImage = await prisma.ticketImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketImageUpdateArgs>(args: SelectSubset<T, TicketImageUpdateArgs<ExtArgs>>): Prisma__TicketImageClient<$Result.GetResult<Prisma.$TicketImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketImages.
     * @param {TicketImageDeleteManyArgs} args - Arguments to filter TicketImages to delete.
     * @example
     * // Delete a few TicketImages
     * const { count } = await prisma.ticketImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketImageDeleteManyArgs>(args?: SelectSubset<T, TicketImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketImages
     * const ticketImage = await prisma.ticketImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketImageUpdateManyArgs>(args: SelectSubset<T, TicketImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TicketImage.
     * @param {TicketImageUpsertArgs} args - Arguments to update or create a TicketImage.
     * @example
     * // Update or create a TicketImage
     * const ticketImage = await prisma.ticketImage.upsert({
     *   create: {
     *     // ... data to create a TicketImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketImage we want to update
     *   }
     * })
     */
    upsert<T extends TicketImageUpsertArgs>(args: SelectSubset<T, TicketImageUpsertArgs<ExtArgs>>): Prisma__TicketImageClient<$Result.GetResult<Prisma.$TicketImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketImageCountArgs} args - Arguments to filter TicketImages to count.
     * @example
     * // Count the number of TicketImages
     * const count = await prisma.ticketImage.count({
     *   where: {
     *     // ... the filter for the TicketImages we want to count
     *   }
     * })
    **/
    count<T extends TicketImageCountArgs>(
      args?: Subset<T, TicketImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketImageAggregateArgs>(args: Subset<T, TicketImageAggregateArgs>): Prisma.PrismaPromise<GetTicketImageAggregateType<T>>

    /**
     * Group by TicketImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketImageGroupByArgs['orderBy'] }
        : { orderBy?: TicketImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketImage model
   */
  readonly fields: TicketImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketImage$ticketArgs<ExtArgs> = {}>(args?: Subset<T, TicketImage$ticketArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ticketHistory<T extends TicketImage$ticketHistoryArgs<ExtArgs> = {}>(args?: Subset<T, TicketImage$ticketHistoryArgs<ExtArgs>>): Prisma__TicketHistoryClient<$Result.GetResult<Prisma.$TicketHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TicketImage model
   */
  interface TicketImageFieldRefs {
    readonly id: FieldRef<"TicketImage", 'Int'>
    readonly ticketId: FieldRef<"TicketImage", 'Int'>
    readonly ticketHistoryId: FieldRef<"TicketImage", 'Int'>
    readonly imageUrl: FieldRef<"TicketImage", 'String'>
    readonly createdAt: FieldRef<"TicketImage", 'DateTime'>
    readonly updatedAt: FieldRef<"TicketImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketImage findUnique
   */
  export type TicketImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketImage
     */
    select?: TicketImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketImage
     */
    omit?: TicketImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketImageInclude<ExtArgs> | null
    /**
     * Filter, which TicketImage to fetch.
     */
    where: TicketImageWhereUniqueInput
  }

  /**
   * TicketImage findUniqueOrThrow
   */
  export type TicketImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketImage
     */
    select?: TicketImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketImage
     */
    omit?: TicketImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketImageInclude<ExtArgs> | null
    /**
     * Filter, which TicketImage to fetch.
     */
    where: TicketImageWhereUniqueInput
  }

  /**
   * TicketImage findFirst
   */
  export type TicketImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketImage
     */
    select?: TicketImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketImage
     */
    omit?: TicketImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketImageInclude<ExtArgs> | null
    /**
     * Filter, which TicketImage to fetch.
     */
    where?: TicketImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketImages to fetch.
     */
    orderBy?: TicketImageOrderByWithRelationInput | TicketImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketImages.
     */
    cursor?: TicketImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketImages.
     */
    distinct?: TicketImageScalarFieldEnum | TicketImageScalarFieldEnum[]
  }

  /**
   * TicketImage findFirstOrThrow
   */
  export type TicketImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketImage
     */
    select?: TicketImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketImage
     */
    omit?: TicketImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketImageInclude<ExtArgs> | null
    /**
     * Filter, which TicketImage to fetch.
     */
    where?: TicketImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketImages to fetch.
     */
    orderBy?: TicketImageOrderByWithRelationInput | TicketImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketImages.
     */
    cursor?: TicketImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketImages.
     */
    distinct?: TicketImageScalarFieldEnum | TicketImageScalarFieldEnum[]
  }

  /**
   * TicketImage findMany
   */
  export type TicketImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketImage
     */
    select?: TicketImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketImage
     */
    omit?: TicketImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketImageInclude<ExtArgs> | null
    /**
     * Filter, which TicketImages to fetch.
     */
    where?: TicketImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketImages to fetch.
     */
    orderBy?: TicketImageOrderByWithRelationInput | TicketImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketImages.
     */
    cursor?: TicketImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketImages.
     */
    skip?: number
    distinct?: TicketImageScalarFieldEnum | TicketImageScalarFieldEnum[]
  }

  /**
   * TicketImage create
   */
  export type TicketImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketImage
     */
    select?: TicketImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketImage
     */
    omit?: TicketImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketImageInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketImage.
     */
    data: XOR<TicketImageCreateInput, TicketImageUncheckedCreateInput>
  }

  /**
   * TicketImage createMany
   */
  export type TicketImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketImages.
     */
    data: TicketImageCreateManyInput | TicketImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketImage update
   */
  export type TicketImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketImage
     */
    select?: TicketImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketImage
     */
    omit?: TicketImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketImageInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketImage.
     */
    data: XOR<TicketImageUpdateInput, TicketImageUncheckedUpdateInput>
    /**
     * Choose, which TicketImage to update.
     */
    where: TicketImageWhereUniqueInput
  }

  /**
   * TicketImage updateMany
   */
  export type TicketImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketImages.
     */
    data: XOR<TicketImageUpdateManyMutationInput, TicketImageUncheckedUpdateManyInput>
    /**
     * Filter which TicketImages to update
     */
    where?: TicketImageWhereInput
    /**
     * Limit how many TicketImages to update.
     */
    limit?: number
  }

  /**
   * TicketImage upsert
   */
  export type TicketImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketImage
     */
    select?: TicketImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketImage
     */
    omit?: TicketImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketImageInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketImage to update in case it exists.
     */
    where: TicketImageWhereUniqueInput
    /**
     * In case the TicketImage found by the `where` argument doesn't exist, create a new TicketImage with this data.
     */
    create: XOR<TicketImageCreateInput, TicketImageUncheckedCreateInput>
    /**
     * In case the TicketImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketImageUpdateInput, TicketImageUncheckedUpdateInput>
  }

  /**
   * TicketImage delete
   */
  export type TicketImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketImage
     */
    select?: TicketImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketImage
     */
    omit?: TicketImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketImageInclude<ExtArgs> | null
    /**
     * Filter which TicketImage to delete.
     */
    where: TicketImageWhereUniqueInput
  }

  /**
   * TicketImage deleteMany
   */
  export type TicketImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketImages to delete
     */
    where?: TicketImageWhereInput
    /**
     * Limit how many TicketImages to delete.
     */
    limit?: number
  }

  /**
   * TicketImage.ticket
   */
  export type TicketImage$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
  }

  /**
   * TicketImage.ticketHistory
   */
  export type TicketImage$ticketHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryInclude<ExtArgs> | null
    where?: TicketHistoryWhereInput
  }

  /**
   * TicketImage without action
   */
  export type TicketImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketImage
     */
    select?: TicketImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketImage
     */
    omit?: TicketImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketImageInclude<ExtArgs> | null
  }


  /**
   * Model TicketHistory
   */

  export type AggregateTicketHistory = {
    _count: TicketHistoryCountAggregateOutputType | null
    _avg: TicketHistoryAvgAggregateOutputType | null
    _sum: TicketHistorySumAggregateOutputType | null
    _min: TicketHistoryMinAggregateOutputType | null
    _max: TicketHistoryMaxAggregateOutputType | null
  }

  export type TicketHistoryAvgAggregateOutputType = {
    id: number | null
    ticketId: number | null
    changedBy: number | null
  }

  export type TicketHistorySumAggregateOutputType = {
    id: number | null
    ticketId: number | null
    changedBy: number | null
  }

  export type TicketHistoryMinAggregateOutputType = {
    id: number | null
    ticketId: number | null
    status: $Enums.E_TicketStatus | null
    changedBy: number | null
    changedAt: Date | null
    observation: string | null
  }

  export type TicketHistoryMaxAggregateOutputType = {
    id: number | null
    ticketId: number | null
    status: $Enums.E_TicketStatus | null
    changedBy: number | null
    changedAt: Date | null
    observation: string | null
  }

  export type TicketHistoryCountAggregateOutputType = {
    id: number
    ticketId: number
    status: number
    changedBy: number
    changedAt: number
    observation: number
    _all: number
  }


  export type TicketHistoryAvgAggregateInputType = {
    id?: true
    ticketId?: true
    changedBy?: true
  }

  export type TicketHistorySumAggregateInputType = {
    id?: true
    ticketId?: true
    changedBy?: true
  }

  export type TicketHistoryMinAggregateInputType = {
    id?: true
    ticketId?: true
    status?: true
    changedBy?: true
    changedAt?: true
    observation?: true
  }

  export type TicketHistoryMaxAggregateInputType = {
    id?: true
    ticketId?: true
    status?: true
    changedBy?: true
    changedAt?: true
    observation?: true
  }

  export type TicketHistoryCountAggregateInputType = {
    id?: true
    ticketId?: true
    status?: true
    changedBy?: true
    changedAt?: true
    observation?: true
    _all?: true
  }

  export type TicketHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketHistory to aggregate.
     */
    where?: TicketHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketHistories to fetch.
     */
    orderBy?: TicketHistoryOrderByWithRelationInput | TicketHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketHistories
    **/
    _count?: true | TicketHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketHistoryMaxAggregateInputType
  }

  export type GetTicketHistoryAggregateType<T extends TicketHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketHistory[P]>
      : GetScalarType<T[P], AggregateTicketHistory[P]>
  }




  export type TicketHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketHistoryWhereInput
    orderBy?: TicketHistoryOrderByWithAggregationInput | TicketHistoryOrderByWithAggregationInput[]
    by: TicketHistoryScalarFieldEnum[] | TicketHistoryScalarFieldEnum
    having?: TicketHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketHistoryCountAggregateInputType | true
    _avg?: TicketHistoryAvgAggregateInputType
    _sum?: TicketHistorySumAggregateInputType
    _min?: TicketHistoryMinAggregateInputType
    _max?: TicketHistoryMaxAggregateInputType
  }

  export type TicketHistoryGroupByOutputType = {
    id: number
    ticketId: number
    status: $Enums.E_TicketStatus
    changedBy: number
    changedAt: Date
    observation: string
    _count: TicketHistoryCountAggregateOutputType | null
    _avg: TicketHistoryAvgAggregateOutputType | null
    _sum: TicketHistorySumAggregateOutputType | null
    _min: TicketHistoryMinAggregateOutputType | null
    _max: TicketHistoryMaxAggregateOutputType | null
  }

  type GetTicketHistoryGroupByPayload<T extends TicketHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TicketHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TicketHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    status?: boolean
    changedBy?: boolean
    changedAt?: boolean
    observation?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    ticketImages?: boolean | TicketHistory$ticketImagesArgs<ExtArgs>
    _count?: boolean | TicketHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketHistory"]>



  export type TicketHistorySelectScalar = {
    id?: boolean
    ticketId?: boolean
    status?: boolean
    changedBy?: boolean
    changedAt?: boolean
    observation?: boolean
  }

  export type TicketHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketId" | "status" | "changedBy" | "changedAt" | "observation", ExtArgs["result"]["ticketHistory"]>
  export type TicketHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    ticketImages?: boolean | TicketHistory$ticketImagesArgs<ExtArgs>
    _count?: boolean | TicketHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TicketHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketHistory"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      ticketImages: Prisma.$TicketImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ticketId: number
      status: $Enums.E_TicketStatus
      changedBy: number
      changedAt: Date
      observation: string
    }, ExtArgs["result"]["ticketHistory"]>
    composites: {}
  }

  type TicketHistoryGetPayload<S extends boolean | null | undefined | TicketHistoryDefaultArgs> = $Result.GetResult<Prisma.$TicketHistoryPayload, S>

  type TicketHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketHistoryCountAggregateInputType | true
    }

  export interface TicketHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketHistory'], meta: { name: 'TicketHistory' } }
    /**
     * Find zero or one TicketHistory that matches the filter.
     * @param {TicketHistoryFindUniqueArgs} args - Arguments to find a TicketHistory
     * @example
     * // Get one TicketHistory
     * const ticketHistory = await prisma.ticketHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketHistoryFindUniqueArgs>(args: SelectSubset<T, TicketHistoryFindUniqueArgs<ExtArgs>>): Prisma__TicketHistoryClient<$Result.GetResult<Prisma.$TicketHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketHistoryFindUniqueOrThrowArgs} args - Arguments to find a TicketHistory
     * @example
     * // Get one TicketHistory
     * const ticketHistory = await prisma.ticketHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketHistoryClient<$Result.GetResult<Prisma.$TicketHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketHistoryFindFirstArgs} args - Arguments to find a TicketHistory
     * @example
     * // Get one TicketHistory
     * const ticketHistory = await prisma.ticketHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketHistoryFindFirstArgs>(args?: SelectSubset<T, TicketHistoryFindFirstArgs<ExtArgs>>): Prisma__TicketHistoryClient<$Result.GetResult<Prisma.$TicketHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketHistoryFindFirstOrThrowArgs} args - Arguments to find a TicketHistory
     * @example
     * // Get one TicketHistory
     * const ticketHistory = await prisma.ticketHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketHistoryClient<$Result.GetResult<Prisma.$TicketHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketHistories
     * const ticketHistories = await prisma.ticketHistory.findMany()
     * 
     * // Get first 10 TicketHistories
     * const ticketHistories = await prisma.ticketHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketHistoryWithIdOnly = await prisma.ticketHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketHistoryFindManyArgs>(args?: SelectSubset<T, TicketHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketHistory.
     * @param {TicketHistoryCreateArgs} args - Arguments to create a TicketHistory.
     * @example
     * // Create one TicketHistory
     * const TicketHistory = await prisma.ticketHistory.create({
     *   data: {
     *     // ... data to create a TicketHistory
     *   }
     * })
     * 
     */
    create<T extends TicketHistoryCreateArgs>(args: SelectSubset<T, TicketHistoryCreateArgs<ExtArgs>>): Prisma__TicketHistoryClient<$Result.GetResult<Prisma.$TicketHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketHistories.
     * @param {TicketHistoryCreateManyArgs} args - Arguments to create many TicketHistories.
     * @example
     * // Create many TicketHistories
     * const ticketHistory = await prisma.ticketHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketHistoryCreateManyArgs>(args?: SelectSubset<T, TicketHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TicketHistory.
     * @param {TicketHistoryDeleteArgs} args - Arguments to delete one TicketHistory.
     * @example
     * // Delete one TicketHistory
     * const TicketHistory = await prisma.ticketHistory.delete({
     *   where: {
     *     // ... filter to delete one TicketHistory
     *   }
     * })
     * 
     */
    delete<T extends TicketHistoryDeleteArgs>(args: SelectSubset<T, TicketHistoryDeleteArgs<ExtArgs>>): Prisma__TicketHistoryClient<$Result.GetResult<Prisma.$TicketHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketHistory.
     * @param {TicketHistoryUpdateArgs} args - Arguments to update one TicketHistory.
     * @example
     * // Update one TicketHistory
     * const ticketHistory = await prisma.ticketHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketHistoryUpdateArgs>(args: SelectSubset<T, TicketHistoryUpdateArgs<ExtArgs>>): Prisma__TicketHistoryClient<$Result.GetResult<Prisma.$TicketHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketHistories.
     * @param {TicketHistoryDeleteManyArgs} args - Arguments to filter TicketHistories to delete.
     * @example
     * // Delete a few TicketHistories
     * const { count } = await prisma.ticketHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketHistoryDeleteManyArgs>(args?: SelectSubset<T, TicketHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketHistories
     * const ticketHistory = await prisma.ticketHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketHistoryUpdateManyArgs>(args: SelectSubset<T, TicketHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TicketHistory.
     * @param {TicketHistoryUpsertArgs} args - Arguments to update or create a TicketHistory.
     * @example
     * // Update or create a TicketHistory
     * const ticketHistory = await prisma.ticketHistory.upsert({
     *   create: {
     *     // ... data to create a TicketHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketHistory we want to update
     *   }
     * })
     */
    upsert<T extends TicketHistoryUpsertArgs>(args: SelectSubset<T, TicketHistoryUpsertArgs<ExtArgs>>): Prisma__TicketHistoryClient<$Result.GetResult<Prisma.$TicketHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketHistoryCountArgs} args - Arguments to filter TicketHistories to count.
     * @example
     * // Count the number of TicketHistories
     * const count = await prisma.ticketHistory.count({
     *   where: {
     *     // ... the filter for the TicketHistories we want to count
     *   }
     * })
    **/
    count<T extends TicketHistoryCountArgs>(
      args?: Subset<T, TicketHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketHistoryAggregateArgs>(args: Subset<T, TicketHistoryAggregateArgs>): Prisma.PrismaPromise<GetTicketHistoryAggregateType<T>>

    /**
     * Group by TicketHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TicketHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketHistory model
   */
  readonly fields: TicketHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticketImages<T extends TicketHistory$ticketImagesArgs<ExtArgs> = {}>(args?: Subset<T, TicketHistory$ticketImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TicketHistory model
   */
  interface TicketHistoryFieldRefs {
    readonly id: FieldRef<"TicketHistory", 'Int'>
    readonly ticketId: FieldRef<"TicketHistory", 'Int'>
    readonly status: FieldRef<"TicketHistory", 'E_TicketStatus'>
    readonly changedBy: FieldRef<"TicketHistory", 'Int'>
    readonly changedAt: FieldRef<"TicketHistory", 'DateTime'>
    readonly observation: FieldRef<"TicketHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TicketHistory findUnique
   */
  export type TicketHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketHistory to fetch.
     */
    where: TicketHistoryWhereUniqueInput
  }

  /**
   * TicketHistory findUniqueOrThrow
   */
  export type TicketHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketHistory to fetch.
     */
    where: TicketHistoryWhereUniqueInput
  }

  /**
   * TicketHistory findFirst
   */
  export type TicketHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketHistory to fetch.
     */
    where?: TicketHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketHistories to fetch.
     */
    orderBy?: TicketHistoryOrderByWithRelationInput | TicketHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketHistories.
     */
    cursor?: TicketHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketHistories.
     */
    distinct?: TicketHistoryScalarFieldEnum | TicketHistoryScalarFieldEnum[]
  }

  /**
   * TicketHistory findFirstOrThrow
   */
  export type TicketHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketHistory to fetch.
     */
    where?: TicketHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketHistories to fetch.
     */
    orderBy?: TicketHistoryOrderByWithRelationInput | TicketHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketHistories.
     */
    cursor?: TicketHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketHistories.
     */
    distinct?: TicketHistoryScalarFieldEnum | TicketHistoryScalarFieldEnum[]
  }

  /**
   * TicketHistory findMany
   */
  export type TicketHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TicketHistories to fetch.
     */
    where?: TicketHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketHistories to fetch.
     */
    orderBy?: TicketHistoryOrderByWithRelationInput | TicketHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketHistories.
     */
    cursor?: TicketHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketHistories.
     */
    skip?: number
    distinct?: TicketHistoryScalarFieldEnum | TicketHistoryScalarFieldEnum[]
  }

  /**
   * TicketHistory create
   */
  export type TicketHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketHistory.
     */
    data: XOR<TicketHistoryCreateInput, TicketHistoryUncheckedCreateInput>
  }

  /**
   * TicketHistory createMany
   */
  export type TicketHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketHistories.
     */
    data: TicketHistoryCreateManyInput | TicketHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketHistory update
   */
  export type TicketHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketHistory.
     */
    data: XOR<TicketHistoryUpdateInput, TicketHistoryUncheckedUpdateInput>
    /**
     * Choose, which TicketHistory to update.
     */
    where: TicketHistoryWhereUniqueInput
  }

  /**
   * TicketHistory updateMany
   */
  export type TicketHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketHistories.
     */
    data: XOR<TicketHistoryUpdateManyMutationInput, TicketHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TicketHistories to update
     */
    where?: TicketHistoryWhereInput
    /**
     * Limit how many TicketHistories to update.
     */
    limit?: number
  }

  /**
   * TicketHistory upsert
   */
  export type TicketHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketHistory to update in case it exists.
     */
    where: TicketHistoryWhereUniqueInput
    /**
     * In case the TicketHistory found by the `where` argument doesn't exist, create a new TicketHistory with this data.
     */
    create: XOR<TicketHistoryCreateInput, TicketHistoryUncheckedCreateInput>
    /**
     * In case the TicketHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketHistoryUpdateInput, TicketHistoryUncheckedUpdateInput>
  }

  /**
   * TicketHistory delete
   */
  export type TicketHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryInclude<ExtArgs> | null
    /**
     * Filter which TicketHistory to delete.
     */
    where: TicketHistoryWhereUniqueInput
  }

  /**
   * TicketHistory deleteMany
   */
  export type TicketHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketHistories to delete
     */
    where?: TicketHistoryWhereInput
    /**
     * Limit how many TicketHistories to delete.
     */
    limit?: number
  }

  /**
   * TicketHistory.ticketImages
   */
  export type TicketHistory$ticketImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketImage
     */
    select?: TicketImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketImage
     */
    omit?: TicketImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketImageInclude<ExtArgs> | null
    where?: TicketImageWhereInput
    orderBy?: TicketImageOrderByWithRelationInput | TicketImageOrderByWithRelationInput[]
    cursor?: TicketImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketImageScalarFieldEnum | TicketImageScalarFieldEnum[]
  }

  /**
   * TicketHistory without action
   */
  export type TicketHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketHistory
     */
    select?: TicketHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketHistory
     */
    omit?: TicketHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    ticketId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
    ticketId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    message: string | null
    isRead: boolean | null
    ticketId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    message: string | null
    isRead: boolean | null
    ticketId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    message: number
    isRead: number
    ticketId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
    ticketId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
    ticketId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    isRead?: true
    ticketId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    isRead?: true
    ticketId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    message?: true
    isRead?: true
    ticketId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    userId: number
    message: string
    isRead: boolean
    ticketId: number | null
    createdAt: Date
    updatedAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    message?: boolean
    isRead?: boolean
    ticketId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    ticket?: boolean | Notification$ticketArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>



  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    message?: boolean
    isRead?: boolean
    ticketId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "message" | "isRead" | "ticketId" | "createdAt" | "updatedAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    ticket?: boolean | Notification$ticketArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      ticket: Prisma.$TicketPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      message: string
      isRead: boolean
      ticketId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticket<T extends Notification$ticketArgs<ExtArgs> = {}>(args?: Subset<T, Notification$ticketArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly userId: FieldRef<"Notification", 'Int'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
    readonly ticketId: FieldRef<"Notification", 'Int'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.ticket
   */
  export type Notification$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model TicketValoration
   */

  export type AggregateTicketValoration = {
    _count: TicketValorationCountAggregateOutputType | null
    _avg: TicketValorationAvgAggregateOutputType | null
    _sum: TicketValorationSumAggregateOutputType | null
    _min: TicketValorationMinAggregateOutputType | null
    _max: TicketValorationMaxAggregateOutputType | null
  }

  export type TicketValorationAvgAggregateOutputType = {
    id: number | null
    ticketId: number | null
    rating: number | null
  }

  export type TicketValorationSumAggregateOutputType = {
    id: number | null
    ticketId: number | null
    rating: number | null
  }

  export type TicketValorationMinAggregateOutputType = {
    id: number | null
    ticketId: number | null
    rating: number | null
    comments: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketValorationMaxAggregateOutputType = {
    id: number | null
    ticketId: number | null
    rating: number | null
    comments: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketValorationCountAggregateOutputType = {
    id: number
    ticketId: number
    rating: number
    comments: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketValorationAvgAggregateInputType = {
    id?: true
    ticketId?: true
    rating?: true
  }

  export type TicketValorationSumAggregateInputType = {
    id?: true
    ticketId?: true
    rating?: true
  }

  export type TicketValorationMinAggregateInputType = {
    id?: true
    ticketId?: true
    rating?: true
    comments?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketValorationMaxAggregateInputType = {
    id?: true
    ticketId?: true
    rating?: true
    comments?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketValorationCountAggregateInputType = {
    id?: true
    ticketId?: true
    rating?: true
    comments?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketValorationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketValoration to aggregate.
     */
    where?: TicketValorationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketValorations to fetch.
     */
    orderBy?: TicketValorationOrderByWithRelationInput | TicketValorationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketValorationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketValorations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketValorations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketValorations
    **/
    _count?: true | TicketValorationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketValorationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketValorationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketValorationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketValorationMaxAggregateInputType
  }

  export type GetTicketValorationAggregateType<T extends TicketValorationAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketValoration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketValoration[P]>
      : GetScalarType<T[P], AggregateTicketValoration[P]>
  }




  export type TicketValorationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketValorationWhereInput
    orderBy?: TicketValorationOrderByWithAggregationInput | TicketValorationOrderByWithAggregationInput[]
    by: TicketValorationScalarFieldEnum[] | TicketValorationScalarFieldEnum
    having?: TicketValorationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketValorationCountAggregateInputType | true
    _avg?: TicketValorationAvgAggregateInputType
    _sum?: TicketValorationSumAggregateInputType
    _min?: TicketValorationMinAggregateInputType
    _max?: TicketValorationMaxAggregateInputType
  }

  export type TicketValorationGroupByOutputType = {
    id: number
    ticketId: number
    rating: number
    comments: string | null
    createdAt: Date
    updatedAt: Date
    _count: TicketValorationCountAggregateOutputType | null
    _avg: TicketValorationAvgAggregateOutputType | null
    _sum: TicketValorationSumAggregateOutputType | null
    _min: TicketValorationMinAggregateOutputType | null
    _max: TicketValorationMaxAggregateOutputType | null
  }

  type GetTicketValorationGroupByPayload<T extends TicketValorationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketValorationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketValorationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketValorationGroupByOutputType[P]>
            : GetScalarType<T[P], TicketValorationGroupByOutputType[P]>
        }
      >
    >


  export type TicketValorationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    rating?: boolean
    comments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketValoration"]>



  export type TicketValorationSelectScalar = {
    id?: boolean
    ticketId?: boolean
    rating?: boolean
    comments?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketValorationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketId" | "rating" | "comments" | "createdAt" | "updatedAt", ExtArgs["result"]["ticketValoration"]>
  export type TicketValorationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }

  export type $TicketValorationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketValoration"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ticketId: number
      rating: number
      comments: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticketValoration"]>
    composites: {}
  }

  type TicketValorationGetPayload<S extends boolean | null | undefined | TicketValorationDefaultArgs> = $Result.GetResult<Prisma.$TicketValorationPayload, S>

  type TicketValorationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketValorationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketValorationCountAggregateInputType | true
    }

  export interface TicketValorationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketValoration'], meta: { name: 'TicketValoration' } }
    /**
     * Find zero or one TicketValoration that matches the filter.
     * @param {TicketValorationFindUniqueArgs} args - Arguments to find a TicketValoration
     * @example
     * // Get one TicketValoration
     * const ticketValoration = await prisma.ticketValoration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketValorationFindUniqueArgs>(args: SelectSubset<T, TicketValorationFindUniqueArgs<ExtArgs>>): Prisma__TicketValorationClient<$Result.GetResult<Prisma.$TicketValorationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketValoration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketValorationFindUniqueOrThrowArgs} args - Arguments to find a TicketValoration
     * @example
     * // Get one TicketValoration
     * const ticketValoration = await prisma.ticketValoration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketValorationFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketValorationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketValorationClient<$Result.GetResult<Prisma.$TicketValorationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketValoration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketValorationFindFirstArgs} args - Arguments to find a TicketValoration
     * @example
     * // Get one TicketValoration
     * const ticketValoration = await prisma.ticketValoration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketValorationFindFirstArgs>(args?: SelectSubset<T, TicketValorationFindFirstArgs<ExtArgs>>): Prisma__TicketValorationClient<$Result.GetResult<Prisma.$TicketValorationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketValoration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketValorationFindFirstOrThrowArgs} args - Arguments to find a TicketValoration
     * @example
     * // Get one TicketValoration
     * const ticketValoration = await prisma.ticketValoration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketValorationFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketValorationFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketValorationClient<$Result.GetResult<Prisma.$TicketValorationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketValorations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketValorationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketValorations
     * const ticketValorations = await prisma.ticketValoration.findMany()
     * 
     * // Get first 10 TicketValorations
     * const ticketValorations = await prisma.ticketValoration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketValorationWithIdOnly = await prisma.ticketValoration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketValorationFindManyArgs>(args?: SelectSubset<T, TicketValorationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketValorationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketValoration.
     * @param {TicketValorationCreateArgs} args - Arguments to create a TicketValoration.
     * @example
     * // Create one TicketValoration
     * const TicketValoration = await prisma.ticketValoration.create({
     *   data: {
     *     // ... data to create a TicketValoration
     *   }
     * })
     * 
     */
    create<T extends TicketValorationCreateArgs>(args: SelectSubset<T, TicketValorationCreateArgs<ExtArgs>>): Prisma__TicketValorationClient<$Result.GetResult<Prisma.$TicketValorationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketValorations.
     * @param {TicketValorationCreateManyArgs} args - Arguments to create many TicketValorations.
     * @example
     * // Create many TicketValorations
     * const ticketValoration = await prisma.ticketValoration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketValorationCreateManyArgs>(args?: SelectSubset<T, TicketValorationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TicketValoration.
     * @param {TicketValorationDeleteArgs} args - Arguments to delete one TicketValoration.
     * @example
     * // Delete one TicketValoration
     * const TicketValoration = await prisma.ticketValoration.delete({
     *   where: {
     *     // ... filter to delete one TicketValoration
     *   }
     * })
     * 
     */
    delete<T extends TicketValorationDeleteArgs>(args: SelectSubset<T, TicketValorationDeleteArgs<ExtArgs>>): Prisma__TicketValorationClient<$Result.GetResult<Prisma.$TicketValorationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketValoration.
     * @param {TicketValorationUpdateArgs} args - Arguments to update one TicketValoration.
     * @example
     * // Update one TicketValoration
     * const ticketValoration = await prisma.ticketValoration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketValorationUpdateArgs>(args: SelectSubset<T, TicketValorationUpdateArgs<ExtArgs>>): Prisma__TicketValorationClient<$Result.GetResult<Prisma.$TicketValorationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketValorations.
     * @param {TicketValorationDeleteManyArgs} args - Arguments to filter TicketValorations to delete.
     * @example
     * // Delete a few TicketValorations
     * const { count } = await prisma.ticketValoration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketValorationDeleteManyArgs>(args?: SelectSubset<T, TicketValorationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketValorations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketValorationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketValorations
     * const ticketValoration = await prisma.ticketValoration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketValorationUpdateManyArgs>(args: SelectSubset<T, TicketValorationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TicketValoration.
     * @param {TicketValorationUpsertArgs} args - Arguments to update or create a TicketValoration.
     * @example
     * // Update or create a TicketValoration
     * const ticketValoration = await prisma.ticketValoration.upsert({
     *   create: {
     *     // ... data to create a TicketValoration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketValoration we want to update
     *   }
     * })
     */
    upsert<T extends TicketValorationUpsertArgs>(args: SelectSubset<T, TicketValorationUpsertArgs<ExtArgs>>): Prisma__TicketValorationClient<$Result.GetResult<Prisma.$TicketValorationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TicketValorations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketValorationCountArgs} args - Arguments to filter TicketValorations to count.
     * @example
     * // Count the number of TicketValorations
     * const count = await prisma.ticketValoration.count({
     *   where: {
     *     // ... the filter for the TicketValorations we want to count
     *   }
     * })
    **/
    count<T extends TicketValorationCountArgs>(
      args?: Subset<T, TicketValorationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketValorationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketValoration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketValorationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketValorationAggregateArgs>(args: Subset<T, TicketValorationAggregateArgs>): Prisma.PrismaPromise<GetTicketValorationAggregateType<T>>

    /**
     * Group by TicketValoration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketValorationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketValorationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketValorationGroupByArgs['orderBy'] }
        : { orderBy?: TicketValorationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketValorationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketValorationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketValoration model
   */
  readonly fields: TicketValorationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketValoration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketValorationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TicketValoration model
   */
  interface TicketValorationFieldRefs {
    readonly id: FieldRef<"TicketValoration", 'Int'>
    readonly ticketId: FieldRef<"TicketValoration", 'Int'>
    readonly rating: FieldRef<"TicketValoration", 'Int'>
    readonly comments: FieldRef<"TicketValoration", 'String'>
    readonly createdAt: FieldRef<"TicketValoration", 'DateTime'>
    readonly updatedAt: FieldRef<"TicketValoration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketValoration findUnique
   */
  export type TicketValorationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketValoration
     */
    select?: TicketValorationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketValoration
     */
    omit?: TicketValorationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketValorationInclude<ExtArgs> | null
    /**
     * Filter, which TicketValoration to fetch.
     */
    where: TicketValorationWhereUniqueInput
  }

  /**
   * TicketValoration findUniqueOrThrow
   */
  export type TicketValorationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketValoration
     */
    select?: TicketValorationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketValoration
     */
    omit?: TicketValorationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketValorationInclude<ExtArgs> | null
    /**
     * Filter, which TicketValoration to fetch.
     */
    where: TicketValorationWhereUniqueInput
  }

  /**
   * TicketValoration findFirst
   */
  export type TicketValorationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketValoration
     */
    select?: TicketValorationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketValoration
     */
    omit?: TicketValorationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketValorationInclude<ExtArgs> | null
    /**
     * Filter, which TicketValoration to fetch.
     */
    where?: TicketValorationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketValorations to fetch.
     */
    orderBy?: TicketValorationOrderByWithRelationInput | TicketValorationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketValorations.
     */
    cursor?: TicketValorationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketValorations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketValorations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketValorations.
     */
    distinct?: TicketValorationScalarFieldEnum | TicketValorationScalarFieldEnum[]
  }

  /**
   * TicketValoration findFirstOrThrow
   */
  export type TicketValorationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketValoration
     */
    select?: TicketValorationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketValoration
     */
    omit?: TicketValorationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketValorationInclude<ExtArgs> | null
    /**
     * Filter, which TicketValoration to fetch.
     */
    where?: TicketValorationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketValorations to fetch.
     */
    orderBy?: TicketValorationOrderByWithRelationInput | TicketValorationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketValorations.
     */
    cursor?: TicketValorationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketValorations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketValorations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketValorations.
     */
    distinct?: TicketValorationScalarFieldEnum | TicketValorationScalarFieldEnum[]
  }

  /**
   * TicketValoration findMany
   */
  export type TicketValorationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketValoration
     */
    select?: TicketValorationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketValoration
     */
    omit?: TicketValorationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketValorationInclude<ExtArgs> | null
    /**
     * Filter, which TicketValorations to fetch.
     */
    where?: TicketValorationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketValorations to fetch.
     */
    orderBy?: TicketValorationOrderByWithRelationInput | TicketValorationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketValorations.
     */
    cursor?: TicketValorationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketValorations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketValorations.
     */
    skip?: number
    distinct?: TicketValorationScalarFieldEnum | TicketValorationScalarFieldEnum[]
  }

  /**
   * TicketValoration create
   */
  export type TicketValorationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketValoration
     */
    select?: TicketValorationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketValoration
     */
    omit?: TicketValorationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketValorationInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketValoration.
     */
    data: XOR<TicketValorationCreateInput, TicketValorationUncheckedCreateInput>
  }

  /**
   * TicketValoration createMany
   */
  export type TicketValorationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketValorations.
     */
    data: TicketValorationCreateManyInput | TicketValorationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TicketValoration update
   */
  export type TicketValorationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketValoration
     */
    select?: TicketValorationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketValoration
     */
    omit?: TicketValorationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketValorationInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketValoration.
     */
    data: XOR<TicketValorationUpdateInput, TicketValorationUncheckedUpdateInput>
    /**
     * Choose, which TicketValoration to update.
     */
    where: TicketValorationWhereUniqueInput
  }

  /**
   * TicketValoration updateMany
   */
  export type TicketValorationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketValorations.
     */
    data: XOR<TicketValorationUpdateManyMutationInput, TicketValorationUncheckedUpdateManyInput>
    /**
     * Filter which TicketValorations to update
     */
    where?: TicketValorationWhereInput
    /**
     * Limit how many TicketValorations to update.
     */
    limit?: number
  }

  /**
   * TicketValoration upsert
   */
  export type TicketValorationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketValoration
     */
    select?: TicketValorationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketValoration
     */
    omit?: TicketValorationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketValorationInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketValoration to update in case it exists.
     */
    where: TicketValorationWhereUniqueInput
    /**
     * In case the TicketValoration found by the `where` argument doesn't exist, create a new TicketValoration with this data.
     */
    create: XOR<TicketValorationCreateInput, TicketValorationUncheckedCreateInput>
    /**
     * In case the TicketValoration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketValorationUpdateInput, TicketValorationUncheckedUpdateInput>
  }

  /**
   * TicketValoration delete
   */
  export type TicketValorationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketValoration
     */
    select?: TicketValorationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketValoration
     */
    omit?: TicketValorationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketValorationInclude<ExtArgs> | null
    /**
     * Filter which TicketValoration to delete.
     */
    where: TicketValorationWhereUniqueInput
  }

  /**
   * TicketValoration deleteMany
   */
  export type TicketValorationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketValorations to delete
     */
    where?: TicketValorationWhereInput
    /**
     * Limit how many TicketValorations to delete.
     */
    limit?: number
  }

  /**
   * TicketValoration without action
   */
  export type TicketValorationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketValoration
     */
    select?: TicketValorationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketValoration
     */
    omit?: TicketValorationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketValorationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    profileImage: 'profileImage',
    genre: 'genre',
    dob: 'dob',
    cellphone: 'cellphone',
    role: 'role',
    status: 'status',
    lastLogin: 'lastLogin',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserTechnicianScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    status: 'status',
    workload: 'workload',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserTechnicianScalarFieldEnum = (typeof UserTechnicianScalarFieldEnum)[keyof typeof UserTechnicianScalarFieldEnum]


  export const SpecialityAreaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SpecialityAreaScalarFieldEnum = (typeof SpecialityAreaScalarFieldEnum)[keyof typeof SpecialityAreaScalarFieldEnum]


  export const CategoryEtiquetteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryEtiquetteScalarFieldEnum = (typeof CategoryEtiquetteScalarFieldEnum)[keyof typeof CategoryEtiquetteScalarFieldEnum]


  export const SLAScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    slaReplyHours: 'slaReplyHours',
    slaResolutionHours: 'slaResolutionHours',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SLAScalarFieldEnum = (typeof SLAScalarFieldEnum)[keyof typeof SLAScalarFieldEnum]


  export const TicketCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    slaId: 'slaId',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketCategoryScalarFieldEnum = (typeof TicketCategoryScalarFieldEnum)[keyof typeof TicketCategoryScalarFieldEnum]


  export const AutoTriageRuleScalarFieldEnum: {
    id: 'id',
    timeRemainingSLA: 'timeRemainingSLA',
    ticketPriority: 'ticketPriority',
    technicianSpecialityId: 'technicianSpecialityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AutoTriageRuleScalarFieldEnum = (typeof AutoTriageRuleScalarFieldEnum)[keyof typeof AutoTriageRuleScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    technicianId: 'technicianId',
    ticketCategoryId: 'ticketCategoryId',
    title: 'title',
    description: 'description',
    status: 'status',
    priority: 'priority',
    storyPoints: 'storyPoints',
    aceptanceCriteria: 'aceptanceCriteria',
    comments: 'comments',
    resolutionDays: 'resolutionDays',
    slaReply: 'slaReply',
    slaResolution: 'slaResolution',
    replyAchieved: 'replyAchieved',
    resolutionAchieved: 'resolutionAchieved',
    ticketValorationId: 'ticketValorationId',
    closedAt: 'closedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    assignedAt: 'assignedAt',
    assignedMethod: 'assignedMethod',
    automaticTriageRuleId: 'automaticTriageRuleId'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const TicketImageScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    ticketHistoryId: 'ticketHistoryId',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketImageScalarFieldEnum = (typeof TicketImageScalarFieldEnum)[keyof typeof TicketImageScalarFieldEnum]


  export const TicketHistoryScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    status: 'status',
    changedBy: 'changedBy',
    changedAt: 'changedAt',
    observation: 'observation'
  };

  export type TicketHistoryScalarFieldEnum = (typeof TicketHistoryScalarFieldEnum)[keyof typeof TicketHistoryScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    message: 'message',
    isRead: 'isRead',
    ticketId: 'ticketId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const TicketValorationScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    rating: 'rating',
    comments: 'comments',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketValorationScalarFieldEnum = (typeof TicketValorationScalarFieldEnum)[keyof typeof TicketValorationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    name: 'name',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    profileImage: 'profileImage',
    genre: 'genre',
    cellphone: 'cellphone'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const SpecialityAreaOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type SpecialityAreaOrderByRelevanceFieldEnum = (typeof SpecialityAreaOrderByRelevanceFieldEnum)[keyof typeof SpecialityAreaOrderByRelevanceFieldEnum]


  export const CategoryEtiquetteOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type CategoryEtiquetteOrderByRelevanceFieldEnum = (typeof CategoryEtiquetteOrderByRelevanceFieldEnum)[keyof typeof CategoryEtiquetteOrderByRelevanceFieldEnum]


  export const SLAOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description'
  };

  export type SLAOrderByRelevanceFieldEnum = (typeof SLAOrderByRelevanceFieldEnum)[keyof typeof SLAOrderByRelevanceFieldEnum]


  export const TicketCategoryOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    imageUrl: 'imageUrl'
  };

  export type TicketCategoryOrderByRelevanceFieldEnum = (typeof TicketCategoryOrderByRelevanceFieldEnum)[keyof typeof TicketCategoryOrderByRelevanceFieldEnum]


  export const TicketOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    aceptanceCriteria: 'aceptanceCriteria',
    comments: 'comments'
  };

  export type TicketOrderByRelevanceFieldEnum = (typeof TicketOrderByRelevanceFieldEnum)[keyof typeof TicketOrderByRelevanceFieldEnum]


  export const TicketImageOrderByRelevanceFieldEnum: {
    imageUrl: 'imageUrl'
  };

  export type TicketImageOrderByRelevanceFieldEnum = (typeof TicketImageOrderByRelevanceFieldEnum)[keyof typeof TicketImageOrderByRelevanceFieldEnum]


  export const TicketHistoryOrderByRelevanceFieldEnum: {
    observation: 'observation'
  };

  export type TicketHistoryOrderByRelevanceFieldEnum = (typeof TicketHistoryOrderByRelevanceFieldEnum)[keyof typeof TicketHistoryOrderByRelevanceFieldEnum]


  export const NotificationOrderByRelevanceFieldEnum: {
    message: 'message'
  };

  export type NotificationOrderByRelevanceFieldEnum = (typeof NotificationOrderByRelevanceFieldEnum)[keyof typeof NotificationOrderByRelevanceFieldEnum]


  export const TicketValorationOrderByRelevanceFieldEnum: {
    comments: 'comments'
  };

  export type TicketValorationOrderByRelevanceFieldEnum = (typeof TicketValorationOrderByRelevanceFieldEnum)[keyof typeof TicketValorationOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'E_Role'
   */
  export type EnumE_RoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'E_Role'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'E_TechnicianStatus'
   */
  export type EnumE_TechnicianStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'E_TechnicianStatus'>
    


  /**
   * Reference to a field of type 'E_TicketPriority'
   */
  export type EnumE_TicketPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'E_TicketPriority'>
    


  /**
   * Reference to a field of type 'E_TicketStatus'
   */
  export type EnumE_TicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'E_TicketStatus'>
    


  /**
   * Reference to a field of type 'E_AssignedMethod'
   */
  export type EnumE_AssignedMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'E_AssignedMethod'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profileImage?: StringNullableFilter<"User"> | string | null
    genre?: StringNullableFilter<"User"> | string | null
    dob?: DateTimeNullableFilter<"User"> | Date | string | null
    cellphone?: StringNullableFilter<"User"> | string | null
    role?: EnumE_RoleFilter<"User"> | $Enums.E_Role
    status?: BoolFilter<"User"> | boolean
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userTechnician?: XOR<UserTechnicianNullableScalarRelationFilter, UserTechnicianWhereInput> | null
    tickets?: TicketListRelationFilter
    ticketHistory?: TicketHistoryListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    cellphone?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userTechnician?: UserTechnicianOrderByWithRelationInput
    tickets?: TicketOrderByRelationAggregateInput
    ticketHistory?: TicketHistoryOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profileImage?: StringNullableFilter<"User"> | string | null
    genre?: StringNullableFilter<"User"> | string | null
    dob?: DateTimeNullableFilter<"User"> | Date | string | null
    cellphone?: StringNullableFilter<"User"> | string | null
    role?: EnumE_RoleFilter<"User"> | $Enums.E_Role
    status?: BoolFilter<"User"> | boolean
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userTechnician?: XOR<UserTechnicianNullableScalarRelationFilter, UserTechnicianWhereInput> | null
    tickets?: TicketListRelationFilter
    ticketHistory?: TicketHistoryListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImage?: SortOrderInput | SortOrder
    genre?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    cellphone?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    profileImage?: StringNullableWithAggregatesFilter<"User"> | string | null
    genre?: StringNullableWithAggregatesFilter<"User"> | string | null
    dob?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    cellphone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumE_RoleWithAggregatesFilter<"User"> | $Enums.E_Role
    status?: BoolWithAggregatesFilter<"User"> | boolean
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserTechnicianWhereInput = {
    AND?: UserTechnicianWhereInput | UserTechnicianWhereInput[]
    OR?: UserTechnicianWhereInput[]
    NOT?: UserTechnicianWhereInput | UserTechnicianWhereInput[]
    id?: IntFilter<"UserTechnician"> | number
    userId?: IntFilter<"UserTechnician"> | number
    status?: EnumE_TechnicianStatusFilter<"UserTechnician"> | $Enums.E_TechnicianStatus
    workload?: IntFilter<"UserTechnician"> | number
    createdAt?: DateTimeFilter<"UserTechnician"> | Date | string
    updatedAt?: DateTimeFilter<"UserTechnician"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    specialities?: SpecialityAreaListRelationFilter
    tickets?: TicketListRelationFilter
  }

  export type UserTechnicianOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    workload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    specialities?: SpecialityAreaOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
  }

  export type UserTechnicianWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: UserTechnicianWhereInput | UserTechnicianWhereInput[]
    OR?: UserTechnicianWhereInput[]
    NOT?: UserTechnicianWhereInput | UserTechnicianWhereInput[]
    status?: EnumE_TechnicianStatusFilter<"UserTechnician"> | $Enums.E_TechnicianStatus
    workload?: IntFilter<"UserTechnician"> | number
    createdAt?: DateTimeFilter<"UserTechnician"> | Date | string
    updatedAt?: DateTimeFilter<"UserTechnician"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    specialities?: SpecialityAreaListRelationFilter
    tickets?: TicketListRelationFilter
  }, "id" | "userId">

  export type UserTechnicianOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    workload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserTechnicianCountOrderByAggregateInput
    _avg?: UserTechnicianAvgOrderByAggregateInput
    _max?: UserTechnicianMaxOrderByAggregateInput
    _min?: UserTechnicianMinOrderByAggregateInput
    _sum?: UserTechnicianSumOrderByAggregateInput
  }

  export type UserTechnicianScalarWhereWithAggregatesInput = {
    AND?: UserTechnicianScalarWhereWithAggregatesInput | UserTechnicianScalarWhereWithAggregatesInput[]
    OR?: UserTechnicianScalarWhereWithAggregatesInput[]
    NOT?: UserTechnicianScalarWhereWithAggregatesInput | UserTechnicianScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserTechnician"> | number
    userId?: IntWithAggregatesFilter<"UserTechnician"> | number
    status?: EnumE_TechnicianStatusWithAggregatesFilter<"UserTechnician"> | $Enums.E_TechnicianStatus
    workload?: IntWithAggregatesFilter<"UserTechnician"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserTechnician"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserTechnician"> | Date | string
  }

  export type SpecialityAreaWhereInput = {
    AND?: SpecialityAreaWhereInput | SpecialityAreaWhereInput[]
    OR?: SpecialityAreaWhereInput[]
    NOT?: SpecialityAreaWhereInput | SpecialityAreaWhereInput[]
    id?: IntFilter<"SpecialityArea"> | number
    name?: StringFilter<"SpecialityArea"> | string
    description?: StringNullableFilter<"SpecialityArea"> | string | null
    createdAt?: DateTimeFilter<"SpecialityArea"> | Date | string
    updatedAt?: DateTimeFilter<"SpecialityArea"> | Date | string
    technicians?: UserTechnicianListRelationFilter
    ticketCategories?: TicketCategoryListRelationFilter
  }

  export type SpecialityAreaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    technicians?: UserTechnicianOrderByRelationAggregateInput
    ticketCategories?: TicketCategoryOrderByRelationAggregateInput
    _relevance?: SpecialityAreaOrderByRelevanceInput
  }

  export type SpecialityAreaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SpecialityAreaWhereInput | SpecialityAreaWhereInput[]
    OR?: SpecialityAreaWhereInput[]
    NOT?: SpecialityAreaWhereInput | SpecialityAreaWhereInput[]
    description?: StringNullableFilter<"SpecialityArea"> | string | null
    createdAt?: DateTimeFilter<"SpecialityArea"> | Date | string
    updatedAt?: DateTimeFilter<"SpecialityArea"> | Date | string
    technicians?: UserTechnicianListRelationFilter
    ticketCategories?: TicketCategoryListRelationFilter
  }, "id" | "name">

  export type SpecialityAreaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SpecialityAreaCountOrderByAggregateInput
    _avg?: SpecialityAreaAvgOrderByAggregateInput
    _max?: SpecialityAreaMaxOrderByAggregateInput
    _min?: SpecialityAreaMinOrderByAggregateInput
    _sum?: SpecialityAreaSumOrderByAggregateInput
  }

  export type SpecialityAreaScalarWhereWithAggregatesInput = {
    AND?: SpecialityAreaScalarWhereWithAggregatesInput | SpecialityAreaScalarWhereWithAggregatesInput[]
    OR?: SpecialityAreaScalarWhereWithAggregatesInput[]
    NOT?: SpecialityAreaScalarWhereWithAggregatesInput | SpecialityAreaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SpecialityArea"> | number
    name?: StringWithAggregatesFilter<"SpecialityArea"> | string
    description?: StringNullableWithAggregatesFilter<"SpecialityArea"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SpecialityArea"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SpecialityArea"> | Date | string
  }

  export type CategoryEtiquetteWhereInput = {
    AND?: CategoryEtiquetteWhereInput | CategoryEtiquetteWhereInput[]
    OR?: CategoryEtiquetteWhereInput[]
    NOT?: CategoryEtiquetteWhereInput | CategoryEtiquetteWhereInput[]
    id?: IntFilter<"CategoryEtiquette"> | number
    name?: StringFilter<"CategoryEtiquette"> | string
    description?: StringNullableFilter<"CategoryEtiquette"> | string | null
    createdAt?: DateTimeFilter<"CategoryEtiquette"> | Date | string
    updatedAt?: DateTimeFilter<"CategoryEtiquette"> | Date | string
    ticketCategories?: TicketCategoryListRelationFilter
  }

  export type CategoryEtiquetteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ticketCategories?: TicketCategoryOrderByRelationAggregateInput
    _relevance?: CategoryEtiquetteOrderByRelevanceInput
  }

  export type CategoryEtiquetteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoryEtiquetteWhereInput | CategoryEtiquetteWhereInput[]
    OR?: CategoryEtiquetteWhereInput[]
    NOT?: CategoryEtiquetteWhereInput | CategoryEtiquetteWhereInput[]
    description?: StringNullableFilter<"CategoryEtiquette"> | string | null
    createdAt?: DateTimeFilter<"CategoryEtiquette"> | Date | string
    updatedAt?: DateTimeFilter<"CategoryEtiquette"> | Date | string
    ticketCategories?: TicketCategoryListRelationFilter
  }, "id" | "name">

  export type CategoryEtiquetteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryEtiquetteCountOrderByAggregateInput
    _avg?: CategoryEtiquetteAvgOrderByAggregateInput
    _max?: CategoryEtiquetteMaxOrderByAggregateInput
    _min?: CategoryEtiquetteMinOrderByAggregateInput
    _sum?: CategoryEtiquetteSumOrderByAggregateInput
  }

  export type CategoryEtiquetteScalarWhereWithAggregatesInput = {
    AND?: CategoryEtiquetteScalarWhereWithAggregatesInput | CategoryEtiquetteScalarWhereWithAggregatesInput[]
    OR?: CategoryEtiquetteScalarWhereWithAggregatesInput[]
    NOT?: CategoryEtiquetteScalarWhereWithAggregatesInput | CategoryEtiquetteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CategoryEtiquette"> | number
    name?: StringWithAggregatesFilter<"CategoryEtiquette"> | string
    description?: StringNullableWithAggregatesFilter<"CategoryEtiquette"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CategoryEtiquette"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CategoryEtiquette"> | Date | string
  }

  export type SLAWhereInput = {
    AND?: SLAWhereInput | SLAWhereInput[]
    OR?: SLAWhereInput[]
    NOT?: SLAWhereInput | SLAWhereInput[]
    id?: IntFilter<"SLA"> | number
    name?: StringFilter<"SLA"> | string
    description?: StringNullableFilter<"SLA"> | string | null
    slaReplyHours?: IntFilter<"SLA"> | number
    slaResolutionHours?: IntFilter<"SLA"> | number
    createdAt?: DateTimeFilter<"SLA"> | Date | string
    updatedAt?: DateTimeFilter<"SLA"> | Date | string
    TicketCategory?: TicketCategoryListRelationFilter
  }

  export type SLAOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    slaReplyHours?: SortOrder
    slaResolutionHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    TicketCategory?: TicketCategoryOrderByRelationAggregateInput
    _relevance?: SLAOrderByRelevanceInput
  }

  export type SLAWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SLAWhereInput | SLAWhereInput[]
    OR?: SLAWhereInput[]
    NOT?: SLAWhereInput | SLAWhereInput[]
    description?: StringNullableFilter<"SLA"> | string | null
    slaReplyHours?: IntFilter<"SLA"> | number
    slaResolutionHours?: IntFilter<"SLA"> | number
    createdAt?: DateTimeFilter<"SLA"> | Date | string
    updatedAt?: DateTimeFilter<"SLA"> | Date | string
    TicketCategory?: TicketCategoryListRelationFilter
  }, "id" | "name">

  export type SLAOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    slaReplyHours?: SortOrder
    slaResolutionHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SLACountOrderByAggregateInput
    _avg?: SLAAvgOrderByAggregateInput
    _max?: SLAMaxOrderByAggregateInput
    _min?: SLAMinOrderByAggregateInput
    _sum?: SLASumOrderByAggregateInput
  }

  export type SLAScalarWhereWithAggregatesInput = {
    AND?: SLAScalarWhereWithAggregatesInput | SLAScalarWhereWithAggregatesInput[]
    OR?: SLAScalarWhereWithAggregatesInput[]
    NOT?: SLAScalarWhereWithAggregatesInput | SLAScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SLA"> | number
    name?: StringWithAggregatesFilter<"SLA"> | string
    description?: StringNullableWithAggregatesFilter<"SLA"> | string | null
    slaReplyHours?: IntWithAggregatesFilter<"SLA"> | number
    slaResolutionHours?: IntWithAggregatesFilter<"SLA"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SLA"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SLA"> | Date | string
  }

  export type TicketCategoryWhereInput = {
    AND?: TicketCategoryWhereInput | TicketCategoryWhereInput[]
    OR?: TicketCategoryWhereInput[]
    NOT?: TicketCategoryWhereInput | TicketCategoryWhereInput[]
    id?: IntFilter<"TicketCategory"> | number
    name?: StringFilter<"TicketCategory"> | string
    description?: StringNullableFilter<"TicketCategory"> | string | null
    slaId?: IntFilter<"TicketCategory"> | number
    imageUrl?: StringNullableFilter<"TicketCategory"> | string | null
    createdAt?: DateTimeFilter<"TicketCategory"> | Date | string
    updatedAt?: DateTimeFilter<"TicketCategory"> | Date | string
    SLA?: XOR<SLAScalarRelationFilter, SLAWhereInput>
    specialities?: SpecialityAreaListRelationFilter
    categoryEtiquettes?: CategoryEtiquetteListRelationFilter
    tickets?: TicketListRelationFilter
  }

  export type TicketCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    slaId?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    SLA?: SLAOrderByWithRelationInput
    specialities?: SpecialityAreaOrderByRelationAggregateInput
    categoryEtiquettes?: CategoryEtiquetteOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
    _relevance?: TicketCategoryOrderByRelevanceInput
  }

  export type TicketCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: TicketCategoryWhereInput | TicketCategoryWhereInput[]
    OR?: TicketCategoryWhereInput[]
    NOT?: TicketCategoryWhereInput | TicketCategoryWhereInput[]
    description?: StringNullableFilter<"TicketCategory"> | string | null
    slaId?: IntFilter<"TicketCategory"> | number
    imageUrl?: StringNullableFilter<"TicketCategory"> | string | null
    createdAt?: DateTimeFilter<"TicketCategory"> | Date | string
    updatedAt?: DateTimeFilter<"TicketCategory"> | Date | string
    SLA?: XOR<SLAScalarRelationFilter, SLAWhereInput>
    specialities?: SpecialityAreaListRelationFilter
    categoryEtiquettes?: CategoryEtiquetteListRelationFilter
    tickets?: TicketListRelationFilter
  }, "id" | "name">

  export type TicketCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    slaId?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketCategoryCountOrderByAggregateInput
    _avg?: TicketCategoryAvgOrderByAggregateInput
    _max?: TicketCategoryMaxOrderByAggregateInput
    _min?: TicketCategoryMinOrderByAggregateInput
    _sum?: TicketCategorySumOrderByAggregateInput
  }

  export type TicketCategoryScalarWhereWithAggregatesInput = {
    AND?: TicketCategoryScalarWhereWithAggregatesInput | TicketCategoryScalarWhereWithAggregatesInput[]
    OR?: TicketCategoryScalarWhereWithAggregatesInput[]
    NOT?: TicketCategoryScalarWhereWithAggregatesInput | TicketCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TicketCategory"> | number
    name?: StringWithAggregatesFilter<"TicketCategory"> | string
    description?: StringNullableWithAggregatesFilter<"TicketCategory"> | string | null
    slaId?: IntWithAggregatesFilter<"TicketCategory"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"TicketCategory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TicketCategory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TicketCategory"> | Date | string
  }

  export type AutoTriageRuleWhereInput = {
    AND?: AutoTriageRuleWhereInput | AutoTriageRuleWhereInput[]
    OR?: AutoTriageRuleWhereInput[]
    NOT?: AutoTriageRuleWhereInput | AutoTriageRuleWhereInput[]
    id?: IntFilter<"AutoTriageRule"> | number
    timeRemainingSLA?: IntFilter<"AutoTriageRule"> | number
    ticketPriority?: EnumE_TicketPriorityFilter<"AutoTriageRule"> | $Enums.E_TicketPriority
    technicianSpecialityId?: IntNullableFilter<"AutoTriageRule"> | number | null
    createdAt?: DateTimeFilter<"AutoTriageRule"> | Date | string
    updatedAt?: DateTimeFilter<"AutoTriageRule"> | Date | string
    Ticket?: TicketListRelationFilter
  }

  export type AutoTriageRuleOrderByWithRelationInput = {
    id?: SortOrder
    timeRemainingSLA?: SortOrder
    ticketPriority?: SortOrder
    technicianSpecialityId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Ticket?: TicketOrderByRelationAggregateInput
  }

  export type AutoTriageRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AutoTriageRuleWhereInput | AutoTriageRuleWhereInput[]
    OR?: AutoTriageRuleWhereInput[]
    NOT?: AutoTriageRuleWhereInput | AutoTriageRuleWhereInput[]
    timeRemainingSLA?: IntFilter<"AutoTriageRule"> | number
    ticketPriority?: EnumE_TicketPriorityFilter<"AutoTriageRule"> | $Enums.E_TicketPriority
    technicianSpecialityId?: IntNullableFilter<"AutoTriageRule"> | number | null
    createdAt?: DateTimeFilter<"AutoTriageRule"> | Date | string
    updatedAt?: DateTimeFilter<"AutoTriageRule"> | Date | string
    Ticket?: TicketListRelationFilter
  }, "id">

  export type AutoTriageRuleOrderByWithAggregationInput = {
    id?: SortOrder
    timeRemainingSLA?: SortOrder
    ticketPriority?: SortOrder
    technicianSpecialityId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AutoTriageRuleCountOrderByAggregateInput
    _avg?: AutoTriageRuleAvgOrderByAggregateInput
    _max?: AutoTriageRuleMaxOrderByAggregateInput
    _min?: AutoTriageRuleMinOrderByAggregateInput
    _sum?: AutoTriageRuleSumOrderByAggregateInput
  }

  export type AutoTriageRuleScalarWhereWithAggregatesInput = {
    AND?: AutoTriageRuleScalarWhereWithAggregatesInput | AutoTriageRuleScalarWhereWithAggregatesInput[]
    OR?: AutoTriageRuleScalarWhereWithAggregatesInput[]
    NOT?: AutoTriageRuleScalarWhereWithAggregatesInput | AutoTriageRuleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AutoTriageRule"> | number
    timeRemainingSLA?: IntWithAggregatesFilter<"AutoTriageRule"> | number
    ticketPriority?: EnumE_TicketPriorityWithAggregatesFilter<"AutoTriageRule"> | $Enums.E_TicketPriority
    technicianSpecialityId?: IntNullableWithAggregatesFilter<"AutoTriageRule"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"AutoTriageRule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AutoTriageRule"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: IntFilter<"Ticket"> | number
    userId?: IntFilter<"Ticket"> | number
    technicianId?: IntNullableFilter<"Ticket"> | number | null
    ticketCategoryId?: IntFilter<"Ticket"> | number
    title?: StringFilter<"Ticket"> | string
    description?: StringNullableFilter<"Ticket"> | string | null
    status?: EnumE_TicketStatusFilter<"Ticket"> | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFilter<"Ticket"> | $Enums.E_TicketPriority
    storyPoints?: IntNullableFilter<"Ticket"> | number | null
    aceptanceCriteria?: StringNullableFilter<"Ticket"> | string | null
    comments?: StringNullableFilter<"Ticket"> | string | null
    resolutionDays?: IntNullableFilter<"Ticket"> | number | null
    slaReply?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    slaResolution?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    replyAchieved?: BoolNullableFilter<"Ticket"> | boolean | null
    resolutionAchieved?: BoolNullableFilter<"Ticket"> | boolean | null
    ticketValorationId?: IntNullableFilter<"Ticket"> | number | null
    closedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    assignedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    assignedMethod?: EnumE_AssignedMethodNullableFilter<"Ticket"> | $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: IntNullableFilter<"Ticket"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    technician?: XOR<UserTechnicianNullableScalarRelationFilter, UserTechnicianWhereInput> | null
    ticketImages?: TicketImageListRelationFilter
    ticketHistory?: TicketHistoryListRelationFilter
    ticketCategory?: XOR<TicketCategoryScalarRelationFilter, TicketCategoryWhereInput>
    notifications?: NotificationListRelationFilter
    ticketValoration?: XOR<TicketValorationNullableScalarRelationFilter, TicketValorationWhereInput> | null
    automaticTriageRule?: XOR<AutoTriageRuleNullableScalarRelationFilter, AutoTriageRuleWhereInput> | null
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    technicianId?: SortOrderInput | SortOrder
    ticketCategoryId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    storyPoints?: SortOrderInput | SortOrder
    aceptanceCriteria?: SortOrderInput | SortOrder
    comments?: SortOrderInput | SortOrder
    resolutionDays?: SortOrderInput | SortOrder
    slaReply?: SortOrderInput | SortOrder
    slaResolution?: SortOrderInput | SortOrder
    replyAchieved?: SortOrderInput | SortOrder
    resolutionAchieved?: SortOrderInput | SortOrder
    ticketValorationId?: SortOrderInput | SortOrder
    closedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignedAt?: SortOrderInput | SortOrder
    assignedMethod?: SortOrderInput | SortOrder
    automaticTriageRuleId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    technician?: UserTechnicianOrderByWithRelationInput
    ticketImages?: TicketImageOrderByRelationAggregateInput
    ticketHistory?: TicketHistoryOrderByRelationAggregateInput
    ticketCategory?: TicketCategoryOrderByWithRelationInput
    notifications?: NotificationOrderByRelationAggregateInput
    ticketValoration?: TicketValorationOrderByWithRelationInput
    automaticTriageRule?: AutoTriageRuleOrderByWithRelationInput
    _relevance?: TicketOrderByRelevanceInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    userId?: IntFilter<"Ticket"> | number
    technicianId?: IntNullableFilter<"Ticket"> | number | null
    ticketCategoryId?: IntFilter<"Ticket"> | number
    title?: StringFilter<"Ticket"> | string
    description?: StringNullableFilter<"Ticket"> | string | null
    status?: EnumE_TicketStatusFilter<"Ticket"> | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFilter<"Ticket"> | $Enums.E_TicketPriority
    storyPoints?: IntNullableFilter<"Ticket"> | number | null
    aceptanceCriteria?: StringNullableFilter<"Ticket"> | string | null
    comments?: StringNullableFilter<"Ticket"> | string | null
    resolutionDays?: IntNullableFilter<"Ticket"> | number | null
    slaReply?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    slaResolution?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    replyAchieved?: BoolNullableFilter<"Ticket"> | boolean | null
    resolutionAchieved?: BoolNullableFilter<"Ticket"> | boolean | null
    ticketValorationId?: IntNullableFilter<"Ticket"> | number | null
    closedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    assignedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    assignedMethod?: EnumE_AssignedMethodNullableFilter<"Ticket"> | $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: IntNullableFilter<"Ticket"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    technician?: XOR<UserTechnicianNullableScalarRelationFilter, UserTechnicianWhereInput> | null
    ticketImages?: TicketImageListRelationFilter
    ticketHistory?: TicketHistoryListRelationFilter
    ticketCategory?: XOR<TicketCategoryScalarRelationFilter, TicketCategoryWhereInput>
    notifications?: NotificationListRelationFilter
    ticketValoration?: XOR<TicketValorationNullableScalarRelationFilter, TicketValorationWhereInput> | null
    automaticTriageRule?: XOR<AutoTriageRuleNullableScalarRelationFilter, AutoTriageRuleWhereInput> | null
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    technicianId?: SortOrderInput | SortOrder
    ticketCategoryId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    priority?: SortOrder
    storyPoints?: SortOrderInput | SortOrder
    aceptanceCriteria?: SortOrderInput | SortOrder
    comments?: SortOrderInput | SortOrder
    resolutionDays?: SortOrderInput | SortOrder
    slaReply?: SortOrderInput | SortOrder
    slaResolution?: SortOrderInput | SortOrder
    replyAchieved?: SortOrderInput | SortOrder
    resolutionAchieved?: SortOrderInput | SortOrder
    ticketValorationId?: SortOrderInput | SortOrder
    closedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignedAt?: SortOrderInput | SortOrder
    assignedMethod?: SortOrderInput | SortOrder
    automaticTriageRuleId?: SortOrderInput | SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ticket"> | number
    userId?: IntWithAggregatesFilter<"Ticket"> | number
    technicianId?: IntNullableWithAggregatesFilter<"Ticket"> | number | null
    ticketCategoryId?: IntWithAggregatesFilter<"Ticket"> | number
    title?: StringWithAggregatesFilter<"Ticket"> | string
    description?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    status?: EnumE_TicketStatusWithAggregatesFilter<"Ticket"> | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityWithAggregatesFilter<"Ticket"> | $Enums.E_TicketPriority
    storyPoints?: IntNullableWithAggregatesFilter<"Ticket"> | number | null
    aceptanceCriteria?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    comments?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    resolutionDays?: IntNullableWithAggregatesFilter<"Ticket"> | number | null
    slaReply?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    slaResolution?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    replyAchieved?: BoolNullableWithAggregatesFilter<"Ticket"> | boolean | null
    resolutionAchieved?: BoolNullableWithAggregatesFilter<"Ticket"> | boolean | null
    ticketValorationId?: IntNullableWithAggregatesFilter<"Ticket"> | number | null
    closedAt?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    assignedAt?: DateTimeNullableWithAggregatesFilter<"Ticket"> | Date | string | null
    assignedMethod?: EnumE_AssignedMethodNullableWithAggregatesFilter<"Ticket"> | $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: IntNullableWithAggregatesFilter<"Ticket"> | number | null
  }

  export type TicketImageWhereInput = {
    AND?: TicketImageWhereInput | TicketImageWhereInput[]
    OR?: TicketImageWhereInput[]
    NOT?: TicketImageWhereInput | TicketImageWhereInput[]
    id?: IntFilter<"TicketImage"> | number
    ticketId?: IntNullableFilter<"TicketImage"> | number | null
    ticketHistoryId?: IntNullableFilter<"TicketImage"> | number | null
    imageUrl?: StringFilter<"TicketImage"> | string
    createdAt?: DateTimeFilter<"TicketImage"> | Date | string
    updatedAt?: DateTimeFilter<"TicketImage"> | Date | string
    ticket?: XOR<TicketNullableScalarRelationFilter, TicketWhereInput> | null
    ticketHistory?: XOR<TicketHistoryNullableScalarRelationFilter, TicketHistoryWhereInput> | null
  }

  export type TicketImageOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrderInput | SortOrder
    ticketHistoryId?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ticket?: TicketOrderByWithRelationInput
    ticketHistory?: TicketHistoryOrderByWithRelationInput
    _relevance?: TicketImageOrderByRelevanceInput
  }

  export type TicketImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketImageWhereInput | TicketImageWhereInput[]
    OR?: TicketImageWhereInput[]
    NOT?: TicketImageWhereInput | TicketImageWhereInput[]
    ticketId?: IntNullableFilter<"TicketImage"> | number | null
    ticketHistoryId?: IntNullableFilter<"TicketImage"> | number | null
    imageUrl?: StringFilter<"TicketImage"> | string
    createdAt?: DateTimeFilter<"TicketImage"> | Date | string
    updatedAt?: DateTimeFilter<"TicketImage"> | Date | string
    ticket?: XOR<TicketNullableScalarRelationFilter, TicketWhereInput> | null
    ticketHistory?: XOR<TicketHistoryNullableScalarRelationFilter, TicketHistoryWhereInput> | null
  }, "id">

  export type TicketImageOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrderInput | SortOrder
    ticketHistoryId?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketImageCountOrderByAggregateInput
    _avg?: TicketImageAvgOrderByAggregateInput
    _max?: TicketImageMaxOrderByAggregateInput
    _min?: TicketImageMinOrderByAggregateInput
    _sum?: TicketImageSumOrderByAggregateInput
  }

  export type TicketImageScalarWhereWithAggregatesInput = {
    AND?: TicketImageScalarWhereWithAggregatesInput | TicketImageScalarWhereWithAggregatesInput[]
    OR?: TicketImageScalarWhereWithAggregatesInput[]
    NOT?: TicketImageScalarWhereWithAggregatesInput | TicketImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TicketImage"> | number
    ticketId?: IntNullableWithAggregatesFilter<"TicketImage"> | number | null
    ticketHistoryId?: IntNullableWithAggregatesFilter<"TicketImage"> | number | null
    imageUrl?: StringWithAggregatesFilter<"TicketImage"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TicketImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TicketImage"> | Date | string
  }

  export type TicketHistoryWhereInput = {
    AND?: TicketHistoryWhereInput | TicketHistoryWhereInput[]
    OR?: TicketHistoryWhereInput[]
    NOT?: TicketHistoryWhereInput | TicketHistoryWhereInput[]
    id?: IntFilter<"TicketHistory"> | number
    ticketId?: IntFilter<"TicketHistory"> | number
    status?: EnumE_TicketStatusFilter<"TicketHistory"> | $Enums.E_TicketStatus
    changedBy?: IntFilter<"TicketHistory"> | number
    changedAt?: DateTimeFilter<"TicketHistory"> | Date | string
    observation?: StringFilter<"TicketHistory"> | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ticketImages?: TicketImageListRelationFilter
  }

  export type TicketHistoryOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    status?: SortOrder
    changedBy?: SortOrder
    changedAt?: SortOrder
    observation?: SortOrder
    ticket?: TicketOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    ticketImages?: TicketImageOrderByRelationAggregateInput
    _relevance?: TicketHistoryOrderByRelevanceInput
  }

  export type TicketHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TicketHistoryWhereInput | TicketHistoryWhereInput[]
    OR?: TicketHistoryWhereInput[]
    NOT?: TicketHistoryWhereInput | TicketHistoryWhereInput[]
    ticketId?: IntFilter<"TicketHistory"> | number
    status?: EnumE_TicketStatusFilter<"TicketHistory"> | $Enums.E_TicketStatus
    changedBy?: IntFilter<"TicketHistory"> | number
    changedAt?: DateTimeFilter<"TicketHistory"> | Date | string
    observation?: StringFilter<"TicketHistory"> | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ticketImages?: TicketImageListRelationFilter
  }, "id">

  export type TicketHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    status?: SortOrder
    changedBy?: SortOrder
    changedAt?: SortOrder
    observation?: SortOrder
    _count?: TicketHistoryCountOrderByAggregateInput
    _avg?: TicketHistoryAvgOrderByAggregateInput
    _max?: TicketHistoryMaxOrderByAggregateInput
    _min?: TicketHistoryMinOrderByAggregateInput
    _sum?: TicketHistorySumOrderByAggregateInput
  }

  export type TicketHistoryScalarWhereWithAggregatesInput = {
    AND?: TicketHistoryScalarWhereWithAggregatesInput | TicketHistoryScalarWhereWithAggregatesInput[]
    OR?: TicketHistoryScalarWhereWithAggregatesInput[]
    NOT?: TicketHistoryScalarWhereWithAggregatesInput | TicketHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TicketHistory"> | number
    ticketId?: IntWithAggregatesFilter<"TicketHistory"> | number
    status?: EnumE_TicketStatusWithAggregatesFilter<"TicketHistory"> | $Enums.E_TicketStatus
    changedBy?: IntWithAggregatesFilter<"TicketHistory"> | number
    changedAt?: DateTimeWithAggregatesFilter<"TicketHistory"> | Date | string
    observation?: StringWithAggregatesFilter<"TicketHistory"> | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    ticketId?: IntNullableFilter<"Notification"> | number | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ticket?: XOR<TicketNullableScalarRelationFilter, TicketWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    ticketId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    ticket?: TicketOrderByWithRelationInput
    _relevance?: NotificationOrderByRelevanceInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: IntFilter<"Notification"> | number
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    ticketId?: IntNullableFilter<"Notification"> | number | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    ticket?: XOR<TicketNullableScalarRelationFilter, TicketWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    ticketId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    userId?: IntWithAggregatesFilter<"Notification"> | number
    message?: StringWithAggregatesFilter<"Notification"> | string
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
    ticketId?: IntNullableWithAggregatesFilter<"Notification"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type TicketValorationWhereInput = {
    AND?: TicketValorationWhereInput | TicketValorationWhereInput[]
    OR?: TicketValorationWhereInput[]
    NOT?: TicketValorationWhereInput | TicketValorationWhereInput[]
    id?: IntFilter<"TicketValoration"> | number
    ticketId?: IntFilter<"TicketValoration"> | number
    rating?: IntFilter<"TicketValoration"> | number
    comments?: StringNullableFilter<"TicketValoration"> | string | null
    createdAt?: DateTimeFilter<"TicketValoration"> | Date | string
    updatedAt?: DateTimeFilter<"TicketValoration"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }

  export type TicketValorationOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    rating?: SortOrder
    comments?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ticket?: TicketOrderByWithRelationInput
    _relevance?: TicketValorationOrderByRelevanceInput
  }

  export type TicketValorationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    ticketId?: number
    AND?: TicketValorationWhereInput | TicketValorationWhereInput[]
    OR?: TicketValorationWhereInput[]
    NOT?: TicketValorationWhereInput | TicketValorationWhereInput[]
    rating?: IntFilter<"TicketValoration"> | number
    comments?: StringNullableFilter<"TicketValoration"> | string | null
    createdAt?: DateTimeFilter<"TicketValoration"> | Date | string
    updatedAt?: DateTimeFilter<"TicketValoration"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }, "id" | "ticketId">

  export type TicketValorationOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    rating?: SortOrder
    comments?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketValorationCountOrderByAggregateInput
    _avg?: TicketValorationAvgOrderByAggregateInput
    _max?: TicketValorationMaxOrderByAggregateInput
    _min?: TicketValorationMinOrderByAggregateInput
    _sum?: TicketValorationSumOrderByAggregateInput
  }

  export type TicketValorationScalarWhereWithAggregatesInput = {
    AND?: TicketValorationScalarWhereWithAggregatesInput | TicketValorationScalarWhereWithAggregatesInput[]
    OR?: TicketValorationScalarWhereWithAggregatesInput[]
    NOT?: TicketValorationScalarWhereWithAggregatesInput | TicketValorationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TicketValoration"> | number
    ticketId?: IntWithAggregatesFilter<"TicketValoration"> | number
    rating?: IntWithAggregatesFilter<"TicketValoration"> | number
    comments?: StringNullableWithAggregatesFilter<"TicketValoration"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TicketValoration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TicketValoration"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    lastName: string
    email: string
    password: string
    profileImage?: string | null
    genre?: string | null
    dob?: Date | string | null
    cellphone?: string | null
    role?: $Enums.E_Role
    status?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userTechnician?: UserTechnicianCreateNestedOneWithoutUserInput
    tickets?: TicketCreateNestedManyWithoutUserInput
    ticketHistory?: TicketHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    lastName: string
    email: string
    password: string
    profileImage?: string | null
    genre?: string | null
    dob?: Date | string | null
    cellphone?: string | null
    role?: $Enums.E_Role
    status?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userTechnician?: UserTechnicianUncheckedCreateNestedOneWithoutUserInput
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
    ticketHistory?: TicketHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cellphone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumE_RoleFieldUpdateOperationsInput | $Enums.E_Role
    status?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTechnician?: UserTechnicianUpdateOneWithoutUserNestedInput
    tickets?: TicketUpdateManyWithoutUserNestedInput
    ticketHistory?: TicketHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cellphone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumE_RoleFieldUpdateOperationsInput | $Enums.E_Role
    status?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTechnician?: UserTechnicianUncheckedUpdateOneWithoutUserNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
    ticketHistory?: TicketHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    lastName: string
    email: string
    password: string
    profileImage?: string | null
    genre?: string | null
    dob?: Date | string | null
    cellphone?: string | null
    role?: $Enums.E_Role
    status?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cellphone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumE_RoleFieldUpdateOperationsInput | $Enums.E_Role
    status?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cellphone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumE_RoleFieldUpdateOperationsInput | $Enums.E_Role
    status?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTechnicianCreateInput = {
    status?: $Enums.E_TechnicianStatus
    workload?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserTechnicianInput
    specialities?: SpecialityAreaCreateNestedManyWithoutTechniciansInput
    tickets?: TicketCreateNestedManyWithoutTechnicianInput
  }

  export type UserTechnicianUncheckedCreateInput = {
    id?: number
    userId: number
    status?: $Enums.E_TechnicianStatus
    workload?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    specialities?: SpecialityAreaUncheckedCreateNestedManyWithoutTechniciansInput
    tickets?: TicketUncheckedCreateNestedManyWithoutTechnicianInput
  }

  export type UserTechnicianUpdateInput = {
    status?: EnumE_TechnicianStatusFieldUpdateOperationsInput | $Enums.E_TechnicianStatus
    workload?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserTechnicianNestedInput
    specialities?: SpecialityAreaUpdateManyWithoutTechniciansNestedInput
    tickets?: TicketUpdateManyWithoutTechnicianNestedInput
  }

  export type UserTechnicianUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumE_TechnicianStatusFieldUpdateOperationsInput | $Enums.E_TechnicianStatus
    workload?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialities?: SpecialityAreaUncheckedUpdateManyWithoutTechniciansNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutTechnicianNestedInput
  }

  export type UserTechnicianCreateManyInput = {
    id?: number
    userId: number
    status?: $Enums.E_TechnicianStatus
    workload?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserTechnicianUpdateManyMutationInput = {
    status?: EnumE_TechnicianStatusFieldUpdateOperationsInput | $Enums.E_TechnicianStatus
    workload?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserTechnicianUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumE_TechnicianStatusFieldUpdateOperationsInput | $Enums.E_TechnicianStatus
    workload?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialityAreaCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    technicians?: UserTechnicianCreateNestedManyWithoutSpecialitiesInput
    ticketCategories?: TicketCategoryCreateNestedManyWithoutSpecialitiesInput
  }

  export type SpecialityAreaUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    technicians?: UserTechnicianUncheckedCreateNestedManyWithoutSpecialitiesInput
    ticketCategories?: TicketCategoryUncheckedCreateNestedManyWithoutSpecialitiesInput
  }

  export type SpecialityAreaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technicians?: UserTechnicianUpdateManyWithoutSpecialitiesNestedInput
    ticketCategories?: TicketCategoryUpdateManyWithoutSpecialitiesNestedInput
  }

  export type SpecialityAreaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technicians?: UserTechnicianUncheckedUpdateManyWithoutSpecialitiesNestedInput
    ticketCategories?: TicketCategoryUncheckedUpdateManyWithoutSpecialitiesNestedInput
  }

  export type SpecialityAreaCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SpecialityAreaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialityAreaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryEtiquetteCreateInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ticketCategories?: TicketCategoryCreateNestedManyWithoutCategoryEtiquettesInput
  }

  export type CategoryEtiquetteUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ticketCategories?: TicketCategoryUncheckedCreateNestedManyWithoutCategoryEtiquettesInput
  }

  export type CategoryEtiquetteUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketCategories?: TicketCategoryUpdateManyWithoutCategoryEtiquettesNestedInput
  }

  export type CategoryEtiquetteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketCategories?: TicketCategoryUncheckedUpdateManyWithoutCategoryEtiquettesNestedInput
  }

  export type CategoryEtiquetteCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryEtiquetteUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryEtiquetteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SLACreateInput = {
    name: string
    description?: string | null
    slaReplyHours: number
    slaResolutionHours: number
    createdAt?: Date | string
    updatedAt?: Date | string
    TicketCategory?: TicketCategoryCreateNestedManyWithoutSLAInput
  }

  export type SLAUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    slaReplyHours: number
    slaResolutionHours: number
    createdAt?: Date | string
    updatedAt?: Date | string
    TicketCategory?: TicketCategoryUncheckedCreateNestedManyWithoutSLAInput
  }

  export type SLAUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slaReplyHours?: IntFieldUpdateOperationsInput | number
    slaResolutionHours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TicketCategory?: TicketCategoryUpdateManyWithoutSLANestedInput
  }

  export type SLAUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slaReplyHours?: IntFieldUpdateOperationsInput | number
    slaResolutionHours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    TicketCategory?: TicketCategoryUncheckedUpdateManyWithoutSLANestedInput
  }

  export type SLACreateManyInput = {
    id?: number
    name: string
    description?: string | null
    slaReplyHours: number
    slaResolutionHours: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SLAUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slaReplyHours?: IntFieldUpdateOperationsInput | number
    slaResolutionHours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SLAUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slaReplyHours?: IntFieldUpdateOperationsInput | number
    slaResolutionHours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCategoryCreateInput = {
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    SLA: SLACreateNestedOneWithoutTicketCategoryInput
    specialities?: SpecialityAreaCreateNestedManyWithoutTicketCategoriesInput
    categoryEtiquettes?: CategoryEtiquetteCreateNestedManyWithoutTicketCategoriesInput
    tickets?: TicketCreateNestedManyWithoutTicketCategoryInput
  }

  export type TicketCategoryUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    slaId: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    specialities?: SpecialityAreaUncheckedCreateNestedManyWithoutTicketCategoriesInput
    categoryEtiquettes?: CategoryEtiquetteUncheckedCreateNestedManyWithoutTicketCategoriesInput
    tickets?: TicketUncheckedCreateNestedManyWithoutTicketCategoryInput
  }

  export type TicketCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SLA?: SLAUpdateOneRequiredWithoutTicketCategoryNestedInput
    specialities?: SpecialityAreaUpdateManyWithoutTicketCategoriesNestedInput
    categoryEtiquettes?: CategoryEtiquetteUpdateManyWithoutTicketCategoriesNestedInput
    tickets?: TicketUpdateManyWithoutTicketCategoryNestedInput
  }

  export type TicketCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slaId?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialities?: SpecialityAreaUncheckedUpdateManyWithoutTicketCategoriesNestedInput
    categoryEtiquettes?: CategoryEtiquetteUncheckedUpdateManyWithoutTicketCategoriesNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutTicketCategoryNestedInput
  }

  export type TicketCategoryCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    slaId: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slaId?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutoTriageRuleCreateInput = {
    timeRemainingSLA: number
    ticketPriority: $Enums.E_TicketPriority
    technicianSpecialityId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Ticket?: TicketCreateNestedManyWithoutAutomaticTriageRuleInput
  }

  export type AutoTriageRuleUncheckedCreateInput = {
    id?: number
    timeRemainingSLA: number
    ticketPriority: $Enums.E_TicketPriority
    technicianSpecialityId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Ticket?: TicketUncheckedCreateNestedManyWithoutAutomaticTriageRuleInput
  }

  export type AutoTriageRuleUpdateInput = {
    timeRemainingSLA?: IntFieldUpdateOperationsInput | number
    ticketPriority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    technicianSpecialityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUpdateManyWithoutAutomaticTriageRuleNestedInput
  }

  export type AutoTriageRuleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    timeRemainingSLA?: IntFieldUpdateOperationsInput | number
    ticketPriority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    technicianSpecialityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ticket?: TicketUncheckedUpdateManyWithoutAutomaticTriageRuleNestedInput
  }

  export type AutoTriageRuleCreateManyInput = {
    id?: number
    timeRemainingSLA: number
    ticketPriority: $Enums.E_TicketPriority
    technicianSpecialityId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutoTriageRuleUpdateManyMutationInput = {
    timeRemainingSLA?: IntFieldUpdateOperationsInput | number
    ticketPriority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    technicianSpecialityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutoTriageRuleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    timeRemainingSLA?: IntFieldUpdateOperationsInput | number
    ticketPriority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    technicianSpecialityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    title: string
    description?: string | null
    status?: $Enums.E_TicketStatus
    priority?: $Enums.E_TicketPriority
    storyPoints?: number | null
    aceptanceCriteria?: string | null
    comments?: string | null
    resolutionDays?: number | null
    slaReply?: Date | string | null
    slaResolution?: Date | string | null
    replyAchieved?: boolean | null
    resolutionAchieved?: boolean | null
    ticketValorationId?: number | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedAt?: Date | string | null
    assignedMethod?: $Enums.E_AssignedMethod | null
    user: UserCreateNestedOneWithoutTicketsInput
    technician?: UserTechnicianCreateNestedOneWithoutTicketsInput
    ticketImages?: TicketImageCreateNestedManyWithoutTicketInput
    ticketHistory?: TicketHistoryCreateNestedManyWithoutTicketInput
    ticketCategory: TicketCategoryCreateNestedOneWithoutTicketsInput
    notifications?: NotificationCreateNestedManyWithoutTicketInput
    ticketValoration?: TicketValorationCreateNestedOneWithoutTicketInput
    automaticTriageRule?: AutoTriageRuleCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: number
    userId: number
    technicianId?: number | null
    ticketCategoryId: number
    title: string
    description?: string | null
    status?: $Enums.E_TicketStatus
    priority?: $Enums.E_TicketPriority
    storyPoints?: number | null
    aceptanceCriteria?: string | null
    comments?: string | null
    resolutionDays?: number | null
    slaReply?: Date | string | null
    slaResolution?: Date | string | null
    replyAchieved?: boolean | null
    resolutionAchieved?: boolean | null
    ticketValorationId?: number | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedAt?: Date | string | null
    assignedMethod?: $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: number | null
    ticketImages?: TicketImageUncheckedCreateNestedManyWithoutTicketInput
    ticketHistory?: TicketHistoryUncheckedCreateNestedManyWithoutTicketInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTicketInput
    ticketValoration?: TicketValorationUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    aceptanceCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionDays?: NullableIntFieldUpdateOperationsInput | number | null
    slaReply?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaResolution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resolutionAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketValorationId?: NullableIntFieldUpdateOperationsInput | number | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedMethod?: NullableEnumE_AssignedMethodFieldUpdateOperationsInput | $Enums.E_AssignedMethod | null
    user?: UserUpdateOneRequiredWithoutTicketsNestedInput
    technician?: UserTechnicianUpdateOneWithoutTicketsNestedInput
    ticketImages?: TicketImageUpdateManyWithoutTicketNestedInput
    ticketHistory?: TicketHistoryUpdateManyWithoutTicketNestedInput
    ticketCategory?: TicketCategoryUpdateOneRequiredWithoutTicketsNestedInput
    notifications?: NotificationUpdateManyWithoutTicketNestedInput
    ticketValoration?: TicketValorationUpdateOneWithoutTicketNestedInput
    automaticTriageRule?: AutoTriageRuleUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    technicianId?: NullableIntFieldUpdateOperationsInput | number | null
    ticketCategoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    aceptanceCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionDays?: NullableIntFieldUpdateOperationsInput | number | null
    slaReply?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaResolution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resolutionAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketValorationId?: NullableIntFieldUpdateOperationsInput | number | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedMethod?: NullableEnumE_AssignedMethodFieldUpdateOperationsInput | $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: NullableIntFieldUpdateOperationsInput | number | null
    ticketImages?: TicketImageUncheckedUpdateManyWithoutTicketNestedInput
    ticketHistory?: TicketHistoryUncheckedUpdateManyWithoutTicketNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTicketNestedInput
    ticketValoration?: TicketValorationUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: number
    userId: number
    technicianId?: number | null
    ticketCategoryId: number
    title: string
    description?: string | null
    status?: $Enums.E_TicketStatus
    priority?: $Enums.E_TicketPriority
    storyPoints?: number | null
    aceptanceCriteria?: string | null
    comments?: string | null
    resolutionDays?: number | null
    slaReply?: Date | string | null
    slaResolution?: Date | string | null
    replyAchieved?: boolean | null
    resolutionAchieved?: boolean | null
    ticketValorationId?: number | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedAt?: Date | string | null
    assignedMethod?: $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: number | null
  }

  export type TicketUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    aceptanceCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionDays?: NullableIntFieldUpdateOperationsInput | number | null
    slaReply?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaResolution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resolutionAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketValorationId?: NullableIntFieldUpdateOperationsInput | number | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedMethod?: NullableEnumE_AssignedMethodFieldUpdateOperationsInput | $Enums.E_AssignedMethod | null
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    technicianId?: NullableIntFieldUpdateOperationsInput | number | null
    ticketCategoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    aceptanceCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionDays?: NullableIntFieldUpdateOperationsInput | number | null
    slaReply?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaResolution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resolutionAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketValorationId?: NullableIntFieldUpdateOperationsInput | number | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedMethod?: NullableEnumE_AssignedMethodFieldUpdateOperationsInput | $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TicketImageCreateInput = {
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket?: TicketCreateNestedOneWithoutTicketImagesInput
    ticketHistory?: TicketHistoryCreateNestedOneWithoutTicketImagesInput
  }

  export type TicketImageUncheckedCreateInput = {
    id?: number
    ticketId?: number | null
    ticketHistoryId?: number | null
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketImageUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneWithoutTicketImagesNestedInput
    ticketHistory?: TicketHistoryUpdateOneWithoutTicketImagesNestedInput
  }

  export type TicketImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: NullableIntFieldUpdateOperationsInput | number | null
    ticketHistoryId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketImageCreateManyInput = {
    id?: number
    ticketId?: number | null
    ticketHistoryId?: number | null
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketImageUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: NullableIntFieldUpdateOperationsInput | number | null
    ticketHistoryId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketHistoryCreateInput = {
    status: $Enums.E_TicketStatus
    changedAt?: Date | string
    observation: string
    ticket: TicketCreateNestedOneWithoutTicketHistoryInput
    user: UserCreateNestedOneWithoutTicketHistoryInput
    ticketImages?: TicketImageCreateNestedManyWithoutTicketHistoryInput
  }

  export type TicketHistoryUncheckedCreateInput = {
    id?: number
    ticketId: number
    status: $Enums.E_TicketStatus
    changedBy: number
    changedAt?: Date | string
    observation: string
    ticketImages?: TicketImageUncheckedCreateNestedManyWithoutTicketHistoryInput
  }

  export type TicketHistoryUpdateInput = {
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    observation?: StringFieldUpdateOperationsInput | string
    ticket?: TicketUpdateOneRequiredWithoutTicketHistoryNestedInput
    user?: UserUpdateOneRequiredWithoutTicketHistoryNestedInput
    ticketImages?: TicketImageUpdateManyWithoutTicketHistoryNestedInput
  }

  export type TicketHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    changedBy?: IntFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    observation?: StringFieldUpdateOperationsInput | string
    ticketImages?: TicketImageUncheckedUpdateManyWithoutTicketHistoryNestedInput
  }

  export type TicketHistoryCreateManyInput = {
    id?: number
    ticketId: number
    status: $Enums.E_TicketStatus
    changedBy: number
    changedAt?: Date | string
    observation: string
  }

  export type TicketHistoryUpdateManyMutationInput = {
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    observation?: StringFieldUpdateOperationsInput | string
  }

  export type TicketHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    changedBy?: IntFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    observation?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationCreateInput = {
    message: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
    ticket?: TicketCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    userId: number
    message: string
    isRead?: boolean
    ticketId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateInput = {
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
    ticket?: TicketUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    ticketId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    userId: number
    message: string
    isRead?: boolean
    ticketId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    ticketId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketValorationCreateInput = {
    rating: number
    comments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket: TicketCreateNestedOneWithoutTicketValorationInput
  }

  export type TicketValorationUncheckedCreateInput = {
    id?: number
    ticketId: number
    rating: number
    comments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketValorationUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutTicketValorationNestedInput
  }

  export type TicketValorationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketValorationCreateManyInput = {
    id?: number
    ticketId: number
    rating: number
    comments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketValorationUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketValorationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumE_RoleFilter<$PrismaModel = never> = {
    equals?: $Enums.E_Role | EnumE_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.E_Role[]
    notIn?: $Enums.E_Role[]
    not?: NestedEnumE_RoleFilter<$PrismaModel> | $Enums.E_Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserTechnicianNullableScalarRelationFilter = {
    is?: UserTechnicianWhereInput | null
    isNot?: UserTechnicianWhereInput | null
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type TicketHistoryListRelationFilter = {
    every?: TicketHistoryWhereInput
    some?: TicketHistoryWhereInput
    none?: TicketHistoryWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImage?: SortOrder
    genre?: SortOrder
    dob?: SortOrder
    cellphone?: SortOrder
    role?: SortOrder
    status?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImage?: SortOrder
    genre?: SortOrder
    dob?: SortOrder
    cellphone?: SortOrder
    role?: SortOrder
    status?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profileImage?: SortOrder
    genre?: SortOrder
    dob?: SortOrder
    cellphone?: SortOrder
    role?: SortOrder
    status?: SortOrder
    lastLogin?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumE_RoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.E_Role | EnumE_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.E_Role[]
    notIn?: $Enums.E_Role[]
    not?: NestedEnumE_RoleWithAggregatesFilter<$PrismaModel> | $Enums.E_Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumE_RoleFilter<$PrismaModel>
    _max?: NestedEnumE_RoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumE_TechnicianStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.E_TechnicianStatus | EnumE_TechnicianStatusFieldRefInput<$PrismaModel>
    in?: $Enums.E_TechnicianStatus[]
    notIn?: $Enums.E_TechnicianStatus[]
    not?: NestedEnumE_TechnicianStatusFilter<$PrismaModel> | $Enums.E_TechnicianStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SpecialityAreaListRelationFilter = {
    every?: SpecialityAreaWhereInput
    some?: SpecialityAreaWhereInput
    none?: SpecialityAreaWhereInput
  }

  export type SpecialityAreaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserTechnicianCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    workload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserTechnicianAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workload?: SortOrder
  }

  export type UserTechnicianMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    workload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserTechnicianMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    workload?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserTechnicianSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    workload?: SortOrder
  }

  export type EnumE_TechnicianStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.E_TechnicianStatus | EnumE_TechnicianStatusFieldRefInput<$PrismaModel>
    in?: $Enums.E_TechnicianStatus[]
    notIn?: $Enums.E_TechnicianStatus[]
    not?: NestedEnumE_TechnicianStatusWithAggregatesFilter<$PrismaModel> | $Enums.E_TechnicianStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumE_TechnicianStatusFilter<$PrismaModel>
    _max?: NestedEnumE_TechnicianStatusFilter<$PrismaModel>
  }

  export type UserTechnicianListRelationFilter = {
    every?: UserTechnicianWhereInput
    some?: UserTechnicianWhereInput
    none?: UserTechnicianWhereInput
  }

  export type TicketCategoryListRelationFilter = {
    every?: TicketCategoryWhereInput
    some?: TicketCategoryWhereInput
    none?: TicketCategoryWhereInput
  }

  export type UserTechnicianOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketCategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SpecialityAreaOrderByRelevanceInput = {
    fields: SpecialityAreaOrderByRelevanceFieldEnum | SpecialityAreaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SpecialityAreaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecialityAreaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SpecialityAreaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecialityAreaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SpecialityAreaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryEtiquetteOrderByRelevanceInput = {
    fields: CategoryEtiquetteOrderByRelevanceFieldEnum | CategoryEtiquetteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryEtiquetteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryEtiquetteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryEtiquetteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryEtiquetteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryEtiquetteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SLAOrderByRelevanceInput = {
    fields: SLAOrderByRelevanceFieldEnum | SLAOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SLACountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    slaReplyHours?: SortOrder
    slaResolutionHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SLAAvgOrderByAggregateInput = {
    id?: SortOrder
    slaReplyHours?: SortOrder
    slaResolutionHours?: SortOrder
  }

  export type SLAMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    slaReplyHours?: SortOrder
    slaResolutionHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SLAMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    slaReplyHours?: SortOrder
    slaResolutionHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SLASumOrderByAggregateInput = {
    id?: SortOrder
    slaReplyHours?: SortOrder
    slaResolutionHours?: SortOrder
  }

  export type SLAScalarRelationFilter = {
    is?: SLAWhereInput
    isNot?: SLAWhereInput
  }

  export type CategoryEtiquetteListRelationFilter = {
    every?: CategoryEtiquetteWhereInput
    some?: CategoryEtiquetteWhereInput
    none?: CategoryEtiquetteWhereInput
  }

  export type CategoryEtiquetteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketCategoryOrderByRelevanceInput = {
    fields: TicketCategoryOrderByRelevanceFieldEnum | TicketCategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TicketCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    slaId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    slaId?: SortOrder
  }

  export type TicketCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    slaId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    slaId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketCategorySumOrderByAggregateInput = {
    id?: SortOrder
    slaId?: SortOrder
  }

  export type EnumE_TicketPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.E_TicketPriority | EnumE_TicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.E_TicketPriority[]
    notIn?: $Enums.E_TicketPriority[]
    not?: NestedEnumE_TicketPriorityFilter<$PrismaModel> | $Enums.E_TicketPriority
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AutoTriageRuleCountOrderByAggregateInput = {
    id?: SortOrder
    timeRemainingSLA?: SortOrder
    ticketPriority?: SortOrder
    technicianSpecialityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutoTriageRuleAvgOrderByAggregateInput = {
    id?: SortOrder
    timeRemainingSLA?: SortOrder
    technicianSpecialityId?: SortOrder
  }

  export type AutoTriageRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    timeRemainingSLA?: SortOrder
    ticketPriority?: SortOrder
    technicianSpecialityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutoTriageRuleMinOrderByAggregateInput = {
    id?: SortOrder
    timeRemainingSLA?: SortOrder
    ticketPriority?: SortOrder
    technicianSpecialityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AutoTriageRuleSumOrderByAggregateInput = {
    id?: SortOrder
    timeRemainingSLA?: SortOrder
    technicianSpecialityId?: SortOrder
  }

  export type EnumE_TicketPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.E_TicketPriority | EnumE_TicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.E_TicketPriority[]
    notIn?: $Enums.E_TicketPriority[]
    not?: NestedEnumE_TicketPriorityWithAggregatesFilter<$PrismaModel> | $Enums.E_TicketPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumE_TicketPriorityFilter<$PrismaModel>
    _max?: NestedEnumE_TicketPriorityFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumE_TicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.E_TicketStatus | EnumE_TicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.E_TicketStatus[]
    notIn?: $Enums.E_TicketStatus[]
    not?: NestedEnumE_TicketStatusFilter<$PrismaModel> | $Enums.E_TicketStatus
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EnumE_AssignedMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.E_AssignedMethod | EnumE_AssignedMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.E_AssignedMethod[] | null
    notIn?: $Enums.E_AssignedMethod[] | null
    not?: NestedEnumE_AssignedMethodNullableFilter<$PrismaModel> | $Enums.E_AssignedMethod | null
  }

  export type TicketImageListRelationFilter = {
    every?: TicketImageWhereInput
    some?: TicketImageWhereInput
    none?: TicketImageWhereInput
  }

  export type TicketCategoryScalarRelationFilter = {
    is?: TicketCategoryWhereInput
    isNot?: TicketCategoryWhereInput
  }

  export type TicketValorationNullableScalarRelationFilter = {
    is?: TicketValorationWhereInput | null
    isNot?: TicketValorationWhereInput | null
  }

  export type AutoTriageRuleNullableScalarRelationFilter = {
    is?: AutoTriageRuleWhereInput | null
    isNot?: AutoTriageRuleWhereInput | null
  }

  export type TicketImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelevanceInput = {
    fields: TicketOrderByRelevanceFieldEnum | TicketOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    technicianId?: SortOrder
    ticketCategoryId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    storyPoints?: SortOrder
    aceptanceCriteria?: SortOrder
    comments?: SortOrder
    resolutionDays?: SortOrder
    slaReply?: SortOrder
    slaResolution?: SortOrder
    replyAchieved?: SortOrder
    resolutionAchieved?: SortOrder
    ticketValorationId?: SortOrder
    closedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignedAt?: SortOrder
    assignedMethod?: SortOrder
    automaticTriageRuleId?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    technicianId?: SortOrder
    ticketCategoryId?: SortOrder
    storyPoints?: SortOrder
    resolutionDays?: SortOrder
    ticketValorationId?: SortOrder
    automaticTriageRuleId?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    technicianId?: SortOrder
    ticketCategoryId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    storyPoints?: SortOrder
    aceptanceCriteria?: SortOrder
    comments?: SortOrder
    resolutionDays?: SortOrder
    slaReply?: SortOrder
    slaResolution?: SortOrder
    replyAchieved?: SortOrder
    resolutionAchieved?: SortOrder
    ticketValorationId?: SortOrder
    closedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignedAt?: SortOrder
    assignedMethod?: SortOrder
    automaticTriageRuleId?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    technicianId?: SortOrder
    ticketCategoryId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    priority?: SortOrder
    storyPoints?: SortOrder
    aceptanceCriteria?: SortOrder
    comments?: SortOrder
    resolutionDays?: SortOrder
    slaReply?: SortOrder
    slaResolution?: SortOrder
    replyAchieved?: SortOrder
    resolutionAchieved?: SortOrder
    ticketValorationId?: SortOrder
    closedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignedAt?: SortOrder
    assignedMethod?: SortOrder
    automaticTriageRuleId?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    technicianId?: SortOrder
    ticketCategoryId?: SortOrder
    storyPoints?: SortOrder
    resolutionDays?: SortOrder
    ticketValorationId?: SortOrder
    automaticTriageRuleId?: SortOrder
  }

  export type EnumE_TicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.E_TicketStatus | EnumE_TicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.E_TicketStatus[]
    notIn?: $Enums.E_TicketStatus[]
    not?: NestedEnumE_TicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.E_TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumE_TicketStatusFilter<$PrismaModel>
    _max?: NestedEnumE_TicketStatusFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumE_AssignedMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.E_AssignedMethod | EnumE_AssignedMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.E_AssignedMethod[] | null
    notIn?: $Enums.E_AssignedMethod[] | null
    not?: NestedEnumE_AssignedMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.E_AssignedMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumE_AssignedMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumE_AssignedMethodNullableFilter<$PrismaModel>
  }

  export type TicketNullableScalarRelationFilter = {
    is?: TicketWhereInput | null
    isNot?: TicketWhereInput | null
  }

  export type TicketHistoryNullableScalarRelationFilter = {
    is?: TicketHistoryWhereInput | null
    isNot?: TicketHistoryWhereInput | null
  }

  export type TicketImageOrderByRelevanceInput = {
    fields: TicketImageOrderByRelevanceFieldEnum | TicketImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TicketImageCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    ticketHistoryId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketImageAvgOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    ticketHistoryId?: SortOrder
  }

  export type TicketImageMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    ticketHistoryId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketImageMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    ticketHistoryId?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketImageSumOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    ticketHistoryId?: SortOrder
  }

  export type TicketScalarRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type TicketHistoryOrderByRelevanceInput = {
    fields: TicketHistoryOrderByRelevanceFieldEnum | TicketHistoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TicketHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    status?: SortOrder
    changedBy?: SortOrder
    changedAt?: SortOrder
    observation?: SortOrder
  }

  export type TicketHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    changedBy?: SortOrder
  }

  export type TicketHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    status?: SortOrder
    changedBy?: SortOrder
    changedAt?: SortOrder
    observation?: SortOrder
  }

  export type TicketHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    status?: SortOrder
    changedBy?: SortOrder
    changedAt?: SortOrder
    observation?: SortOrder
  }

  export type TicketHistorySumOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    changedBy?: SortOrder
  }

  export type NotificationOrderByRelevanceInput = {
    fields: NotificationOrderByRelevanceFieldEnum | NotificationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    ticketId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ticketId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    ticketId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    ticketId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    ticketId?: SortOrder
  }

  export type TicketValorationOrderByRelevanceInput = {
    fields: TicketValorationOrderByRelevanceFieldEnum | TicketValorationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TicketValorationCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    rating?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketValorationAvgOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    rating?: SortOrder
  }

  export type TicketValorationMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    rating?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketValorationMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    rating?: SortOrder
    comments?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketValorationSumOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    rating?: SortOrder
  }

  export type UserTechnicianCreateNestedOneWithoutUserInput = {
    create?: XOR<UserTechnicianCreateWithoutUserInput, UserTechnicianUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserTechnicianCreateOrConnectWithoutUserInput
    connect?: UserTechnicianWhereUniqueInput
  }

  export type TicketCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketHistoryCreateWithoutUserInput, TicketHistoryUncheckedCreateWithoutUserInput> | TicketHistoryCreateWithoutUserInput[] | TicketHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketHistoryCreateOrConnectWithoutUserInput | TicketHistoryCreateOrConnectWithoutUserInput[]
    createMany?: TicketHistoryCreateManyUserInputEnvelope
    connect?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type UserTechnicianUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserTechnicianCreateWithoutUserInput, UserTechnicianUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserTechnicianCreateOrConnectWithoutUserInput
    connect?: UserTechnicianWhereUniqueInput
  }

  export type TicketUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketHistoryCreateWithoutUserInput, TicketHistoryUncheckedCreateWithoutUserInput> | TicketHistoryCreateWithoutUserInput[] | TicketHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketHistoryCreateOrConnectWithoutUserInput | TicketHistoryCreateOrConnectWithoutUserInput[]
    createMany?: TicketHistoryCreateManyUserInputEnvelope
    connect?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumE_RoleFieldUpdateOperationsInput = {
    set?: $Enums.E_Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserTechnicianUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserTechnicianCreateWithoutUserInput, UserTechnicianUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserTechnicianCreateOrConnectWithoutUserInput
    upsert?: UserTechnicianUpsertWithoutUserInput
    disconnect?: UserTechnicianWhereInput | boolean
    delete?: UserTechnicianWhereInput | boolean
    connect?: UserTechnicianWhereUniqueInput
    update?: XOR<XOR<UserTechnicianUpdateToOneWithWhereWithoutUserInput, UserTechnicianUpdateWithoutUserInput>, UserTechnicianUncheckedUpdateWithoutUserInput>
  }

  export type TicketUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUserInput | TicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUserInput | TicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUserInput | TicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketHistoryCreateWithoutUserInput, TicketHistoryUncheckedCreateWithoutUserInput> | TicketHistoryCreateWithoutUserInput[] | TicketHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketHistoryCreateOrConnectWithoutUserInput | TicketHistoryCreateOrConnectWithoutUserInput[]
    upsert?: TicketHistoryUpsertWithWhereUniqueWithoutUserInput | TicketHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketHistoryCreateManyUserInputEnvelope
    set?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    disconnect?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    delete?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    connect?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    update?: TicketHistoryUpdateWithWhereUniqueWithoutUserInput | TicketHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketHistoryUpdateManyWithWhereWithoutUserInput | TicketHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketHistoryScalarWhereInput | TicketHistoryScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserTechnicianUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserTechnicianCreateWithoutUserInput, UserTechnicianUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserTechnicianCreateOrConnectWithoutUserInput
    upsert?: UserTechnicianUpsertWithoutUserInput
    disconnect?: UserTechnicianWhereInput | boolean
    delete?: UserTechnicianWhereInput | boolean
    connect?: UserTechnicianWhereUniqueInput
    update?: XOR<XOR<UserTechnicianUpdateToOneWithWhereWithoutUserInput, UserTechnicianUpdateWithoutUserInput>, UserTechnicianUncheckedUpdateWithoutUserInput>
  }

  export type TicketUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUserInput | TicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUserInput | TicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUserInput | TicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketHistoryCreateWithoutUserInput, TicketHistoryUncheckedCreateWithoutUserInput> | TicketHistoryCreateWithoutUserInput[] | TicketHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketHistoryCreateOrConnectWithoutUserInput | TicketHistoryCreateOrConnectWithoutUserInput[]
    upsert?: TicketHistoryUpsertWithWhereUniqueWithoutUserInput | TicketHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketHistoryCreateManyUserInputEnvelope
    set?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    disconnect?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    delete?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    connect?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    update?: TicketHistoryUpdateWithWhereUniqueWithoutUserInput | TicketHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketHistoryUpdateManyWithWhereWithoutUserInput | TicketHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketHistoryScalarWhereInput | TicketHistoryScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserTechnicianInput = {
    create?: XOR<UserCreateWithoutUserTechnicianInput, UserUncheckedCreateWithoutUserTechnicianInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTechnicianInput
    connect?: UserWhereUniqueInput
  }

  export type SpecialityAreaCreateNestedManyWithoutTechniciansInput = {
    create?: XOR<SpecialityAreaCreateWithoutTechniciansInput, SpecialityAreaUncheckedCreateWithoutTechniciansInput> | SpecialityAreaCreateWithoutTechniciansInput[] | SpecialityAreaUncheckedCreateWithoutTechniciansInput[]
    connectOrCreate?: SpecialityAreaCreateOrConnectWithoutTechniciansInput | SpecialityAreaCreateOrConnectWithoutTechniciansInput[]
    connect?: SpecialityAreaWhereUniqueInput | SpecialityAreaWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<TicketCreateWithoutTechnicianInput, TicketUncheckedCreateWithoutTechnicianInput> | TicketCreateWithoutTechnicianInput[] | TicketUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTechnicianInput | TicketCreateOrConnectWithoutTechnicianInput[]
    createMany?: TicketCreateManyTechnicianInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type SpecialityAreaUncheckedCreateNestedManyWithoutTechniciansInput = {
    create?: XOR<SpecialityAreaCreateWithoutTechniciansInput, SpecialityAreaUncheckedCreateWithoutTechniciansInput> | SpecialityAreaCreateWithoutTechniciansInput[] | SpecialityAreaUncheckedCreateWithoutTechniciansInput[]
    connectOrCreate?: SpecialityAreaCreateOrConnectWithoutTechniciansInput | SpecialityAreaCreateOrConnectWithoutTechniciansInput[]
    connect?: SpecialityAreaWhereUniqueInput | SpecialityAreaWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutTechnicianInput = {
    create?: XOR<TicketCreateWithoutTechnicianInput, TicketUncheckedCreateWithoutTechnicianInput> | TicketCreateWithoutTechnicianInput[] | TicketUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTechnicianInput | TicketCreateOrConnectWithoutTechnicianInput[]
    createMany?: TicketCreateManyTechnicianInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type EnumE_TechnicianStatusFieldUpdateOperationsInput = {
    set?: $Enums.E_TechnicianStatus
  }

  export type UserUpdateOneRequiredWithoutUserTechnicianNestedInput = {
    create?: XOR<UserCreateWithoutUserTechnicianInput, UserUncheckedCreateWithoutUserTechnicianInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserTechnicianInput
    upsert?: UserUpsertWithoutUserTechnicianInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserTechnicianInput, UserUpdateWithoutUserTechnicianInput>, UserUncheckedUpdateWithoutUserTechnicianInput>
  }

  export type SpecialityAreaUpdateManyWithoutTechniciansNestedInput = {
    create?: XOR<SpecialityAreaCreateWithoutTechniciansInput, SpecialityAreaUncheckedCreateWithoutTechniciansInput> | SpecialityAreaCreateWithoutTechniciansInput[] | SpecialityAreaUncheckedCreateWithoutTechniciansInput[]
    connectOrCreate?: SpecialityAreaCreateOrConnectWithoutTechniciansInput | SpecialityAreaCreateOrConnectWithoutTechniciansInput[]
    upsert?: SpecialityAreaUpsertWithWhereUniqueWithoutTechniciansInput | SpecialityAreaUpsertWithWhereUniqueWithoutTechniciansInput[]
    set?: SpecialityAreaWhereUniqueInput | SpecialityAreaWhereUniqueInput[]
    disconnect?: SpecialityAreaWhereUniqueInput | SpecialityAreaWhereUniqueInput[]
    delete?: SpecialityAreaWhereUniqueInput | SpecialityAreaWhereUniqueInput[]
    connect?: SpecialityAreaWhereUniqueInput | SpecialityAreaWhereUniqueInput[]
    update?: SpecialityAreaUpdateWithWhereUniqueWithoutTechniciansInput | SpecialityAreaUpdateWithWhereUniqueWithoutTechniciansInput[]
    updateMany?: SpecialityAreaUpdateManyWithWhereWithoutTechniciansInput | SpecialityAreaUpdateManyWithWhereWithoutTechniciansInput[]
    deleteMany?: SpecialityAreaScalarWhereInput | SpecialityAreaScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<TicketCreateWithoutTechnicianInput, TicketUncheckedCreateWithoutTechnicianInput> | TicketCreateWithoutTechnicianInput[] | TicketUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTechnicianInput | TicketCreateOrConnectWithoutTechnicianInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutTechnicianInput | TicketUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: TicketCreateManyTechnicianInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutTechnicianInput | TicketUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutTechnicianInput | TicketUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type SpecialityAreaUncheckedUpdateManyWithoutTechniciansNestedInput = {
    create?: XOR<SpecialityAreaCreateWithoutTechniciansInput, SpecialityAreaUncheckedCreateWithoutTechniciansInput> | SpecialityAreaCreateWithoutTechniciansInput[] | SpecialityAreaUncheckedCreateWithoutTechniciansInput[]
    connectOrCreate?: SpecialityAreaCreateOrConnectWithoutTechniciansInput | SpecialityAreaCreateOrConnectWithoutTechniciansInput[]
    upsert?: SpecialityAreaUpsertWithWhereUniqueWithoutTechniciansInput | SpecialityAreaUpsertWithWhereUniqueWithoutTechniciansInput[]
    set?: SpecialityAreaWhereUniqueInput | SpecialityAreaWhereUniqueInput[]
    disconnect?: SpecialityAreaWhereUniqueInput | SpecialityAreaWhereUniqueInput[]
    delete?: SpecialityAreaWhereUniqueInput | SpecialityAreaWhereUniqueInput[]
    connect?: SpecialityAreaWhereUniqueInput | SpecialityAreaWhereUniqueInput[]
    update?: SpecialityAreaUpdateWithWhereUniqueWithoutTechniciansInput | SpecialityAreaUpdateWithWhereUniqueWithoutTechniciansInput[]
    updateMany?: SpecialityAreaUpdateManyWithWhereWithoutTechniciansInput | SpecialityAreaUpdateManyWithWhereWithoutTechniciansInput[]
    deleteMany?: SpecialityAreaScalarWhereInput | SpecialityAreaScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutTechnicianNestedInput = {
    create?: XOR<TicketCreateWithoutTechnicianInput, TicketUncheckedCreateWithoutTechnicianInput> | TicketCreateWithoutTechnicianInput[] | TicketUncheckedCreateWithoutTechnicianInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTechnicianInput | TicketCreateOrConnectWithoutTechnicianInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutTechnicianInput | TicketUpsertWithWhereUniqueWithoutTechnicianInput[]
    createMany?: TicketCreateManyTechnicianInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutTechnicianInput | TicketUpdateWithWhereUniqueWithoutTechnicianInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutTechnicianInput | TicketUpdateManyWithWhereWithoutTechnicianInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type UserTechnicianCreateNestedManyWithoutSpecialitiesInput = {
    create?: XOR<UserTechnicianCreateWithoutSpecialitiesInput, UserTechnicianUncheckedCreateWithoutSpecialitiesInput> | UserTechnicianCreateWithoutSpecialitiesInput[] | UserTechnicianUncheckedCreateWithoutSpecialitiesInput[]
    connectOrCreate?: UserTechnicianCreateOrConnectWithoutSpecialitiesInput | UserTechnicianCreateOrConnectWithoutSpecialitiesInput[]
    connect?: UserTechnicianWhereUniqueInput | UserTechnicianWhereUniqueInput[]
  }

  export type TicketCategoryCreateNestedManyWithoutSpecialitiesInput = {
    create?: XOR<TicketCategoryCreateWithoutSpecialitiesInput, TicketCategoryUncheckedCreateWithoutSpecialitiesInput> | TicketCategoryCreateWithoutSpecialitiesInput[] | TicketCategoryUncheckedCreateWithoutSpecialitiesInput[]
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutSpecialitiesInput | TicketCategoryCreateOrConnectWithoutSpecialitiesInput[]
    connect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
  }

  export type UserTechnicianUncheckedCreateNestedManyWithoutSpecialitiesInput = {
    create?: XOR<UserTechnicianCreateWithoutSpecialitiesInput, UserTechnicianUncheckedCreateWithoutSpecialitiesInput> | UserTechnicianCreateWithoutSpecialitiesInput[] | UserTechnicianUncheckedCreateWithoutSpecialitiesInput[]
    connectOrCreate?: UserTechnicianCreateOrConnectWithoutSpecialitiesInput | UserTechnicianCreateOrConnectWithoutSpecialitiesInput[]
    connect?: UserTechnicianWhereUniqueInput | UserTechnicianWhereUniqueInput[]
  }

  export type TicketCategoryUncheckedCreateNestedManyWithoutSpecialitiesInput = {
    create?: XOR<TicketCategoryCreateWithoutSpecialitiesInput, TicketCategoryUncheckedCreateWithoutSpecialitiesInput> | TicketCategoryCreateWithoutSpecialitiesInput[] | TicketCategoryUncheckedCreateWithoutSpecialitiesInput[]
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutSpecialitiesInput | TicketCategoryCreateOrConnectWithoutSpecialitiesInput[]
    connect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
  }

  export type UserTechnicianUpdateManyWithoutSpecialitiesNestedInput = {
    create?: XOR<UserTechnicianCreateWithoutSpecialitiesInput, UserTechnicianUncheckedCreateWithoutSpecialitiesInput> | UserTechnicianCreateWithoutSpecialitiesInput[] | UserTechnicianUncheckedCreateWithoutSpecialitiesInput[]
    connectOrCreate?: UserTechnicianCreateOrConnectWithoutSpecialitiesInput | UserTechnicianCreateOrConnectWithoutSpecialitiesInput[]
    upsert?: UserTechnicianUpsertWithWhereUniqueWithoutSpecialitiesInput | UserTechnicianUpsertWithWhereUniqueWithoutSpecialitiesInput[]
    set?: UserTechnicianWhereUniqueInput | UserTechnicianWhereUniqueInput[]
    disconnect?: UserTechnicianWhereUniqueInput | UserTechnicianWhereUniqueInput[]
    delete?: UserTechnicianWhereUniqueInput | UserTechnicianWhereUniqueInput[]
    connect?: UserTechnicianWhereUniqueInput | UserTechnicianWhereUniqueInput[]
    update?: UserTechnicianUpdateWithWhereUniqueWithoutSpecialitiesInput | UserTechnicianUpdateWithWhereUniqueWithoutSpecialitiesInput[]
    updateMany?: UserTechnicianUpdateManyWithWhereWithoutSpecialitiesInput | UserTechnicianUpdateManyWithWhereWithoutSpecialitiesInput[]
    deleteMany?: UserTechnicianScalarWhereInput | UserTechnicianScalarWhereInput[]
  }

  export type TicketCategoryUpdateManyWithoutSpecialitiesNestedInput = {
    create?: XOR<TicketCategoryCreateWithoutSpecialitiesInput, TicketCategoryUncheckedCreateWithoutSpecialitiesInput> | TicketCategoryCreateWithoutSpecialitiesInput[] | TicketCategoryUncheckedCreateWithoutSpecialitiesInput[]
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutSpecialitiesInput | TicketCategoryCreateOrConnectWithoutSpecialitiesInput[]
    upsert?: TicketCategoryUpsertWithWhereUniqueWithoutSpecialitiesInput | TicketCategoryUpsertWithWhereUniqueWithoutSpecialitiesInput[]
    set?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    disconnect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    delete?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    connect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    update?: TicketCategoryUpdateWithWhereUniqueWithoutSpecialitiesInput | TicketCategoryUpdateWithWhereUniqueWithoutSpecialitiesInput[]
    updateMany?: TicketCategoryUpdateManyWithWhereWithoutSpecialitiesInput | TicketCategoryUpdateManyWithWhereWithoutSpecialitiesInput[]
    deleteMany?: TicketCategoryScalarWhereInput | TicketCategoryScalarWhereInput[]
  }

  export type UserTechnicianUncheckedUpdateManyWithoutSpecialitiesNestedInput = {
    create?: XOR<UserTechnicianCreateWithoutSpecialitiesInput, UserTechnicianUncheckedCreateWithoutSpecialitiesInput> | UserTechnicianCreateWithoutSpecialitiesInput[] | UserTechnicianUncheckedCreateWithoutSpecialitiesInput[]
    connectOrCreate?: UserTechnicianCreateOrConnectWithoutSpecialitiesInput | UserTechnicianCreateOrConnectWithoutSpecialitiesInput[]
    upsert?: UserTechnicianUpsertWithWhereUniqueWithoutSpecialitiesInput | UserTechnicianUpsertWithWhereUniqueWithoutSpecialitiesInput[]
    set?: UserTechnicianWhereUniqueInput | UserTechnicianWhereUniqueInput[]
    disconnect?: UserTechnicianWhereUniqueInput | UserTechnicianWhereUniqueInput[]
    delete?: UserTechnicianWhereUniqueInput | UserTechnicianWhereUniqueInput[]
    connect?: UserTechnicianWhereUniqueInput | UserTechnicianWhereUniqueInput[]
    update?: UserTechnicianUpdateWithWhereUniqueWithoutSpecialitiesInput | UserTechnicianUpdateWithWhereUniqueWithoutSpecialitiesInput[]
    updateMany?: UserTechnicianUpdateManyWithWhereWithoutSpecialitiesInput | UserTechnicianUpdateManyWithWhereWithoutSpecialitiesInput[]
    deleteMany?: UserTechnicianScalarWhereInput | UserTechnicianScalarWhereInput[]
  }

  export type TicketCategoryUncheckedUpdateManyWithoutSpecialitiesNestedInput = {
    create?: XOR<TicketCategoryCreateWithoutSpecialitiesInput, TicketCategoryUncheckedCreateWithoutSpecialitiesInput> | TicketCategoryCreateWithoutSpecialitiesInput[] | TicketCategoryUncheckedCreateWithoutSpecialitiesInput[]
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutSpecialitiesInput | TicketCategoryCreateOrConnectWithoutSpecialitiesInput[]
    upsert?: TicketCategoryUpsertWithWhereUniqueWithoutSpecialitiesInput | TicketCategoryUpsertWithWhereUniqueWithoutSpecialitiesInput[]
    set?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    disconnect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    delete?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    connect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    update?: TicketCategoryUpdateWithWhereUniqueWithoutSpecialitiesInput | TicketCategoryUpdateWithWhereUniqueWithoutSpecialitiesInput[]
    updateMany?: TicketCategoryUpdateManyWithWhereWithoutSpecialitiesInput | TicketCategoryUpdateManyWithWhereWithoutSpecialitiesInput[]
    deleteMany?: TicketCategoryScalarWhereInput | TicketCategoryScalarWhereInput[]
  }

  export type TicketCategoryCreateNestedManyWithoutCategoryEtiquettesInput = {
    create?: XOR<TicketCategoryCreateWithoutCategoryEtiquettesInput, TicketCategoryUncheckedCreateWithoutCategoryEtiquettesInput> | TicketCategoryCreateWithoutCategoryEtiquettesInput[] | TicketCategoryUncheckedCreateWithoutCategoryEtiquettesInput[]
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutCategoryEtiquettesInput | TicketCategoryCreateOrConnectWithoutCategoryEtiquettesInput[]
    connect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
  }

  export type TicketCategoryUncheckedCreateNestedManyWithoutCategoryEtiquettesInput = {
    create?: XOR<TicketCategoryCreateWithoutCategoryEtiquettesInput, TicketCategoryUncheckedCreateWithoutCategoryEtiquettesInput> | TicketCategoryCreateWithoutCategoryEtiquettesInput[] | TicketCategoryUncheckedCreateWithoutCategoryEtiquettesInput[]
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutCategoryEtiquettesInput | TicketCategoryCreateOrConnectWithoutCategoryEtiquettesInput[]
    connect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
  }

  export type TicketCategoryUpdateManyWithoutCategoryEtiquettesNestedInput = {
    create?: XOR<TicketCategoryCreateWithoutCategoryEtiquettesInput, TicketCategoryUncheckedCreateWithoutCategoryEtiquettesInput> | TicketCategoryCreateWithoutCategoryEtiquettesInput[] | TicketCategoryUncheckedCreateWithoutCategoryEtiquettesInput[]
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutCategoryEtiquettesInput | TicketCategoryCreateOrConnectWithoutCategoryEtiquettesInput[]
    upsert?: TicketCategoryUpsertWithWhereUniqueWithoutCategoryEtiquettesInput | TicketCategoryUpsertWithWhereUniqueWithoutCategoryEtiquettesInput[]
    set?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    disconnect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    delete?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    connect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    update?: TicketCategoryUpdateWithWhereUniqueWithoutCategoryEtiquettesInput | TicketCategoryUpdateWithWhereUniqueWithoutCategoryEtiquettesInput[]
    updateMany?: TicketCategoryUpdateManyWithWhereWithoutCategoryEtiquettesInput | TicketCategoryUpdateManyWithWhereWithoutCategoryEtiquettesInput[]
    deleteMany?: TicketCategoryScalarWhereInput | TicketCategoryScalarWhereInput[]
  }

  export type TicketCategoryUncheckedUpdateManyWithoutCategoryEtiquettesNestedInput = {
    create?: XOR<TicketCategoryCreateWithoutCategoryEtiquettesInput, TicketCategoryUncheckedCreateWithoutCategoryEtiquettesInput> | TicketCategoryCreateWithoutCategoryEtiquettesInput[] | TicketCategoryUncheckedCreateWithoutCategoryEtiquettesInput[]
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutCategoryEtiquettesInput | TicketCategoryCreateOrConnectWithoutCategoryEtiquettesInput[]
    upsert?: TicketCategoryUpsertWithWhereUniqueWithoutCategoryEtiquettesInput | TicketCategoryUpsertWithWhereUniqueWithoutCategoryEtiquettesInput[]
    set?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    disconnect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    delete?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    connect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    update?: TicketCategoryUpdateWithWhereUniqueWithoutCategoryEtiquettesInput | TicketCategoryUpdateWithWhereUniqueWithoutCategoryEtiquettesInput[]
    updateMany?: TicketCategoryUpdateManyWithWhereWithoutCategoryEtiquettesInput | TicketCategoryUpdateManyWithWhereWithoutCategoryEtiquettesInput[]
    deleteMany?: TicketCategoryScalarWhereInput | TicketCategoryScalarWhereInput[]
  }

  export type TicketCategoryCreateNestedManyWithoutSLAInput = {
    create?: XOR<TicketCategoryCreateWithoutSLAInput, TicketCategoryUncheckedCreateWithoutSLAInput> | TicketCategoryCreateWithoutSLAInput[] | TicketCategoryUncheckedCreateWithoutSLAInput[]
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutSLAInput | TicketCategoryCreateOrConnectWithoutSLAInput[]
    createMany?: TicketCategoryCreateManySLAInputEnvelope
    connect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
  }

  export type TicketCategoryUncheckedCreateNestedManyWithoutSLAInput = {
    create?: XOR<TicketCategoryCreateWithoutSLAInput, TicketCategoryUncheckedCreateWithoutSLAInput> | TicketCategoryCreateWithoutSLAInput[] | TicketCategoryUncheckedCreateWithoutSLAInput[]
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutSLAInput | TicketCategoryCreateOrConnectWithoutSLAInput[]
    createMany?: TicketCategoryCreateManySLAInputEnvelope
    connect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
  }

  export type TicketCategoryUpdateManyWithoutSLANestedInput = {
    create?: XOR<TicketCategoryCreateWithoutSLAInput, TicketCategoryUncheckedCreateWithoutSLAInput> | TicketCategoryCreateWithoutSLAInput[] | TicketCategoryUncheckedCreateWithoutSLAInput[]
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutSLAInput | TicketCategoryCreateOrConnectWithoutSLAInput[]
    upsert?: TicketCategoryUpsertWithWhereUniqueWithoutSLAInput | TicketCategoryUpsertWithWhereUniqueWithoutSLAInput[]
    createMany?: TicketCategoryCreateManySLAInputEnvelope
    set?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    disconnect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    delete?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    connect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    update?: TicketCategoryUpdateWithWhereUniqueWithoutSLAInput | TicketCategoryUpdateWithWhereUniqueWithoutSLAInput[]
    updateMany?: TicketCategoryUpdateManyWithWhereWithoutSLAInput | TicketCategoryUpdateManyWithWhereWithoutSLAInput[]
    deleteMany?: TicketCategoryScalarWhereInput | TicketCategoryScalarWhereInput[]
  }

  export type TicketCategoryUncheckedUpdateManyWithoutSLANestedInput = {
    create?: XOR<TicketCategoryCreateWithoutSLAInput, TicketCategoryUncheckedCreateWithoutSLAInput> | TicketCategoryCreateWithoutSLAInput[] | TicketCategoryUncheckedCreateWithoutSLAInput[]
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutSLAInput | TicketCategoryCreateOrConnectWithoutSLAInput[]
    upsert?: TicketCategoryUpsertWithWhereUniqueWithoutSLAInput | TicketCategoryUpsertWithWhereUniqueWithoutSLAInput[]
    createMany?: TicketCategoryCreateManySLAInputEnvelope
    set?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    disconnect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    delete?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    connect?: TicketCategoryWhereUniqueInput | TicketCategoryWhereUniqueInput[]
    update?: TicketCategoryUpdateWithWhereUniqueWithoutSLAInput | TicketCategoryUpdateWithWhereUniqueWithoutSLAInput[]
    updateMany?: TicketCategoryUpdateManyWithWhereWithoutSLAInput | TicketCategoryUpdateManyWithWhereWithoutSLAInput[]
    deleteMany?: TicketCategoryScalarWhereInput | TicketCategoryScalarWhereInput[]
  }

  export type SLACreateNestedOneWithoutTicketCategoryInput = {
    create?: XOR<SLACreateWithoutTicketCategoryInput, SLAUncheckedCreateWithoutTicketCategoryInput>
    connectOrCreate?: SLACreateOrConnectWithoutTicketCategoryInput
    connect?: SLAWhereUniqueInput
  }

  export type SpecialityAreaCreateNestedManyWithoutTicketCategoriesInput = {
    create?: XOR<SpecialityAreaCreateWithoutTicketCategoriesInput, SpecialityAreaUncheckedCreateWithoutTicketCategoriesInput> | SpecialityAreaCreateWithoutTicketCategoriesInput[] | SpecialityAreaUncheckedCreateWithoutTicketCategoriesInput[]
    connectOrCreate?: SpecialityAreaCreateOrConnectWithoutTicketCategoriesInput | SpecialityAreaCreateOrConnectWithoutTicketCategoriesInput[]
    connect?: SpecialityAreaWhereUniqueInput | SpecialityAreaWhereUniqueInput[]
  }

  export type CategoryEtiquetteCreateNestedManyWithoutTicketCategoriesInput = {
    create?: XOR<CategoryEtiquetteCreateWithoutTicketCategoriesInput, CategoryEtiquetteUncheckedCreateWithoutTicketCategoriesInput> | CategoryEtiquetteCreateWithoutTicketCategoriesInput[] | CategoryEtiquetteUncheckedCreateWithoutTicketCategoriesInput[]
    connectOrCreate?: CategoryEtiquetteCreateOrConnectWithoutTicketCategoriesInput | CategoryEtiquetteCreateOrConnectWithoutTicketCategoriesInput[]
    connect?: CategoryEtiquetteWhereUniqueInput | CategoryEtiquetteWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutTicketCategoryInput = {
    create?: XOR<TicketCreateWithoutTicketCategoryInput, TicketUncheckedCreateWithoutTicketCategoryInput> | TicketCreateWithoutTicketCategoryInput[] | TicketUncheckedCreateWithoutTicketCategoryInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTicketCategoryInput | TicketCreateOrConnectWithoutTicketCategoryInput[]
    createMany?: TicketCreateManyTicketCategoryInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type SpecialityAreaUncheckedCreateNestedManyWithoutTicketCategoriesInput = {
    create?: XOR<SpecialityAreaCreateWithoutTicketCategoriesInput, SpecialityAreaUncheckedCreateWithoutTicketCategoriesInput> | SpecialityAreaCreateWithoutTicketCategoriesInput[] | SpecialityAreaUncheckedCreateWithoutTicketCategoriesInput[]
    connectOrCreate?: SpecialityAreaCreateOrConnectWithoutTicketCategoriesInput | SpecialityAreaCreateOrConnectWithoutTicketCategoriesInput[]
    connect?: SpecialityAreaWhereUniqueInput | SpecialityAreaWhereUniqueInput[]
  }

  export type CategoryEtiquetteUncheckedCreateNestedManyWithoutTicketCategoriesInput = {
    create?: XOR<CategoryEtiquetteCreateWithoutTicketCategoriesInput, CategoryEtiquetteUncheckedCreateWithoutTicketCategoriesInput> | CategoryEtiquetteCreateWithoutTicketCategoriesInput[] | CategoryEtiquetteUncheckedCreateWithoutTicketCategoriesInput[]
    connectOrCreate?: CategoryEtiquetteCreateOrConnectWithoutTicketCategoriesInput | CategoryEtiquetteCreateOrConnectWithoutTicketCategoriesInput[]
    connect?: CategoryEtiquetteWhereUniqueInput | CategoryEtiquetteWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutTicketCategoryInput = {
    create?: XOR<TicketCreateWithoutTicketCategoryInput, TicketUncheckedCreateWithoutTicketCategoryInput> | TicketCreateWithoutTicketCategoryInput[] | TicketUncheckedCreateWithoutTicketCategoryInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTicketCategoryInput | TicketCreateOrConnectWithoutTicketCategoryInput[]
    createMany?: TicketCreateManyTicketCategoryInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type SLAUpdateOneRequiredWithoutTicketCategoryNestedInput = {
    create?: XOR<SLACreateWithoutTicketCategoryInput, SLAUncheckedCreateWithoutTicketCategoryInput>
    connectOrCreate?: SLACreateOrConnectWithoutTicketCategoryInput
    upsert?: SLAUpsertWithoutTicketCategoryInput
    connect?: SLAWhereUniqueInput
    update?: XOR<XOR<SLAUpdateToOneWithWhereWithoutTicketCategoryInput, SLAUpdateWithoutTicketCategoryInput>, SLAUncheckedUpdateWithoutTicketCategoryInput>
  }

  export type SpecialityAreaUpdateManyWithoutTicketCategoriesNestedInput = {
    create?: XOR<SpecialityAreaCreateWithoutTicketCategoriesInput, SpecialityAreaUncheckedCreateWithoutTicketCategoriesInput> | SpecialityAreaCreateWithoutTicketCategoriesInput[] | SpecialityAreaUncheckedCreateWithoutTicketCategoriesInput[]
    connectOrCreate?: SpecialityAreaCreateOrConnectWithoutTicketCategoriesInput | SpecialityAreaCreateOrConnectWithoutTicketCategoriesInput[]
    upsert?: SpecialityAreaUpsertWithWhereUniqueWithoutTicketCategoriesInput | SpecialityAreaUpsertWithWhereUniqueWithoutTicketCategoriesInput[]
    set?: SpecialityAreaWhereUniqueInput | SpecialityAreaWhereUniqueInput[]
    disconnect?: SpecialityAreaWhereUniqueInput | SpecialityAreaWhereUniqueInput[]
    delete?: SpecialityAreaWhereUniqueInput | SpecialityAreaWhereUniqueInput[]
    connect?: SpecialityAreaWhereUniqueInput | SpecialityAreaWhereUniqueInput[]
    update?: SpecialityAreaUpdateWithWhereUniqueWithoutTicketCategoriesInput | SpecialityAreaUpdateWithWhereUniqueWithoutTicketCategoriesInput[]
    updateMany?: SpecialityAreaUpdateManyWithWhereWithoutTicketCategoriesInput | SpecialityAreaUpdateManyWithWhereWithoutTicketCategoriesInput[]
    deleteMany?: SpecialityAreaScalarWhereInput | SpecialityAreaScalarWhereInput[]
  }

  export type CategoryEtiquetteUpdateManyWithoutTicketCategoriesNestedInput = {
    create?: XOR<CategoryEtiquetteCreateWithoutTicketCategoriesInput, CategoryEtiquetteUncheckedCreateWithoutTicketCategoriesInput> | CategoryEtiquetteCreateWithoutTicketCategoriesInput[] | CategoryEtiquetteUncheckedCreateWithoutTicketCategoriesInput[]
    connectOrCreate?: CategoryEtiquetteCreateOrConnectWithoutTicketCategoriesInput | CategoryEtiquetteCreateOrConnectWithoutTicketCategoriesInput[]
    upsert?: CategoryEtiquetteUpsertWithWhereUniqueWithoutTicketCategoriesInput | CategoryEtiquetteUpsertWithWhereUniqueWithoutTicketCategoriesInput[]
    set?: CategoryEtiquetteWhereUniqueInput | CategoryEtiquetteWhereUniqueInput[]
    disconnect?: CategoryEtiquetteWhereUniqueInput | CategoryEtiquetteWhereUniqueInput[]
    delete?: CategoryEtiquetteWhereUniqueInput | CategoryEtiquetteWhereUniqueInput[]
    connect?: CategoryEtiquetteWhereUniqueInput | CategoryEtiquetteWhereUniqueInput[]
    update?: CategoryEtiquetteUpdateWithWhereUniqueWithoutTicketCategoriesInput | CategoryEtiquetteUpdateWithWhereUniqueWithoutTicketCategoriesInput[]
    updateMany?: CategoryEtiquetteUpdateManyWithWhereWithoutTicketCategoriesInput | CategoryEtiquetteUpdateManyWithWhereWithoutTicketCategoriesInput[]
    deleteMany?: CategoryEtiquetteScalarWhereInput | CategoryEtiquetteScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutTicketCategoryNestedInput = {
    create?: XOR<TicketCreateWithoutTicketCategoryInput, TicketUncheckedCreateWithoutTicketCategoryInput> | TicketCreateWithoutTicketCategoryInput[] | TicketUncheckedCreateWithoutTicketCategoryInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTicketCategoryInput | TicketCreateOrConnectWithoutTicketCategoryInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutTicketCategoryInput | TicketUpsertWithWhereUniqueWithoutTicketCategoryInput[]
    createMany?: TicketCreateManyTicketCategoryInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutTicketCategoryInput | TicketUpdateWithWhereUniqueWithoutTicketCategoryInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutTicketCategoryInput | TicketUpdateManyWithWhereWithoutTicketCategoryInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type SpecialityAreaUncheckedUpdateManyWithoutTicketCategoriesNestedInput = {
    create?: XOR<SpecialityAreaCreateWithoutTicketCategoriesInput, SpecialityAreaUncheckedCreateWithoutTicketCategoriesInput> | SpecialityAreaCreateWithoutTicketCategoriesInput[] | SpecialityAreaUncheckedCreateWithoutTicketCategoriesInput[]
    connectOrCreate?: SpecialityAreaCreateOrConnectWithoutTicketCategoriesInput | SpecialityAreaCreateOrConnectWithoutTicketCategoriesInput[]
    upsert?: SpecialityAreaUpsertWithWhereUniqueWithoutTicketCategoriesInput | SpecialityAreaUpsertWithWhereUniqueWithoutTicketCategoriesInput[]
    set?: SpecialityAreaWhereUniqueInput | SpecialityAreaWhereUniqueInput[]
    disconnect?: SpecialityAreaWhereUniqueInput | SpecialityAreaWhereUniqueInput[]
    delete?: SpecialityAreaWhereUniqueInput | SpecialityAreaWhereUniqueInput[]
    connect?: SpecialityAreaWhereUniqueInput | SpecialityAreaWhereUniqueInput[]
    update?: SpecialityAreaUpdateWithWhereUniqueWithoutTicketCategoriesInput | SpecialityAreaUpdateWithWhereUniqueWithoutTicketCategoriesInput[]
    updateMany?: SpecialityAreaUpdateManyWithWhereWithoutTicketCategoriesInput | SpecialityAreaUpdateManyWithWhereWithoutTicketCategoriesInput[]
    deleteMany?: SpecialityAreaScalarWhereInput | SpecialityAreaScalarWhereInput[]
  }

  export type CategoryEtiquetteUncheckedUpdateManyWithoutTicketCategoriesNestedInput = {
    create?: XOR<CategoryEtiquetteCreateWithoutTicketCategoriesInput, CategoryEtiquetteUncheckedCreateWithoutTicketCategoriesInput> | CategoryEtiquetteCreateWithoutTicketCategoriesInput[] | CategoryEtiquetteUncheckedCreateWithoutTicketCategoriesInput[]
    connectOrCreate?: CategoryEtiquetteCreateOrConnectWithoutTicketCategoriesInput | CategoryEtiquetteCreateOrConnectWithoutTicketCategoriesInput[]
    upsert?: CategoryEtiquetteUpsertWithWhereUniqueWithoutTicketCategoriesInput | CategoryEtiquetteUpsertWithWhereUniqueWithoutTicketCategoriesInput[]
    set?: CategoryEtiquetteWhereUniqueInput | CategoryEtiquetteWhereUniqueInput[]
    disconnect?: CategoryEtiquetteWhereUniqueInput | CategoryEtiquetteWhereUniqueInput[]
    delete?: CategoryEtiquetteWhereUniqueInput | CategoryEtiquetteWhereUniqueInput[]
    connect?: CategoryEtiquetteWhereUniqueInput | CategoryEtiquetteWhereUniqueInput[]
    update?: CategoryEtiquetteUpdateWithWhereUniqueWithoutTicketCategoriesInput | CategoryEtiquetteUpdateWithWhereUniqueWithoutTicketCategoriesInput[]
    updateMany?: CategoryEtiquetteUpdateManyWithWhereWithoutTicketCategoriesInput | CategoryEtiquetteUpdateManyWithWhereWithoutTicketCategoriesInput[]
    deleteMany?: CategoryEtiquetteScalarWhereInput | CategoryEtiquetteScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutTicketCategoryNestedInput = {
    create?: XOR<TicketCreateWithoutTicketCategoryInput, TicketUncheckedCreateWithoutTicketCategoryInput> | TicketCreateWithoutTicketCategoryInput[] | TicketUncheckedCreateWithoutTicketCategoryInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutTicketCategoryInput | TicketCreateOrConnectWithoutTicketCategoryInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutTicketCategoryInput | TicketUpsertWithWhereUniqueWithoutTicketCategoryInput[]
    createMany?: TicketCreateManyTicketCategoryInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutTicketCategoryInput | TicketUpdateWithWhereUniqueWithoutTicketCategoryInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutTicketCategoryInput | TicketUpdateManyWithWhereWithoutTicketCategoryInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketCreateNestedManyWithoutAutomaticTriageRuleInput = {
    create?: XOR<TicketCreateWithoutAutomaticTriageRuleInput, TicketUncheckedCreateWithoutAutomaticTriageRuleInput> | TicketCreateWithoutAutomaticTriageRuleInput[] | TicketUncheckedCreateWithoutAutomaticTriageRuleInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAutomaticTriageRuleInput | TicketCreateOrConnectWithoutAutomaticTriageRuleInput[]
    createMany?: TicketCreateManyAutomaticTriageRuleInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutAutomaticTriageRuleInput = {
    create?: XOR<TicketCreateWithoutAutomaticTriageRuleInput, TicketUncheckedCreateWithoutAutomaticTriageRuleInput> | TicketCreateWithoutAutomaticTriageRuleInput[] | TicketUncheckedCreateWithoutAutomaticTriageRuleInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAutomaticTriageRuleInput | TicketCreateOrConnectWithoutAutomaticTriageRuleInput[]
    createMany?: TicketCreateManyAutomaticTriageRuleInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type EnumE_TicketPriorityFieldUpdateOperationsInput = {
    set?: $Enums.E_TicketPriority
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TicketUpdateManyWithoutAutomaticTriageRuleNestedInput = {
    create?: XOR<TicketCreateWithoutAutomaticTriageRuleInput, TicketUncheckedCreateWithoutAutomaticTriageRuleInput> | TicketCreateWithoutAutomaticTriageRuleInput[] | TicketUncheckedCreateWithoutAutomaticTriageRuleInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAutomaticTriageRuleInput | TicketCreateOrConnectWithoutAutomaticTriageRuleInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutAutomaticTriageRuleInput | TicketUpsertWithWhereUniqueWithoutAutomaticTriageRuleInput[]
    createMany?: TicketCreateManyAutomaticTriageRuleInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutAutomaticTriageRuleInput | TicketUpdateWithWhereUniqueWithoutAutomaticTriageRuleInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutAutomaticTriageRuleInput | TicketUpdateManyWithWhereWithoutAutomaticTriageRuleInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutAutomaticTriageRuleNestedInput = {
    create?: XOR<TicketCreateWithoutAutomaticTriageRuleInput, TicketUncheckedCreateWithoutAutomaticTriageRuleInput> | TicketCreateWithoutAutomaticTriageRuleInput[] | TicketUncheckedCreateWithoutAutomaticTriageRuleInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutAutomaticTriageRuleInput | TicketCreateOrConnectWithoutAutomaticTriageRuleInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutAutomaticTriageRuleInput | TicketUpsertWithWhereUniqueWithoutAutomaticTriageRuleInput[]
    createMany?: TicketCreateManyAutomaticTriageRuleInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutAutomaticTriageRuleInput | TicketUpdateWithWhereUniqueWithoutAutomaticTriageRuleInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutAutomaticTriageRuleInput | TicketUpdateManyWithWhereWithoutAutomaticTriageRuleInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTicketsInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    connect?: UserWhereUniqueInput
  }

  export type UserTechnicianCreateNestedOneWithoutTicketsInput = {
    create?: XOR<UserTechnicianCreateWithoutTicketsInput, UserTechnicianUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserTechnicianCreateOrConnectWithoutTicketsInput
    connect?: UserTechnicianWhereUniqueInput
  }

  export type TicketImageCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketImageCreateWithoutTicketInput, TicketImageUncheckedCreateWithoutTicketInput> | TicketImageCreateWithoutTicketInput[] | TicketImageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketImageCreateOrConnectWithoutTicketInput | TicketImageCreateOrConnectWithoutTicketInput[]
    createMany?: TicketImageCreateManyTicketInputEnvelope
    connect?: TicketImageWhereUniqueInput | TicketImageWhereUniqueInput[]
  }

  export type TicketHistoryCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketHistoryCreateWithoutTicketInput, TicketHistoryUncheckedCreateWithoutTicketInput> | TicketHistoryCreateWithoutTicketInput[] | TicketHistoryUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketHistoryCreateOrConnectWithoutTicketInput | TicketHistoryCreateOrConnectWithoutTicketInput[]
    createMany?: TicketHistoryCreateManyTicketInputEnvelope
    connect?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
  }

  export type TicketCategoryCreateNestedOneWithoutTicketsInput = {
    create?: XOR<TicketCategoryCreateWithoutTicketsInput, TicketCategoryUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutTicketsInput
    connect?: TicketCategoryWhereUniqueInput
  }

  export type NotificationCreateNestedManyWithoutTicketInput = {
    create?: XOR<NotificationCreateWithoutTicketInput, NotificationUncheckedCreateWithoutTicketInput> | NotificationCreateWithoutTicketInput[] | NotificationUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTicketInput | NotificationCreateOrConnectWithoutTicketInput[]
    createMany?: NotificationCreateManyTicketInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type TicketValorationCreateNestedOneWithoutTicketInput = {
    create?: XOR<TicketValorationCreateWithoutTicketInput, TicketValorationUncheckedCreateWithoutTicketInput>
    connectOrCreate?: TicketValorationCreateOrConnectWithoutTicketInput
    connect?: TicketValorationWhereUniqueInput
  }

  export type AutoTriageRuleCreateNestedOneWithoutTicketInput = {
    create?: XOR<AutoTriageRuleCreateWithoutTicketInput, AutoTriageRuleUncheckedCreateWithoutTicketInput>
    connectOrCreate?: AutoTriageRuleCreateOrConnectWithoutTicketInput
    connect?: AutoTriageRuleWhereUniqueInput
  }

  export type TicketImageUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketImageCreateWithoutTicketInput, TicketImageUncheckedCreateWithoutTicketInput> | TicketImageCreateWithoutTicketInput[] | TicketImageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketImageCreateOrConnectWithoutTicketInput | TicketImageCreateOrConnectWithoutTicketInput[]
    createMany?: TicketImageCreateManyTicketInputEnvelope
    connect?: TicketImageWhereUniqueInput | TicketImageWhereUniqueInput[]
  }

  export type TicketHistoryUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketHistoryCreateWithoutTicketInput, TicketHistoryUncheckedCreateWithoutTicketInput> | TicketHistoryCreateWithoutTicketInput[] | TicketHistoryUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketHistoryCreateOrConnectWithoutTicketInput | TicketHistoryCreateOrConnectWithoutTicketInput[]
    createMany?: TicketHistoryCreateManyTicketInputEnvelope
    connect?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<NotificationCreateWithoutTicketInput, NotificationUncheckedCreateWithoutTicketInput> | NotificationCreateWithoutTicketInput[] | NotificationUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTicketInput | NotificationCreateOrConnectWithoutTicketInput[]
    createMany?: NotificationCreateManyTicketInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type TicketValorationUncheckedCreateNestedOneWithoutTicketInput = {
    create?: XOR<TicketValorationCreateWithoutTicketInput, TicketValorationUncheckedCreateWithoutTicketInput>
    connectOrCreate?: TicketValorationCreateOrConnectWithoutTicketInput
    connect?: TicketValorationWhereUniqueInput
  }

  export type EnumE_TicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.E_TicketStatus
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableEnumE_AssignedMethodFieldUpdateOperationsInput = {
    set?: $Enums.E_AssignedMethod | null
  }

  export type UserUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsInput
    upsert?: UserUpsertWithoutTicketsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketsInput, UserUpdateWithoutTicketsInput>, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type UserTechnicianUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<UserTechnicianCreateWithoutTicketsInput, UserTechnicianUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: UserTechnicianCreateOrConnectWithoutTicketsInput
    upsert?: UserTechnicianUpsertWithoutTicketsInput
    disconnect?: UserTechnicianWhereInput | boolean
    delete?: UserTechnicianWhereInput | boolean
    connect?: UserTechnicianWhereUniqueInput
    update?: XOR<XOR<UserTechnicianUpdateToOneWithWhereWithoutTicketsInput, UserTechnicianUpdateWithoutTicketsInput>, UserTechnicianUncheckedUpdateWithoutTicketsInput>
  }

  export type TicketImageUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketImageCreateWithoutTicketInput, TicketImageUncheckedCreateWithoutTicketInput> | TicketImageCreateWithoutTicketInput[] | TicketImageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketImageCreateOrConnectWithoutTicketInput | TicketImageCreateOrConnectWithoutTicketInput[]
    upsert?: TicketImageUpsertWithWhereUniqueWithoutTicketInput | TicketImageUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketImageCreateManyTicketInputEnvelope
    set?: TicketImageWhereUniqueInput | TicketImageWhereUniqueInput[]
    disconnect?: TicketImageWhereUniqueInput | TicketImageWhereUniqueInput[]
    delete?: TicketImageWhereUniqueInput | TicketImageWhereUniqueInput[]
    connect?: TicketImageWhereUniqueInput | TicketImageWhereUniqueInput[]
    update?: TicketImageUpdateWithWhereUniqueWithoutTicketInput | TicketImageUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketImageUpdateManyWithWhereWithoutTicketInput | TicketImageUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketImageScalarWhereInput | TicketImageScalarWhereInput[]
  }

  export type TicketHistoryUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketHistoryCreateWithoutTicketInput, TicketHistoryUncheckedCreateWithoutTicketInput> | TicketHistoryCreateWithoutTicketInput[] | TicketHistoryUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketHistoryCreateOrConnectWithoutTicketInput | TicketHistoryCreateOrConnectWithoutTicketInput[]
    upsert?: TicketHistoryUpsertWithWhereUniqueWithoutTicketInput | TicketHistoryUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketHistoryCreateManyTicketInputEnvelope
    set?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    disconnect?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    delete?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    connect?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    update?: TicketHistoryUpdateWithWhereUniqueWithoutTicketInput | TicketHistoryUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketHistoryUpdateManyWithWhereWithoutTicketInput | TicketHistoryUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketHistoryScalarWhereInput | TicketHistoryScalarWhereInput[]
  }

  export type TicketCategoryUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<TicketCategoryCreateWithoutTicketsInput, TicketCategoryUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: TicketCategoryCreateOrConnectWithoutTicketsInput
    upsert?: TicketCategoryUpsertWithoutTicketsInput
    connect?: TicketCategoryWhereUniqueInput
    update?: XOR<XOR<TicketCategoryUpdateToOneWithWhereWithoutTicketsInput, TicketCategoryUpdateWithoutTicketsInput>, TicketCategoryUncheckedUpdateWithoutTicketsInput>
  }

  export type NotificationUpdateManyWithoutTicketNestedInput = {
    create?: XOR<NotificationCreateWithoutTicketInput, NotificationUncheckedCreateWithoutTicketInput> | NotificationCreateWithoutTicketInput[] | NotificationUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTicketInput | NotificationCreateOrConnectWithoutTicketInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutTicketInput | NotificationUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: NotificationCreateManyTicketInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutTicketInput | NotificationUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutTicketInput | NotificationUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type TicketValorationUpdateOneWithoutTicketNestedInput = {
    create?: XOR<TicketValorationCreateWithoutTicketInput, TicketValorationUncheckedCreateWithoutTicketInput>
    connectOrCreate?: TicketValorationCreateOrConnectWithoutTicketInput
    upsert?: TicketValorationUpsertWithoutTicketInput
    disconnect?: TicketValorationWhereInput | boolean
    delete?: TicketValorationWhereInput | boolean
    connect?: TicketValorationWhereUniqueInput
    update?: XOR<XOR<TicketValorationUpdateToOneWithWhereWithoutTicketInput, TicketValorationUpdateWithoutTicketInput>, TicketValorationUncheckedUpdateWithoutTicketInput>
  }

  export type AutoTriageRuleUpdateOneWithoutTicketNestedInput = {
    create?: XOR<AutoTriageRuleCreateWithoutTicketInput, AutoTriageRuleUncheckedCreateWithoutTicketInput>
    connectOrCreate?: AutoTriageRuleCreateOrConnectWithoutTicketInput
    upsert?: AutoTriageRuleUpsertWithoutTicketInput
    disconnect?: AutoTriageRuleWhereInput | boolean
    delete?: AutoTriageRuleWhereInput | boolean
    connect?: AutoTriageRuleWhereUniqueInput
    update?: XOR<XOR<AutoTriageRuleUpdateToOneWithWhereWithoutTicketInput, AutoTriageRuleUpdateWithoutTicketInput>, AutoTriageRuleUncheckedUpdateWithoutTicketInput>
  }

  export type TicketImageUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketImageCreateWithoutTicketInput, TicketImageUncheckedCreateWithoutTicketInput> | TicketImageCreateWithoutTicketInput[] | TicketImageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketImageCreateOrConnectWithoutTicketInput | TicketImageCreateOrConnectWithoutTicketInput[]
    upsert?: TicketImageUpsertWithWhereUniqueWithoutTicketInput | TicketImageUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketImageCreateManyTicketInputEnvelope
    set?: TicketImageWhereUniqueInput | TicketImageWhereUniqueInput[]
    disconnect?: TicketImageWhereUniqueInput | TicketImageWhereUniqueInput[]
    delete?: TicketImageWhereUniqueInput | TicketImageWhereUniqueInput[]
    connect?: TicketImageWhereUniqueInput | TicketImageWhereUniqueInput[]
    update?: TicketImageUpdateWithWhereUniqueWithoutTicketInput | TicketImageUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketImageUpdateManyWithWhereWithoutTicketInput | TicketImageUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketImageScalarWhereInput | TicketImageScalarWhereInput[]
  }

  export type TicketHistoryUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketHistoryCreateWithoutTicketInput, TicketHistoryUncheckedCreateWithoutTicketInput> | TicketHistoryCreateWithoutTicketInput[] | TicketHistoryUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketHistoryCreateOrConnectWithoutTicketInput | TicketHistoryCreateOrConnectWithoutTicketInput[]
    upsert?: TicketHistoryUpsertWithWhereUniqueWithoutTicketInput | TicketHistoryUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketHistoryCreateManyTicketInputEnvelope
    set?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    disconnect?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    delete?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    connect?: TicketHistoryWhereUniqueInput | TicketHistoryWhereUniqueInput[]
    update?: TicketHistoryUpdateWithWhereUniqueWithoutTicketInput | TicketHistoryUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketHistoryUpdateManyWithWhereWithoutTicketInput | TicketHistoryUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketHistoryScalarWhereInput | TicketHistoryScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<NotificationCreateWithoutTicketInput, NotificationUncheckedCreateWithoutTicketInput> | NotificationCreateWithoutTicketInput[] | NotificationUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutTicketInput | NotificationCreateOrConnectWithoutTicketInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutTicketInput | NotificationUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: NotificationCreateManyTicketInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutTicketInput | NotificationUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutTicketInput | NotificationUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type TicketValorationUncheckedUpdateOneWithoutTicketNestedInput = {
    create?: XOR<TicketValorationCreateWithoutTicketInput, TicketValorationUncheckedCreateWithoutTicketInput>
    connectOrCreate?: TicketValorationCreateOrConnectWithoutTicketInput
    upsert?: TicketValorationUpsertWithoutTicketInput
    disconnect?: TicketValorationWhereInput | boolean
    delete?: TicketValorationWhereInput | boolean
    connect?: TicketValorationWhereUniqueInput
    update?: XOR<XOR<TicketValorationUpdateToOneWithWhereWithoutTicketInput, TicketValorationUpdateWithoutTicketInput>, TicketValorationUncheckedUpdateWithoutTicketInput>
  }

  export type TicketCreateNestedOneWithoutTicketImagesInput = {
    create?: XOR<TicketCreateWithoutTicketImagesInput, TicketUncheckedCreateWithoutTicketImagesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutTicketImagesInput
    connect?: TicketWhereUniqueInput
  }

  export type TicketHistoryCreateNestedOneWithoutTicketImagesInput = {
    create?: XOR<TicketHistoryCreateWithoutTicketImagesInput, TicketHistoryUncheckedCreateWithoutTicketImagesInput>
    connectOrCreate?: TicketHistoryCreateOrConnectWithoutTicketImagesInput
    connect?: TicketHistoryWhereUniqueInput
  }

  export type TicketUpdateOneWithoutTicketImagesNestedInput = {
    create?: XOR<TicketCreateWithoutTicketImagesInput, TicketUncheckedCreateWithoutTicketImagesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutTicketImagesInput
    upsert?: TicketUpsertWithoutTicketImagesInput
    disconnect?: TicketWhereInput | boolean
    delete?: TicketWhereInput | boolean
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutTicketImagesInput, TicketUpdateWithoutTicketImagesInput>, TicketUncheckedUpdateWithoutTicketImagesInput>
  }

  export type TicketHistoryUpdateOneWithoutTicketImagesNestedInput = {
    create?: XOR<TicketHistoryCreateWithoutTicketImagesInput, TicketHistoryUncheckedCreateWithoutTicketImagesInput>
    connectOrCreate?: TicketHistoryCreateOrConnectWithoutTicketImagesInput
    upsert?: TicketHistoryUpsertWithoutTicketImagesInput
    disconnect?: TicketHistoryWhereInput | boolean
    delete?: TicketHistoryWhereInput | boolean
    connect?: TicketHistoryWhereUniqueInput
    update?: XOR<XOR<TicketHistoryUpdateToOneWithWhereWithoutTicketImagesInput, TicketHistoryUpdateWithoutTicketImagesInput>, TicketHistoryUncheckedUpdateWithoutTicketImagesInput>
  }

  export type TicketCreateNestedOneWithoutTicketHistoryInput = {
    create?: XOR<TicketCreateWithoutTicketHistoryInput, TicketUncheckedCreateWithoutTicketHistoryInput>
    connectOrCreate?: TicketCreateOrConnectWithoutTicketHistoryInput
    connect?: TicketWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTicketHistoryInput = {
    create?: XOR<UserCreateWithoutTicketHistoryInput, UserUncheckedCreateWithoutTicketHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type TicketImageCreateNestedManyWithoutTicketHistoryInput = {
    create?: XOR<TicketImageCreateWithoutTicketHistoryInput, TicketImageUncheckedCreateWithoutTicketHistoryInput> | TicketImageCreateWithoutTicketHistoryInput[] | TicketImageUncheckedCreateWithoutTicketHistoryInput[]
    connectOrCreate?: TicketImageCreateOrConnectWithoutTicketHistoryInput | TicketImageCreateOrConnectWithoutTicketHistoryInput[]
    createMany?: TicketImageCreateManyTicketHistoryInputEnvelope
    connect?: TicketImageWhereUniqueInput | TicketImageWhereUniqueInput[]
  }

  export type TicketImageUncheckedCreateNestedManyWithoutTicketHistoryInput = {
    create?: XOR<TicketImageCreateWithoutTicketHistoryInput, TicketImageUncheckedCreateWithoutTicketHistoryInput> | TicketImageCreateWithoutTicketHistoryInput[] | TicketImageUncheckedCreateWithoutTicketHistoryInput[]
    connectOrCreate?: TicketImageCreateOrConnectWithoutTicketHistoryInput | TicketImageCreateOrConnectWithoutTicketHistoryInput[]
    createMany?: TicketImageCreateManyTicketHistoryInputEnvelope
    connect?: TicketImageWhereUniqueInput | TicketImageWhereUniqueInput[]
  }

  export type TicketUpdateOneRequiredWithoutTicketHistoryNestedInput = {
    create?: XOR<TicketCreateWithoutTicketHistoryInput, TicketUncheckedCreateWithoutTicketHistoryInput>
    connectOrCreate?: TicketCreateOrConnectWithoutTicketHistoryInput
    upsert?: TicketUpsertWithoutTicketHistoryInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutTicketHistoryInput, TicketUpdateWithoutTicketHistoryInput>, TicketUncheckedUpdateWithoutTicketHistoryInput>
  }

  export type UserUpdateOneRequiredWithoutTicketHistoryNestedInput = {
    create?: XOR<UserCreateWithoutTicketHistoryInput, UserUncheckedCreateWithoutTicketHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketHistoryInput
    upsert?: UserUpsertWithoutTicketHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketHistoryInput, UserUpdateWithoutTicketHistoryInput>, UserUncheckedUpdateWithoutTicketHistoryInput>
  }

  export type TicketImageUpdateManyWithoutTicketHistoryNestedInput = {
    create?: XOR<TicketImageCreateWithoutTicketHistoryInput, TicketImageUncheckedCreateWithoutTicketHistoryInput> | TicketImageCreateWithoutTicketHistoryInput[] | TicketImageUncheckedCreateWithoutTicketHistoryInput[]
    connectOrCreate?: TicketImageCreateOrConnectWithoutTicketHistoryInput | TicketImageCreateOrConnectWithoutTicketHistoryInput[]
    upsert?: TicketImageUpsertWithWhereUniqueWithoutTicketHistoryInput | TicketImageUpsertWithWhereUniqueWithoutTicketHistoryInput[]
    createMany?: TicketImageCreateManyTicketHistoryInputEnvelope
    set?: TicketImageWhereUniqueInput | TicketImageWhereUniqueInput[]
    disconnect?: TicketImageWhereUniqueInput | TicketImageWhereUniqueInput[]
    delete?: TicketImageWhereUniqueInput | TicketImageWhereUniqueInput[]
    connect?: TicketImageWhereUniqueInput | TicketImageWhereUniqueInput[]
    update?: TicketImageUpdateWithWhereUniqueWithoutTicketHistoryInput | TicketImageUpdateWithWhereUniqueWithoutTicketHistoryInput[]
    updateMany?: TicketImageUpdateManyWithWhereWithoutTicketHistoryInput | TicketImageUpdateManyWithWhereWithoutTicketHistoryInput[]
    deleteMany?: TicketImageScalarWhereInput | TicketImageScalarWhereInput[]
  }

  export type TicketImageUncheckedUpdateManyWithoutTicketHistoryNestedInput = {
    create?: XOR<TicketImageCreateWithoutTicketHistoryInput, TicketImageUncheckedCreateWithoutTicketHistoryInput> | TicketImageCreateWithoutTicketHistoryInput[] | TicketImageUncheckedCreateWithoutTicketHistoryInput[]
    connectOrCreate?: TicketImageCreateOrConnectWithoutTicketHistoryInput | TicketImageCreateOrConnectWithoutTicketHistoryInput[]
    upsert?: TicketImageUpsertWithWhereUniqueWithoutTicketHistoryInput | TicketImageUpsertWithWhereUniqueWithoutTicketHistoryInput[]
    createMany?: TicketImageCreateManyTicketHistoryInputEnvelope
    set?: TicketImageWhereUniqueInput | TicketImageWhereUniqueInput[]
    disconnect?: TicketImageWhereUniqueInput | TicketImageWhereUniqueInput[]
    delete?: TicketImageWhereUniqueInput | TicketImageWhereUniqueInput[]
    connect?: TicketImageWhereUniqueInput | TicketImageWhereUniqueInput[]
    update?: TicketImageUpdateWithWhereUniqueWithoutTicketHistoryInput | TicketImageUpdateWithWhereUniqueWithoutTicketHistoryInput[]
    updateMany?: TicketImageUpdateManyWithWhereWithoutTicketHistoryInput | TicketImageUpdateManyWithWhereWithoutTicketHistoryInput[]
    deleteMany?: TicketImageScalarWhereInput | TicketImageScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type TicketCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<TicketCreateWithoutNotificationsInput, TicketUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutNotificationsInput
    connect?: TicketWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type TicketUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<TicketCreateWithoutNotificationsInput, TicketUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutNotificationsInput
    upsert?: TicketUpsertWithoutNotificationsInput
    disconnect?: TicketWhereInput | boolean
    delete?: TicketWhereInput | boolean
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutNotificationsInput, TicketUpdateWithoutNotificationsInput>, TicketUncheckedUpdateWithoutNotificationsInput>
  }

  export type TicketCreateNestedOneWithoutTicketValorationInput = {
    create?: XOR<TicketCreateWithoutTicketValorationInput, TicketUncheckedCreateWithoutTicketValorationInput>
    connectOrCreate?: TicketCreateOrConnectWithoutTicketValorationInput
    connect?: TicketWhereUniqueInput
  }

  export type TicketUpdateOneRequiredWithoutTicketValorationNestedInput = {
    create?: XOR<TicketCreateWithoutTicketValorationInput, TicketUncheckedCreateWithoutTicketValorationInput>
    connectOrCreate?: TicketCreateOrConnectWithoutTicketValorationInput
    upsert?: TicketUpsertWithoutTicketValorationInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutTicketValorationInput, TicketUpdateWithoutTicketValorationInput>, TicketUncheckedUpdateWithoutTicketValorationInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumE_RoleFilter<$PrismaModel = never> = {
    equals?: $Enums.E_Role | EnumE_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.E_Role[]
    notIn?: $Enums.E_Role[]
    not?: NestedEnumE_RoleFilter<$PrismaModel> | $Enums.E_Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumE_RoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.E_Role | EnumE_RoleFieldRefInput<$PrismaModel>
    in?: $Enums.E_Role[]
    notIn?: $Enums.E_Role[]
    not?: NestedEnumE_RoleWithAggregatesFilter<$PrismaModel> | $Enums.E_Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumE_RoleFilter<$PrismaModel>
    _max?: NestedEnumE_RoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumE_TechnicianStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.E_TechnicianStatus | EnumE_TechnicianStatusFieldRefInput<$PrismaModel>
    in?: $Enums.E_TechnicianStatus[]
    notIn?: $Enums.E_TechnicianStatus[]
    not?: NestedEnumE_TechnicianStatusFilter<$PrismaModel> | $Enums.E_TechnicianStatus
  }

  export type NestedEnumE_TechnicianStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.E_TechnicianStatus | EnumE_TechnicianStatusFieldRefInput<$PrismaModel>
    in?: $Enums.E_TechnicianStatus[]
    notIn?: $Enums.E_TechnicianStatus[]
    not?: NestedEnumE_TechnicianStatusWithAggregatesFilter<$PrismaModel> | $Enums.E_TechnicianStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumE_TechnicianStatusFilter<$PrismaModel>
    _max?: NestedEnumE_TechnicianStatusFilter<$PrismaModel>
  }

  export type NestedEnumE_TicketPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.E_TicketPriority | EnumE_TicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.E_TicketPriority[]
    notIn?: $Enums.E_TicketPriority[]
    not?: NestedEnumE_TicketPriorityFilter<$PrismaModel> | $Enums.E_TicketPriority
  }

  export type NestedEnumE_TicketPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.E_TicketPriority | EnumE_TicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.E_TicketPriority[]
    notIn?: $Enums.E_TicketPriority[]
    not?: NestedEnumE_TicketPriorityWithAggregatesFilter<$PrismaModel> | $Enums.E_TicketPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumE_TicketPriorityFilter<$PrismaModel>
    _max?: NestedEnumE_TicketPriorityFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumE_TicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.E_TicketStatus | EnumE_TicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.E_TicketStatus[]
    notIn?: $Enums.E_TicketStatus[]
    not?: NestedEnumE_TicketStatusFilter<$PrismaModel> | $Enums.E_TicketStatus
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumE_AssignedMethodNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.E_AssignedMethod | EnumE_AssignedMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.E_AssignedMethod[] | null
    notIn?: $Enums.E_AssignedMethod[] | null
    not?: NestedEnumE_AssignedMethodNullableFilter<$PrismaModel> | $Enums.E_AssignedMethod | null
  }

  export type NestedEnumE_TicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.E_TicketStatus | EnumE_TicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.E_TicketStatus[]
    notIn?: $Enums.E_TicketStatus[]
    not?: NestedEnumE_TicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.E_TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumE_TicketStatusFilter<$PrismaModel>
    _max?: NestedEnumE_TicketStatusFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumE_AssignedMethodNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.E_AssignedMethod | EnumE_AssignedMethodFieldRefInput<$PrismaModel> | null
    in?: $Enums.E_AssignedMethod[] | null
    notIn?: $Enums.E_AssignedMethod[] | null
    not?: NestedEnumE_AssignedMethodNullableWithAggregatesFilter<$PrismaModel> | $Enums.E_AssignedMethod | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumE_AssignedMethodNullableFilter<$PrismaModel>
    _max?: NestedEnumE_AssignedMethodNullableFilter<$PrismaModel>
  }

  export type UserTechnicianCreateWithoutUserInput = {
    status?: $Enums.E_TechnicianStatus
    workload?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    specialities?: SpecialityAreaCreateNestedManyWithoutTechniciansInput
    tickets?: TicketCreateNestedManyWithoutTechnicianInput
  }

  export type UserTechnicianUncheckedCreateWithoutUserInput = {
    id?: number
    status?: $Enums.E_TechnicianStatus
    workload?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    specialities?: SpecialityAreaUncheckedCreateNestedManyWithoutTechniciansInput
    tickets?: TicketUncheckedCreateNestedManyWithoutTechnicianInput
  }

  export type UserTechnicianCreateOrConnectWithoutUserInput = {
    where: UserTechnicianWhereUniqueInput
    create: XOR<UserTechnicianCreateWithoutUserInput, UserTechnicianUncheckedCreateWithoutUserInput>
  }

  export type TicketCreateWithoutUserInput = {
    title: string
    description?: string | null
    status?: $Enums.E_TicketStatus
    priority?: $Enums.E_TicketPriority
    storyPoints?: number | null
    aceptanceCriteria?: string | null
    comments?: string | null
    resolutionDays?: number | null
    slaReply?: Date | string | null
    slaResolution?: Date | string | null
    replyAchieved?: boolean | null
    resolutionAchieved?: boolean | null
    ticketValorationId?: number | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedAt?: Date | string | null
    assignedMethod?: $Enums.E_AssignedMethod | null
    technician?: UserTechnicianCreateNestedOneWithoutTicketsInput
    ticketImages?: TicketImageCreateNestedManyWithoutTicketInput
    ticketHistory?: TicketHistoryCreateNestedManyWithoutTicketInput
    ticketCategory: TicketCategoryCreateNestedOneWithoutTicketsInput
    notifications?: NotificationCreateNestedManyWithoutTicketInput
    ticketValoration?: TicketValorationCreateNestedOneWithoutTicketInput
    automaticTriageRule?: AutoTriageRuleCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutUserInput = {
    id?: number
    technicianId?: number | null
    ticketCategoryId: number
    title: string
    description?: string | null
    status?: $Enums.E_TicketStatus
    priority?: $Enums.E_TicketPriority
    storyPoints?: number | null
    aceptanceCriteria?: string | null
    comments?: string | null
    resolutionDays?: number | null
    slaReply?: Date | string | null
    slaResolution?: Date | string | null
    replyAchieved?: boolean | null
    resolutionAchieved?: boolean | null
    ticketValorationId?: number | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedAt?: Date | string | null
    assignedMethod?: $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: number | null
    ticketImages?: TicketImageUncheckedCreateNestedManyWithoutTicketInput
    ticketHistory?: TicketHistoryUncheckedCreateNestedManyWithoutTicketInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTicketInput
    ticketValoration?: TicketValorationUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutUserInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput>
  }

  export type TicketCreateManyUserInputEnvelope = {
    data: TicketCreateManyUserInput | TicketCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TicketHistoryCreateWithoutUserInput = {
    status: $Enums.E_TicketStatus
    changedAt?: Date | string
    observation: string
    ticket: TicketCreateNestedOneWithoutTicketHistoryInput
    ticketImages?: TicketImageCreateNestedManyWithoutTicketHistoryInput
  }

  export type TicketHistoryUncheckedCreateWithoutUserInput = {
    id?: number
    ticketId: number
    status: $Enums.E_TicketStatus
    changedAt?: Date | string
    observation: string
    ticketImages?: TicketImageUncheckedCreateNestedManyWithoutTicketHistoryInput
  }

  export type TicketHistoryCreateOrConnectWithoutUserInput = {
    where: TicketHistoryWhereUniqueInput
    create: XOR<TicketHistoryCreateWithoutUserInput, TicketHistoryUncheckedCreateWithoutUserInput>
  }

  export type TicketHistoryCreateManyUserInputEnvelope = {
    data: TicketHistoryCreateManyUserInput | TicketHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    message: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket?: TicketCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    message: string
    isRead?: boolean
    ticketId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserTechnicianUpsertWithoutUserInput = {
    update: XOR<UserTechnicianUpdateWithoutUserInput, UserTechnicianUncheckedUpdateWithoutUserInput>
    create: XOR<UserTechnicianCreateWithoutUserInput, UserTechnicianUncheckedCreateWithoutUserInput>
    where?: UserTechnicianWhereInput
  }

  export type UserTechnicianUpdateToOneWithWhereWithoutUserInput = {
    where?: UserTechnicianWhereInput
    data: XOR<UserTechnicianUpdateWithoutUserInput, UserTechnicianUncheckedUpdateWithoutUserInput>
  }

  export type UserTechnicianUpdateWithoutUserInput = {
    status?: EnumE_TechnicianStatusFieldUpdateOperationsInput | $Enums.E_TechnicianStatus
    workload?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialities?: SpecialityAreaUpdateManyWithoutTechniciansNestedInput
    tickets?: TicketUpdateManyWithoutTechnicianNestedInput
  }

  export type UserTechnicianUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumE_TechnicianStatusFieldUpdateOperationsInput | $Enums.E_TechnicianStatus
    workload?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialities?: SpecialityAreaUncheckedUpdateManyWithoutTechniciansNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutTechnicianNestedInput
  }

  export type TicketUpsertWithWhereUniqueWithoutUserInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutUserInput, TicketUncheckedUpdateWithoutUserInput>
    create: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutUserInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutUserInput, TicketUncheckedUpdateWithoutUserInput>
  }

  export type TicketUpdateManyWithWhereWithoutUserInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutUserInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: IntFilter<"Ticket"> | number
    userId?: IntFilter<"Ticket"> | number
    technicianId?: IntNullableFilter<"Ticket"> | number | null
    ticketCategoryId?: IntFilter<"Ticket"> | number
    title?: StringFilter<"Ticket"> | string
    description?: StringNullableFilter<"Ticket"> | string | null
    status?: EnumE_TicketStatusFilter<"Ticket"> | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFilter<"Ticket"> | $Enums.E_TicketPriority
    storyPoints?: IntNullableFilter<"Ticket"> | number | null
    aceptanceCriteria?: StringNullableFilter<"Ticket"> | string | null
    comments?: StringNullableFilter<"Ticket"> | string | null
    resolutionDays?: IntNullableFilter<"Ticket"> | number | null
    slaReply?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    slaResolution?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    replyAchieved?: BoolNullableFilter<"Ticket"> | boolean | null
    resolutionAchieved?: BoolNullableFilter<"Ticket"> | boolean | null
    ticketValorationId?: IntNullableFilter<"Ticket"> | number | null
    closedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    assignedAt?: DateTimeNullableFilter<"Ticket"> | Date | string | null
    assignedMethod?: EnumE_AssignedMethodNullableFilter<"Ticket"> | $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: IntNullableFilter<"Ticket"> | number | null
  }

  export type TicketHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: TicketHistoryWhereUniqueInput
    update: XOR<TicketHistoryUpdateWithoutUserInput, TicketHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<TicketHistoryCreateWithoutUserInput, TicketHistoryUncheckedCreateWithoutUserInput>
  }

  export type TicketHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: TicketHistoryWhereUniqueInput
    data: XOR<TicketHistoryUpdateWithoutUserInput, TicketHistoryUncheckedUpdateWithoutUserInput>
  }

  export type TicketHistoryUpdateManyWithWhereWithoutUserInput = {
    where: TicketHistoryScalarWhereInput
    data: XOR<TicketHistoryUpdateManyMutationInput, TicketHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type TicketHistoryScalarWhereInput = {
    AND?: TicketHistoryScalarWhereInput | TicketHistoryScalarWhereInput[]
    OR?: TicketHistoryScalarWhereInput[]
    NOT?: TicketHistoryScalarWhereInput | TicketHistoryScalarWhereInput[]
    id?: IntFilter<"TicketHistory"> | number
    ticketId?: IntFilter<"TicketHistory"> | number
    status?: EnumE_TicketStatusFilter<"TicketHistory"> | $Enums.E_TicketStatus
    changedBy?: IntFilter<"TicketHistory"> | number
    changedAt?: DateTimeFilter<"TicketHistory"> | Date | string
    observation?: StringFilter<"TicketHistory"> | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    message?: StringFilter<"Notification"> | string
    isRead?: BoolFilter<"Notification"> | boolean
    ticketId?: IntNullableFilter<"Notification"> | number | null
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type UserCreateWithoutUserTechnicianInput = {
    name: string
    lastName: string
    email: string
    password: string
    profileImage?: string | null
    genre?: string | null
    dob?: Date | string | null
    cellphone?: string | null
    role?: $Enums.E_Role
    status?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketCreateNestedManyWithoutUserInput
    ticketHistory?: TicketHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserTechnicianInput = {
    id?: number
    name: string
    lastName: string
    email: string
    password: string
    profileImage?: string | null
    genre?: string | null
    dob?: Date | string | null
    cellphone?: string | null
    role?: $Enums.E_Role
    status?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
    ticketHistory?: TicketHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserTechnicianInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserTechnicianInput, UserUncheckedCreateWithoutUserTechnicianInput>
  }

  export type SpecialityAreaCreateWithoutTechniciansInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ticketCategories?: TicketCategoryCreateNestedManyWithoutSpecialitiesInput
  }

  export type SpecialityAreaUncheckedCreateWithoutTechniciansInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ticketCategories?: TicketCategoryUncheckedCreateNestedManyWithoutSpecialitiesInput
  }

  export type SpecialityAreaCreateOrConnectWithoutTechniciansInput = {
    where: SpecialityAreaWhereUniqueInput
    create: XOR<SpecialityAreaCreateWithoutTechniciansInput, SpecialityAreaUncheckedCreateWithoutTechniciansInput>
  }

  export type TicketCreateWithoutTechnicianInput = {
    title: string
    description?: string | null
    status?: $Enums.E_TicketStatus
    priority?: $Enums.E_TicketPriority
    storyPoints?: number | null
    aceptanceCriteria?: string | null
    comments?: string | null
    resolutionDays?: number | null
    slaReply?: Date | string | null
    slaResolution?: Date | string | null
    replyAchieved?: boolean | null
    resolutionAchieved?: boolean | null
    ticketValorationId?: number | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedAt?: Date | string | null
    assignedMethod?: $Enums.E_AssignedMethod | null
    user: UserCreateNestedOneWithoutTicketsInput
    ticketImages?: TicketImageCreateNestedManyWithoutTicketInput
    ticketHistory?: TicketHistoryCreateNestedManyWithoutTicketInput
    ticketCategory: TicketCategoryCreateNestedOneWithoutTicketsInput
    notifications?: NotificationCreateNestedManyWithoutTicketInput
    ticketValoration?: TicketValorationCreateNestedOneWithoutTicketInput
    automaticTriageRule?: AutoTriageRuleCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutTechnicianInput = {
    id?: number
    userId: number
    ticketCategoryId: number
    title: string
    description?: string | null
    status?: $Enums.E_TicketStatus
    priority?: $Enums.E_TicketPriority
    storyPoints?: number | null
    aceptanceCriteria?: string | null
    comments?: string | null
    resolutionDays?: number | null
    slaReply?: Date | string | null
    slaResolution?: Date | string | null
    replyAchieved?: boolean | null
    resolutionAchieved?: boolean | null
    ticketValorationId?: number | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedAt?: Date | string | null
    assignedMethod?: $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: number | null
    ticketImages?: TicketImageUncheckedCreateNestedManyWithoutTicketInput
    ticketHistory?: TicketHistoryUncheckedCreateNestedManyWithoutTicketInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTicketInput
    ticketValoration?: TicketValorationUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutTechnicianInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutTechnicianInput, TicketUncheckedCreateWithoutTechnicianInput>
  }

  export type TicketCreateManyTechnicianInputEnvelope = {
    data: TicketCreateManyTechnicianInput | TicketCreateManyTechnicianInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutUserTechnicianInput = {
    update: XOR<UserUpdateWithoutUserTechnicianInput, UserUncheckedUpdateWithoutUserTechnicianInput>
    create: XOR<UserCreateWithoutUserTechnicianInput, UserUncheckedCreateWithoutUserTechnicianInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserTechnicianInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserTechnicianInput, UserUncheckedUpdateWithoutUserTechnicianInput>
  }

  export type UserUpdateWithoutUserTechnicianInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cellphone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumE_RoleFieldUpdateOperationsInput | $Enums.E_Role
    status?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutUserNestedInput
    ticketHistory?: TicketHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserTechnicianInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cellphone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumE_RoleFieldUpdateOperationsInput | $Enums.E_Role
    status?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
    ticketHistory?: TicketHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SpecialityAreaUpsertWithWhereUniqueWithoutTechniciansInput = {
    where: SpecialityAreaWhereUniqueInput
    update: XOR<SpecialityAreaUpdateWithoutTechniciansInput, SpecialityAreaUncheckedUpdateWithoutTechniciansInput>
    create: XOR<SpecialityAreaCreateWithoutTechniciansInput, SpecialityAreaUncheckedCreateWithoutTechniciansInput>
  }

  export type SpecialityAreaUpdateWithWhereUniqueWithoutTechniciansInput = {
    where: SpecialityAreaWhereUniqueInput
    data: XOR<SpecialityAreaUpdateWithoutTechniciansInput, SpecialityAreaUncheckedUpdateWithoutTechniciansInput>
  }

  export type SpecialityAreaUpdateManyWithWhereWithoutTechniciansInput = {
    where: SpecialityAreaScalarWhereInput
    data: XOR<SpecialityAreaUpdateManyMutationInput, SpecialityAreaUncheckedUpdateManyWithoutTechniciansInput>
  }

  export type SpecialityAreaScalarWhereInput = {
    AND?: SpecialityAreaScalarWhereInput | SpecialityAreaScalarWhereInput[]
    OR?: SpecialityAreaScalarWhereInput[]
    NOT?: SpecialityAreaScalarWhereInput | SpecialityAreaScalarWhereInput[]
    id?: IntFilter<"SpecialityArea"> | number
    name?: StringFilter<"SpecialityArea"> | string
    description?: StringNullableFilter<"SpecialityArea"> | string | null
    createdAt?: DateTimeFilter<"SpecialityArea"> | Date | string
    updatedAt?: DateTimeFilter<"SpecialityArea"> | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutTechnicianInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutTechnicianInput, TicketUncheckedUpdateWithoutTechnicianInput>
    create: XOR<TicketCreateWithoutTechnicianInput, TicketUncheckedCreateWithoutTechnicianInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutTechnicianInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutTechnicianInput, TicketUncheckedUpdateWithoutTechnicianInput>
  }

  export type TicketUpdateManyWithWhereWithoutTechnicianInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutTechnicianInput>
  }

  export type UserTechnicianCreateWithoutSpecialitiesInput = {
    status?: $Enums.E_TechnicianStatus
    workload?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserTechnicianInput
    tickets?: TicketCreateNestedManyWithoutTechnicianInput
  }

  export type UserTechnicianUncheckedCreateWithoutSpecialitiesInput = {
    id?: number
    userId: number
    status?: $Enums.E_TechnicianStatus
    workload?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutTechnicianInput
  }

  export type UserTechnicianCreateOrConnectWithoutSpecialitiesInput = {
    where: UserTechnicianWhereUniqueInput
    create: XOR<UserTechnicianCreateWithoutSpecialitiesInput, UserTechnicianUncheckedCreateWithoutSpecialitiesInput>
  }

  export type TicketCategoryCreateWithoutSpecialitiesInput = {
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    SLA: SLACreateNestedOneWithoutTicketCategoryInput
    categoryEtiquettes?: CategoryEtiquetteCreateNestedManyWithoutTicketCategoriesInput
    tickets?: TicketCreateNestedManyWithoutTicketCategoryInput
  }

  export type TicketCategoryUncheckedCreateWithoutSpecialitiesInput = {
    id?: number
    name: string
    description?: string | null
    slaId: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryEtiquettes?: CategoryEtiquetteUncheckedCreateNestedManyWithoutTicketCategoriesInput
    tickets?: TicketUncheckedCreateNestedManyWithoutTicketCategoryInput
  }

  export type TicketCategoryCreateOrConnectWithoutSpecialitiesInput = {
    where: TicketCategoryWhereUniqueInput
    create: XOR<TicketCategoryCreateWithoutSpecialitiesInput, TicketCategoryUncheckedCreateWithoutSpecialitiesInput>
  }

  export type UserTechnicianUpsertWithWhereUniqueWithoutSpecialitiesInput = {
    where: UserTechnicianWhereUniqueInput
    update: XOR<UserTechnicianUpdateWithoutSpecialitiesInput, UserTechnicianUncheckedUpdateWithoutSpecialitiesInput>
    create: XOR<UserTechnicianCreateWithoutSpecialitiesInput, UserTechnicianUncheckedCreateWithoutSpecialitiesInput>
  }

  export type UserTechnicianUpdateWithWhereUniqueWithoutSpecialitiesInput = {
    where: UserTechnicianWhereUniqueInput
    data: XOR<UserTechnicianUpdateWithoutSpecialitiesInput, UserTechnicianUncheckedUpdateWithoutSpecialitiesInput>
  }

  export type UserTechnicianUpdateManyWithWhereWithoutSpecialitiesInput = {
    where: UserTechnicianScalarWhereInput
    data: XOR<UserTechnicianUpdateManyMutationInput, UserTechnicianUncheckedUpdateManyWithoutSpecialitiesInput>
  }

  export type UserTechnicianScalarWhereInput = {
    AND?: UserTechnicianScalarWhereInput | UserTechnicianScalarWhereInput[]
    OR?: UserTechnicianScalarWhereInput[]
    NOT?: UserTechnicianScalarWhereInput | UserTechnicianScalarWhereInput[]
    id?: IntFilter<"UserTechnician"> | number
    userId?: IntFilter<"UserTechnician"> | number
    status?: EnumE_TechnicianStatusFilter<"UserTechnician"> | $Enums.E_TechnicianStatus
    workload?: IntFilter<"UserTechnician"> | number
    createdAt?: DateTimeFilter<"UserTechnician"> | Date | string
    updatedAt?: DateTimeFilter<"UserTechnician"> | Date | string
  }

  export type TicketCategoryUpsertWithWhereUniqueWithoutSpecialitiesInput = {
    where: TicketCategoryWhereUniqueInput
    update: XOR<TicketCategoryUpdateWithoutSpecialitiesInput, TicketCategoryUncheckedUpdateWithoutSpecialitiesInput>
    create: XOR<TicketCategoryCreateWithoutSpecialitiesInput, TicketCategoryUncheckedCreateWithoutSpecialitiesInput>
  }

  export type TicketCategoryUpdateWithWhereUniqueWithoutSpecialitiesInput = {
    where: TicketCategoryWhereUniqueInput
    data: XOR<TicketCategoryUpdateWithoutSpecialitiesInput, TicketCategoryUncheckedUpdateWithoutSpecialitiesInput>
  }

  export type TicketCategoryUpdateManyWithWhereWithoutSpecialitiesInput = {
    where: TicketCategoryScalarWhereInput
    data: XOR<TicketCategoryUpdateManyMutationInput, TicketCategoryUncheckedUpdateManyWithoutSpecialitiesInput>
  }

  export type TicketCategoryScalarWhereInput = {
    AND?: TicketCategoryScalarWhereInput | TicketCategoryScalarWhereInput[]
    OR?: TicketCategoryScalarWhereInput[]
    NOT?: TicketCategoryScalarWhereInput | TicketCategoryScalarWhereInput[]
    id?: IntFilter<"TicketCategory"> | number
    name?: StringFilter<"TicketCategory"> | string
    description?: StringNullableFilter<"TicketCategory"> | string | null
    slaId?: IntFilter<"TicketCategory"> | number
    imageUrl?: StringNullableFilter<"TicketCategory"> | string | null
    createdAt?: DateTimeFilter<"TicketCategory"> | Date | string
    updatedAt?: DateTimeFilter<"TicketCategory"> | Date | string
  }

  export type TicketCategoryCreateWithoutCategoryEtiquettesInput = {
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    SLA: SLACreateNestedOneWithoutTicketCategoryInput
    specialities?: SpecialityAreaCreateNestedManyWithoutTicketCategoriesInput
    tickets?: TicketCreateNestedManyWithoutTicketCategoryInput
  }

  export type TicketCategoryUncheckedCreateWithoutCategoryEtiquettesInput = {
    id?: number
    name: string
    description?: string | null
    slaId: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    specialities?: SpecialityAreaUncheckedCreateNestedManyWithoutTicketCategoriesInput
    tickets?: TicketUncheckedCreateNestedManyWithoutTicketCategoryInput
  }

  export type TicketCategoryCreateOrConnectWithoutCategoryEtiquettesInput = {
    where: TicketCategoryWhereUniqueInput
    create: XOR<TicketCategoryCreateWithoutCategoryEtiquettesInput, TicketCategoryUncheckedCreateWithoutCategoryEtiquettesInput>
  }

  export type TicketCategoryUpsertWithWhereUniqueWithoutCategoryEtiquettesInput = {
    where: TicketCategoryWhereUniqueInput
    update: XOR<TicketCategoryUpdateWithoutCategoryEtiquettesInput, TicketCategoryUncheckedUpdateWithoutCategoryEtiquettesInput>
    create: XOR<TicketCategoryCreateWithoutCategoryEtiquettesInput, TicketCategoryUncheckedCreateWithoutCategoryEtiquettesInput>
  }

  export type TicketCategoryUpdateWithWhereUniqueWithoutCategoryEtiquettesInput = {
    where: TicketCategoryWhereUniqueInput
    data: XOR<TicketCategoryUpdateWithoutCategoryEtiquettesInput, TicketCategoryUncheckedUpdateWithoutCategoryEtiquettesInput>
  }

  export type TicketCategoryUpdateManyWithWhereWithoutCategoryEtiquettesInput = {
    where: TicketCategoryScalarWhereInput
    data: XOR<TicketCategoryUpdateManyMutationInput, TicketCategoryUncheckedUpdateManyWithoutCategoryEtiquettesInput>
  }

  export type TicketCategoryCreateWithoutSLAInput = {
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    specialities?: SpecialityAreaCreateNestedManyWithoutTicketCategoriesInput
    categoryEtiquettes?: CategoryEtiquetteCreateNestedManyWithoutTicketCategoriesInput
    tickets?: TicketCreateNestedManyWithoutTicketCategoryInput
  }

  export type TicketCategoryUncheckedCreateWithoutSLAInput = {
    id?: number
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    specialities?: SpecialityAreaUncheckedCreateNestedManyWithoutTicketCategoriesInput
    categoryEtiquettes?: CategoryEtiquetteUncheckedCreateNestedManyWithoutTicketCategoriesInput
    tickets?: TicketUncheckedCreateNestedManyWithoutTicketCategoryInput
  }

  export type TicketCategoryCreateOrConnectWithoutSLAInput = {
    where: TicketCategoryWhereUniqueInput
    create: XOR<TicketCategoryCreateWithoutSLAInput, TicketCategoryUncheckedCreateWithoutSLAInput>
  }

  export type TicketCategoryCreateManySLAInputEnvelope = {
    data: TicketCategoryCreateManySLAInput | TicketCategoryCreateManySLAInput[]
    skipDuplicates?: boolean
  }

  export type TicketCategoryUpsertWithWhereUniqueWithoutSLAInput = {
    where: TicketCategoryWhereUniqueInput
    update: XOR<TicketCategoryUpdateWithoutSLAInput, TicketCategoryUncheckedUpdateWithoutSLAInput>
    create: XOR<TicketCategoryCreateWithoutSLAInput, TicketCategoryUncheckedCreateWithoutSLAInput>
  }

  export type TicketCategoryUpdateWithWhereUniqueWithoutSLAInput = {
    where: TicketCategoryWhereUniqueInput
    data: XOR<TicketCategoryUpdateWithoutSLAInput, TicketCategoryUncheckedUpdateWithoutSLAInput>
  }

  export type TicketCategoryUpdateManyWithWhereWithoutSLAInput = {
    where: TicketCategoryScalarWhereInput
    data: XOR<TicketCategoryUpdateManyMutationInput, TicketCategoryUncheckedUpdateManyWithoutSLAInput>
  }

  export type SLACreateWithoutTicketCategoryInput = {
    name: string
    description?: string | null
    slaReplyHours: number
    slaResolutionHours: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SLAUncheckedCreateWithoutTicketCategoryInput = {
    id?: number
    name: string
    description?: string | null
    slaReplyHours: number
    slaResolutionHours: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SLACreateOrConnectWithoutTicketCategoryInput = {
    where: SLAWhereUniqueInput
    create: XOR<SLACreateWithoutTicketCategoryInput, SLAUncheckedCreateWithoutTicketCategoryInput>
  }

  export type SpecialityAreaCreateWithoutTicketCategoriesInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    technicians?: UserTechnicianCreateNestedManyWithoutSpecialitiesInput
  }

  export type SpecialityAreaUncheckedCreateWithoutTicketCategoriesInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    technicians?: UserTechnicianUncheckedCreateNestedManyWithoutSpecialitiesInput
  }

  export type SpecialityAreaCreateOrConnectWithoutTicketCategoriesInput = {
    where: SpecialityAreaWhereUniqueInput
    create: XOR<SpecialityAreaCreateWithoutTicketCategoriesInput, SpecialityAreaUncheckedCreateWithoutTicketCategoriesInput>
  }

  export type CategoryEtiquetteCreateWithoutTicketCategoriesInput = {
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryEtiquetteUncheckedCreateWithoutTicketCategoriesInput = {
    id?: number
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryEtiquetteCreateOrConnectWithoutTicketCategoriesInput = {
    where: CategoryEtiquetteWhereUniqueInput
    create: XOR<CategoryEtiquetteCreateWithoutTicketCategoriesInput, CategoryEtiquetteUncheckedCreateWithoutTicketCategoriesInput>
  }

  export type TicketCreateWithoutTicketCategoryInput = {
    title: string
    description?: string | null
    status?: $Enums.E_TicketStatus
    priority?: $Enums.E_TicketPriority
    storyPoints?: number | null
    aceptanceCriteria?: string | null
    comments?: string | null
    resolutionDays?: number | null
    slaReply?: Date | string | null
    slaResolution?: Date | string | null
    replyAchieved?: boolean | null
    resolutionAchieved?: boolean | null
    ticketValorationId?: number | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedAt?: Date | string | null
    assignedMethod?: $Enums.E_AssignedMethod | null
    user: UserCreateNestedOneWithoutTicketsInput
    technician?: UserTechnicianCreateNestedOneWithoutTicketsInput
    ticketImages?: TicketImageCreateNestedManyWithoutTicketInput
    ticketHistory?: TicketHistoryCreateNestedManyWithoutTicketInput
    notifications?: NotificationCreateNestedManyWithoutTicketInput
    ticketValoration?: TicketValorationCreateNestedOneWithoutTicketInput
    automaticTriageRule?: AutoTriageRuleCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutTicketCategoryInput = {
    id?: number
    userId: number
    technicianId?: number | null
    title: string
    description?: string | null
    status?: $Enums.E_TicketStatus
    priority?: $Enums.E_TicketPriority
    storyPoints?: number | null
    aceptanceCriteria?: string | null
    comments?: string | null
    resolutionDays?: number | null
    slaReply?: Date | string | null
    slaResolution?: Date | string | null
    replyAchieved?: boolean | null
    resolutionAchieved?: boolean | null
    ticketValorationId?: number | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedAt?: Date | string | null
    assignedMethod?: $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: number | null
    ticketImages?: TicketImageUncheckedCreateNestedManyWithoutTicketInput
    ticketHistory?: TicketHistoryUncheckedCreateNestedManyWithoutTicketInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTicketInput
    ticketValoration?: TicketValorationUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutTicketCategoryInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutTicketCategoryInput, TicketUncheckedCreateWithoutTicketCategoryInput>
  }

  export type TicketCreateManyTicketCategoryInputEnvelope = {
    data: TicketCreateManyTicketCategoryInput | TicketCreateManyTicketCategoryInput[]
    skipDuplicates?: boolean
  }

  export type SLAUpsertWithoutTicketCategoryInput = {
    update: XOR<SLAUpdateWithoutTicketCategoryInput, SLAUncheckedUpdateWithoutTicketCategoryInput>
    create: XOR<SLACreateWithoutTicketCategoryInput, SLAUncheckedCreateWithoutTicketCategoryInput>
    where?: SLAWhereInput
  }

  export type SLAUpdateToOneWithWhereWithoutTicketCategoryInput = {
    where?: SLAWhereInput
    data: XOR<SLAUpdateWithoutTicketCategoryInput, SLAUncheckedUpdateWithoutTicketCategoryInput>
  }

  export type SLAUpdateWithoutTicketCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slaReplyHours?: IntFieldUpdateOperationsInput | number
    slaResolutionHours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SLAUncheckedUpdateWithoutTicketCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slaReplyHours?: IntFieldUpdateOperationsInput | number
    slaResolutionHours?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SpecialityAreaUpsertWithWhereUniqueWithoutTicketCategoriesInput = {
    where: SpecialityAreaWhereUniqueInput
    update: XOR<SpecialityAreaUpdateWithoutTicketCategoriesInput, SpecialityAreaUncheckedUpdateWithoutTicketCategoriesInput>
    create: XOR<SpecialityAreaCreateWithoutTicketCategoriesInput, SpecialityAreaUncheckedCreateWithoutTicketCategoriesInput>
  }

  export type SpecialityAreaUpdateWithWhereUniqueWithoutTicketCategoriesInput = {
    where: SpecialityAreaWhereUniqueInput
    data: XOR<SpecialityAreaUpdateWithoutTicketCategoriesInput, SpecialityAreaUncheckedUpdateWithoutTicketCategoriesInput>
  }

  export type SpecialityAreaUpdateManyWithWhereWithoutTicketCategoriesInput = {
    where: SpecialityAreaScalarWhereInput
    data: XOR<SpecialityAreaUpdateManyMutationInput, SpecialityAreaUncheckedUpdateManyWithoutTicketCategoriesInput>
  }

  export type CategoryEtiquetteUpsertWithWhereUniqueWithoutTicketCategoriesInput = {
    where: CategoryEtiquetteWhereUniqueInput
    update: XOR<CategoryEtiquetteUpdateWithoutTicketCategoriesInput, CategoryEtiquetteUncheckedUpdateWithoutTicketCategoriesInput>
    create: XOR<CategoryEtiquetteCreateWithoutTicketCategoriesInput, CategoryEtiquetteUncheckedCreateWithoutTicketCategoriesInput>
  }

  export type CategoryEtiquetteUpdateWithWhereUniqueWithoutTicketCategoriesInput = {
    where: CategoryEtiquetteWhereUniqueInput
    data: XOR<CategoryEtiquetteUpdateWithoutTicketCategoriesInput, CategoryEtiquetteUncheckedUpdateWithoutTicketCategoriesInput>
  }

  export type CategoryEtiquetteUpdateManyWithWhereWithoutTicketCategoriesInput = {
    where: CategoryEtiquetteScalarWhereInput
    data: XOR<CategoryEtiquetteUpdateManyMutationInput, CategoryEtiquetteUncheckedUpdateManyWithoutTicketCategoriesInput>
  }

  export type CategoryEtiquetteScalarWhereInput = {
    AND?: CategoryEtiquetteScalarWhereInput | CategoryEtiquetteScalarWhereInput[]
    OR?: CategoryEtiquetteScalarWhereInput[]
    NOT?: CategoryEtiquetteScalarWhereInput | CategoryEtiquetteScalarWhereInput[]
    id?: IntFilter<"CategoryEtiquette"> | number
    name?: StringFilter<"CategoryEtiquette"> | string
    description?: StringNullableFilter<"CategoryEtiquette"> | string | null
    createdAt?: DateTimeFilter<"CategoryEtiquette"> | Date | string
    updatedAt?: DateTimeFilter<"CategoryEtiquette"> | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutTicketCategoryInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutTicketCategoryInput, TicketUncheckedUpdateWithoutTicketCategoryInput>
    create: XOR<TicketCreateWithoutTicketCategoryInput, TicketUncheckedCreateWithoutTicketCategoryInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutTicketCategoryInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutTicketCategoryInput, TicketUncheckedUpdateWithoutTicketCategoryInput>
  }

  export type TicketUpdateManyWithWhereWithoutTicketCategoryInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutTicketCategoryInput>
  }

  export type TicketCreateWithoutAutomaticTriageRuleInput = {
    title: string
    description?: string | null
    status?: $Enums.E_TicketStatus
    priority?: $Enums.E_TicketPriority
    storyPoints?: number | null
    aceptanceCriteria?: string | null
    comments?: string | null
    resolutionDays?: number | null
    slaReply?: Date | string | null
    slaResolution?: Date | string | null
    replyAchieved?: boolean | null
    resolutionAchieved?: boolean | null
    ticketValorationId?: number | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedAt?: Date | string | null
    assignedMethod?: $Enums.E_AssignedMethod | null
    user: UserCreateNestedOneWithoutTicketsInput
    technician?: UserTechnicianCreateNestedOneWithoutTicketsInput
    ticketImages?: TicketImageCreateNestedManyWithoutTicketInput
    ticketHistory?: TicketHistoryCreateNestedManyWithoutTicketInput
    ticketCategory: TicketCategoryCreateNestedOneWithoutTicketsInput
    notifications?: NotificationCreateNestedManyWithoutTicketInput
    ticketValoration?: TicketValorationCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutAutomaticTriageRuleInput = {
    id?: number
    userId: number
    technicianId?: number | null
    ticketCategoryId: number
    title: string
    description?: string | null
    status?: $Enums.E_TicketStatus
    priority?: $Enums.E_TicketPriority
    storyPoints?: number | null
    aceptanceCriteria?: string | null
    comments?: string | null
    resolutionDays?: number | null
    slaReply?: Date | string | null
    slaResolution?: Date | string | null
    replyAchieved?: boolean | null
    resolutionAchieved?: boolean | null
    ticketValorationId?: number | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedAt?: Date | string | null
    assignedMethod?: $Enums.E_AssignedMethod | null
    ticketImages?: TicketImageUncheckedCreateNestedManyWithoutTicketInput
    ticketHistory?: TicketHistoryUncheckedCreateNestedManyWithoutTicketInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTicketInput
    ticketValoration?: TicketValorationUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutAutomaticTriageRuleInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutAutomaticTriageRuleInput, TicketUncheckedCreateWithoutAutomaticTriageRuleInput>
  }

  export type TicketCreateManyAutomaticTriageRuleInputEnvelope = {
    data: TicketCreateManyAutomaticTriageRuleInput | TicketCreateManyAutomaticTriageRuleInput[]
    skipDuplicates?: boolean
  }

  export type TicketUpsertWithWhereUniqueWithoutAutomaticTriageRuleInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutAutomaticTriageRuleInput, TicketUncheckedUpdateWithoutAutomaticTriageRuleInput>
    create: XOR<TicketCreateWithoutAutomaticTriageRuleInput, TicketUncheckedCreateWithoutAutomaticTriageRuleInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutAutomaticTriageRuleInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutAutomaticTriageRuleInput, TicketUncheckedUpdateWithoutAutomaticTriageRuleInput>
  }

  export type TicketUpdateManyWithWhereWithoutAutomaticTriageRuleInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutAutomaticTriageRuleInput>
  }

  export type UserCreateWithoutTicketsInput = {
    name: string
    lastName: string
    email: string
    password: string
    profileImage?: string | null
    genre?: string | null
    dob?: Date | string | null
    cellphone?: string | null
    role?: $Enums.E_Role
    status?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userTechnician?: UserTechnicianCreateNestedOneWithoutUserInput
    ticketHistory?: TicketHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTicketsInput = {
    id?: number
    name: string
    lastName: string
    email: string
    password: string
    profileImage?: string | null
    genre?: string | null
    dob?: Date | string | null
    cellphone?: string | null
    role?: $Enums.E_Role
    status?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userTechnician?: UserTechnicianUncheckedCreateNestedOneWithoutUserInput
    ticketHistory?: TicketHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTicketsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
  }

  export type UserTechnicianCreateWithoutTicketsInput = {
    status?: $Enums.E_TechnicianStatus
    workload?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserTechnicianInput
    specialities?: SpecialityAreaCreateNestedManyWithoutTechniciansInput
  }

  export type UserTechnicianUncheckedCreateWithoutTicketsInput = {
    id?: number
    userId: number
    status?: $Enums.E_TechnicianStatus
    workload?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    specialities?: SpecialityAreaUncheckedCreateNestedManyWithoutTechniciansInput
  }

  export type UserTechnicianCreateOrConnectWithoutTicketsInput = {
    where: UserTechnicianWhereUniqueInput
    create: XOR<UserTechnicianCreateWithoutTicketsInput, UserTechnicianUncheckedCreateWithoutTicketsInput>
  }

  export type TicketImageCreateWithoutTicketInput = {
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticketHistory?: TicketHistoryCreateNestedOneWithoutTicketImagesInput
  }

  export type TicketImageUncheckedCreateWithoutTicketInput = {
    id?: number
    ticketHistoryId?: number | null
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketImageCreateOrConnectWithoutTicketInput = {
    where: TicketImageWhereUniqueInput
    create: XOR<TicketImageCreateWithoutTicketInput, TicketImageUncheckedCreateWithoutTicketInput>
  }

  export type TicketImageCreateManyTicketInputEnvelope = {
    data: TicketImageCreateManyTicketInput | TicketImageCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type TicketHistoryCreateWithoutTicketInput = {
    status: $Enums.E_TicketStatus
    changedAt?: Date | string
    observation: string
    user: UserCreateNestedOneWithoutTicketHistoryInput
    ticketImages?: TicketImageCreateNestedManyWithoutTicketHistoryInput
  }

  export type TicketHistoryUncheckedCreateWithoutTicketInput = {
    id?: number
    status: $Enums.E_TicketStatus
    changedBy: number
    changedAt?: Date | string
    observation: string
    ticketImages?: TicketImageUncheckedCreateNestedManyWithoutTicketHistoryInput
  }

  export type TicketHistoryCreateOrConnectWithoutTicketInput = {
    where: TicketHistoryWhereUniqueInput
    create: XOR<TicketHistoryCreateWithoutTicketInput, TicketHistoryUncheckedCreateWithoutTicketInput>
  }

  export type TicketHistoryCreateManyTicketInputEnvelope = {
    data: TicketHistoryCreateManyTicketInput | TicketHistoryCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type TicketCategoryCreateWithoutTicketsInput = {
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    SLA: SLACreateNestedOneWithoutTicketCategoryInput
    specialities?: SpecialityAreaCreateNestedManyWithoutTicketCategoriesInput
    categoryEtiquettes?: CategoryEtiquetteCreateNestedManyWithoutTicketCategoriesInput
  }

  export type TicketCategoryUncheckedCreateWithoutTicketsInput = {
    id?: number
    name: string
    description?: string | null
    slaId: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    specialities?: SpecialityAreaUncheckedCreateNestedManyWithoutTicketCategoriesInput
    categoryEtiquettes?: CategoryEtiquetteUncheckedCreateNestedManyWithoutTicketCategoriesInput
  }

  export type TicketCategoryCreateOrConnectWithoutTicketsInput = {
    where: TicketCategoryWhereUniqueInput
    create: XOR<TicketCategoryCreateWithoutTicketsInput, TicketCategoryUncheckedCreateWithoutTicketsInput>
  }

  export type NotificationCreateWithoutTicketInput = {
    message: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutTicketInput = {
    id?: number
    userId: number
    message: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutTicketInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutTicketInput, NotificationUncheckedCreateWithoutTicketInput>
  }

  export type NotificationCreateManyTicketInputEnvelope = {
    data: NotificationCreateManyTicketInput | NotificationCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type TicketValorationCreateWithoutTicketInput = {
    rating: number
    comments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketValorationUncheckedCreateWithoutTicketInput = {
    id?: number
    rating: number
    comments?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketValorationCreateOrConnectWithoutTicketInput = {
    where: TicketValorationWhereUniqueInput
    create: XOR<TicketValorationCreateWithoutTicketInput, TicketValorationUncheckedCreateWithoutTicketInput>
  }

  export type AutoTriageRuleCreateWithoutTicketInput = {
    timeRemainingSLA: number
    ticketPriority: $Enums.E_TicketPriority
    technicianSpecialityId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutoTriageRuleUncheckedCreateWithoutTicketInput = {
    id?: number
    timeRemainingSLA: number
    ticketPriority: $Enums.E_TicketPriority
    technicianSpecialityId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AutoTriageRuleCreateOrConnectWithoutTicketInput = {
    where: AutoTriageRuleWhereUniqueInput
    create: XOR<AutoTriageRuleCreateWithoutTicketInput, AutoTriageRuleUncheckedCreateWithoutTicketInput>
  }

  export type UserUpsertWithoutTicketsInput = {
    update: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
    create: XOR<UserCreateWithoutTicketsInput, UserUncheckedCreateWithoutTicketsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketsInput, UserUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateWithoutTicketsInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cellphone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumE_RoleFieldUpdateOperationsInput | $Enums.E_Role
    status?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTechnician?: UserTechnicianUpdateOneWithoutUserNestedInput
    ticketHistory?: TicketHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cellphone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumE_RoleFieldUpdateOperationsInput | $Enums.E_Role
    status?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTechnician?: UserTechnicianUncheckedUpdateOneWithoutUserNestedInput
    ticketHistory?: TicketHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserTechnicianUpsertWithoutTicketsInput = {
    update: XOR<UserTechnicianUpdateWithoutTicketsInput, UserTechnicianUncheckedUpdateWithoutTicketsInput>
    create: XOR<UserTechnicianCreateWithoutTicketsInput, UserTechnicianUncheckedCreateWithoutTicketsInput>
    where?: UserTechnicianWhereInput
  }

  export type UserTechnicianUpdateToOneWithWhereWithoutTicketsInput = {
    where?: UserTechnicianWhereInput
    data: XOR<UserTechnicianUpdateWithoutTicketsInput, UserTechnicianUncheckedUpdateWithoutTicketsInput>
  }

  export type UserTechnicianUpdateWithoutTicketsInput = {
    status?: EnumE_TechnicianStatusFieldUpdateOperationsInput | $Enums.E_TechnicianStatus
    workload?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserTechnicianNestedInput
    specialities?: SpecialityAreaUpdateManyWithoutTechniciansNestedInput
  }

  export type UserTechnicianUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumE_TechnicianStatusFieldUpdateOperationsInput | $Enums.E_TechnicianStatus
    workload?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialities?: SpecialityAreaUncheckedUpdateManyWithoutTechniciansNestedInput
  }

  export type TicketImageUpsertWithWhereUniqueWithoutTicketInput = {
    where: TicketImageWhereUniqueInput
    update: XOR<TicketImageUpdateWithoutTicketInput, TicketImageUncheckedUpdateWithoutTicketInput>
    create: XOR<TicketImageCreateWithoutTicketInput, TicketImageUncheckedCreateWithoutTicketInput>
  }

  export type TicketImageUpdateWithWhereUniqueWithoutTicketInput = {
    where: TicketImageWhereUniqueInput
    data: XOR<TicketImageUpdateWithoutTicketInput, TicketImageUncheckedUpdateWithoutTicketInput>
  }

  export type TicketImageUpdateManyWithWhereWithoutTicketInput = {
    where: TicketImageScalarWhereInput
    data: XOR<TicketImageUpdateManyMutationInput, TicketImageUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketImageScalarWhereInput = {
    AND?: TicketImageScalarWhereInput | TicketImageScalarWhereInput[]
    OR?: TicketImageScalarWhereInput[]
    NOT?: TicketImageScalarWhereInput | TicketImageScalarWhereInput[]
    id?: IntFilter<"TicketImage"> | number
    ticketId?: IntNullableFilter<"TicketImage"> | number | null
    ticketHistoryId?: IntNullableFilter<"TicketImage"> | number | null
    imageUrl?: StringFilter<"TicketImage"> | string
    createdAt?: DateTimeFilter<"TicketImage"> | Date | string
    updatedAt?: DateTimeFilter<"TicketImage"> | Date | string
  }

  export type TicketHistoryUpsertWithWhereUniqueWithoutTicketInput = {
    where: TicketHistoryWhereUniqueInput
    update: XOR<TicketHistoryUpdateWithoutTicketInput, TicketHistoryUncheckedUpdateWithoutTicketInput>
    create: XOR<TicketHistoryCreateWithoutTicketInput, TicketHistoryUncheckedCreateWithoutTicketInput>
  }

  export type TicketHistoryUpdateWithWhereUniqueWithoutTicketInput = {
    where: TicketHistoryWhereUniqueInput
    data: XOR<TicketHistoryUpdateWithoutTicketInput, TicketHistoryUncheckedUpdateWithoutTicketInput>
  }

  export type TicketHistoryUpdateManyWithWhereWithoutTicketInput = {
    where: TicketHistoryScalarWhereInput
    data: XOR<TicketHistoryUpdateManyMutationInput, TicketHistoryUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketCategoryUpsertWithoutTicketsInput = {
    update: XOR<TicketCategoryUpdateWithoutTicketsInput, TicketCategoryUncheckedUpdateWithoutTicketsInput>
    create: XOR<TicketCategoryCreateWithoutTicketsInput, TicketCategoryUncheckedCreateWithoutTicketsInput>
    where?: TicketCategoryWhereInput
  }

  export type TicketCategoryUpdateToOneWithWhereWithoutTicketsInput = {
    where?: TicketCategoryWhereInput
    data: XOR<TicketCategoryUpdateWithoutTicketsInput, TicketCategoryUncheckedUpdateWithoutTicketsInput>
  }

  export type TicketCategoryUpdateWithoutTicketsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SLA?: SLAUpdateOneRequiredWithoutTicketCategoryNestedInput
    specialities?: SpecialityAreaUpdateManyWithoutTicketCategoriesNestedInput
    categoryEtiquettes?: CategoryEtiquetteUpdateManyWithoutTicketCategoriesNestedInput
  }

  export type TicketCategoryUncheckedUpdateWithoutTicketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slaId?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialities?: SpecialityAreaUncheckedUpdateManyWithoutTicketCategoriesNestedInput
    categoryEtiquettes?: CategoryEtiquetteUncheckedUpdateManyWithoutTicketCategoriesNestedInput
  }

  export type NotificationUpsertWithWhereUniqueWithoutTicketInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutTicketInput, NotificationUncheckedUpdateWithoutTicketInput>
    create: XOR<NotificationCreateWithoutTicketInput, NotificationUncheckedCreateWithoutTicketInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutTicketInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutTicketInput, NotificationUncheckedUpdateWithoutTicketInput>
  }

  export type NotificationUpdateManyWithWhereWithoutTicketInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketValorationUpsertWithoutTicketInput = {
    update: XOR<TicketValorationUpdateWithoutTicketInput, TicketValorationUncheckedUpdateWithoutTicketInput>
    create: XOR<TicketValorationCreateWithoutTicketInput, TicketValorationUncheckedCreateWithoutTicketInput>
    where?: TicketValorationWhereInput
  }

  export type TicketValorationUpdateToOneWithWhereWithoutTicketInput = {
    where?: TicketValorationWhereInput
    data: XOR<TicketValorationUpdateWithoutTicketInput, TicketValorationUncheckedUpdateWithoutTicketInput>
  }

  export type TicketValorationUpdateWithoutTicketInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketValorationUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutoTriageRuleUpsertWithoutTicketInput = {
    update: XOR<AutoTriageRuleUpdateWithoutTicketInput, AutoTriageRuleUncheckedUpdateWithoutTicketInput>
    create: XOR<AutoTriageRuleCreateWithoutTicketInput, AutoTriageRuleUncheckedCreateWithoutTicketInput>
    where?: AutoTriageRuleWhereInput
  }

  export type AutoTriageRuleUpdateToOneWithWhereWithoutTicketInput = {
    where?: AutoTriageRuleWhereInput
    data: XOR<AutoTriageRuleUpdateWithoutTicketInput, AutoTriageRuleUncheckedUpdateWithoutTicketInput>
  }

  export type AutoTriageRuleUpdateWithoutTicketInput = {
    timeRemainingSLA?: IntFieldUpdateOperationsInput | number
    ticketPriority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    technicianSpecialityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AutoTriageRuleUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    timeRemainingSLA?: IntFieldUpdateOperationsInput | number
    ticketPriority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    technicianSpecialityId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateWithoutTicketImagesInput = {
    title: string
    description?: string | null
    status?: $Enums.E_TicketStatus
    priority?: $Enums.E_TicketPriority
    storyPoints?: number | null
    aceptanceCriteria?: string | null
    comments?: string | null
    resolutionDays?: number | null
    slaReply?: Date | string | null
    slaResolution?: Date | string | null
    replyAchieved?: boolean | null
    resolutionAchieved?: boolean | null
    ticketValorationId?: number | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedAt?: Date | string | null
    assignedMethod?: $Enums.E_AssignedMethod | null
    user: UserCreateNestedOneWithoutTicketsInput
    technician?: UserTechnicianCreateNestedOneWithoutTicketsInput
    ticketHistory?: TicketHistoryCreateNestedManyWithoutTicketInput
    ticketCategory: TicketCategoryCreateNestedOneWithoutTicketsInput
    notifications?: NotificationCreateNestedManyWithoutTicketInput
    ticketValoration?: TicketValorationCreateNestedOneWithoutTicketInput
    automaticTriageRule?: AutoTriageRuleCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutTicketImagesInput = {
    id?: number
    userId: number
    technicianId?: number | null
    ticketCategoryId: number
    title: string
    description?: string | null
    status?: $Enums.E_TicketStatus
    priority?: $Enums.E_TicketPriority
    storyPoints?: number | null
    aceptanceCriteria?: string | null
    comments?: string | null
    resolutionDays?: number | null
    slaReply?: Date | string | null
    slaResolution?: Date | string | null
    replyAchieved?: boolean | null
    resolutionAchieved?: boolean | null
    ticketValorationId?: number | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedAt?: Date | string | null
    assignedMethod?: $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: number | null
    ticketHistory?: TicketHistoryUncheckedCreateNestedManyWithoutTicketInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTicketInput
    ticketValoration?: TicketValorationUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutTicketImagesInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutTicketImagesInput, TicketUncheckedCreateWithoutTicketImagesInput>
  }

  export type TicketHistoryCreateWithoutTicketImagesInput = {
    status: $Enums.E_TicketStatus
    changedAt?: Date | string
    observation: string
    ticket: TicketCreateNestedOneWithoutTicketHistoryInput
    user: UserCreateNestedOneWithoutTicketHistoryInput
  }

  export type TicketHistoryUncheckedCreateWithoutTicketImagesInput = {
    id?: number
    ticketId: number
    status: $Enums.E_TicketStatus
    changedBy: number
    changedAt?: Date | string
    observation: string
  }

  export type TicketHistoryCreateOrConnectWithoutTicketImagesInput = {
    where: TicketHistoryWhereUniqueInput
    create: XOR<TicketHistoryCreateWithoutTicketImagesInput, TicketHistoryUncheckedCreateWithoutTicketImagesInput>
  }

  export type TicketUpsertWithoutTicketImagesInput = {
    update: XOR<TicketUpdateWithoutTicketImagesInput, TicketUncheckedUpdateWithoutTicketImagesInput>
    create: XOR<TicketCreateWithoutTicketImagesInput, TicketUncheckedCreateWithoutTicketImagesInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutTicketImagesInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutTicketImagesInput, TicketUncheckedUpdateWithoutTicketImagesInput>
  }

  export type TicketUpdateWithoutTicketImagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    aceptanceCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionDays?: NullableIntFieldUpdateOperationsInput | number | null
    slaReply?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaResolution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resolutionAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketValorationId?: NullableIntFieldUpdateOperationsInput | number | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedMethod?: NullableEnumE_AssignedMethodFieldUpdateOperationsInput | $Enums.E_AssignedMethod | null
    user?: UserUpdateOneRequiredWithoutTicketsNestedInput
    technician?: UserTechnicianUpdateOneWithoutTicketsNestedInput
    ticketHistory?: TicketHistoryUpdateManyWithoutTicketNestedInput
    ticketCategory?: TicketCategoryUpdateOneRequiredWithoutTicketsNestedInput
    notifications?: NotificationUpdateManyWithoutTicketNestedInput
    ticketValoration?: TicketValorationUpdateOneWithoutTicketNestedInput
    automaticTriageRule?: AutoTriageRuleUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutTicketImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    technicianId?: NullableIntFieldUpdateOperationsInput | number | null
    ticketCategoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    aceptanceCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionDays?: NullableIntFieldUpdateOperationsInput | number | null
    slaReply?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaResolution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resolutionAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketValorationId?: NullableIntFieldUpdateOperationsInput | number | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedMethod?: NullableEnumE_AssignedMethodFieldUpdateOperationsInput | $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: NullableIntFieldUpdateOperationsInput | number | null
    ticketHistory?: TicketHistoryUncheckedUpdateManyWithoutTicketNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTicketNestedInput
    ticketValoration?: TicketValorationUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketHistoryUpsertWithoutTicketImagesInput = {
    update: XOR<TicketHistoryUpdateWithoutTicketImagesInput, TicketHistoryUncheckedUpdateWithoutTicketImagesInput>
    create: XOR<TicketHistoryCreateWithoutTicketImagesInput, TicketHistoryUncheckedCreateWithoutTicketImagesInput>
    where?: TicketHistoryWhereInput
  }

  export type TicketHistoryUpdateToOneWithWhereWithoutTicketImagesInput = {
    where?: TicketHistoryWhereInput
    data: XOR<TicketHistoryUpdateWithoutTicketImagesInput, TicketHistoryUncheckedUpdateWithoutTicketImagesInput>
  }

  export type TicketHistoryUpdateWithoutTicketImagesInput = {
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    observation?: StringFieldUpdateOperationsInput | string
    ticket?: TicketUpdateOneRequiredWithoutTicketHistoryNestedInput
    user?: UserUpdateOneRequiredWithoutTicketHistoryNestedInput
  }

  export type TicketHistoryUncheckedUpdateWithoutTicketImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    changedBy?: IntFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    observation?: StringFieldUpdateOperationsInput | string
  }

  export type TicketCreateWithoutTicketHistoryInput = {
    title: string
    description?: string | null
    status?: $Enums.E_TicketStatus
    priority?: $Enums.E_TicketPriority
    storyPoints?: number | null
    aceptanceCriteria?: string | null
    comments?: string | null
    resolutionDays?: number | null
    slaReply?: Date | string | null
    slaResolution?: Date | string | null
    replyAchieved?: boolean | null
    resolutionAchieved?: boolean | null
    ticketValorationId?: number | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedAt?: Date | string | null
    assignedMethod?: $Enums.E_AssignedMethod | null
    user: UserCreateNestedOneWithoutTicketsInput
    technician?: UserTechnicianCreateNestedOneWithoutTicketsInput
    ticketImages?: TicketImageCreateNestedManyWithoutTicketInput
    ticketCategory: TicketCategoryCreateNestedOneWithoutTicketsInput
    notifications?: NotificationCreateNestedManyWithoutTicketInput
    ticketValoration?: TicketValorationCreateNestedOneWithoutTicketInput
    automaticTriageRule?: AutoTriageRuleCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutTicketHistoryInput = {
    id?: number
    userId: number
    technicianId?: number | null
    ticketCategoryId: number
    title: string
    description?: string | null
    status?: $Enums.E_TicketStatus
    priority?: $Enums.E_TicketPriority
    storyPoints?: number | null
    aceptanceCriteria?: string | null
    comments?: string | null
    resolutionDays?: number | null
    slaReply?: Date | string | null
    slaResolution?: Date | string | null
    replyAchieved?: boolean | null
    resolutionAchieved?: boolean | null
    ticketValorationId?: number | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedAt?: Date | string | null
    assignedMethod?: $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: number | null
    ticketImages?: TicketImageUncheckedCreateNestedManyWithoutTicketInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTicketInput
    ticketValoration?: TicketValorationUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutTicketHistoryInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutTicketHistoryInput, TicketUncheckedCreateWithoutTicketHistoryInput>
  }

  export type UserCreateWithoutTicketHistoryInput = {
    name: string
    lastName: string
    email: string
    password: string
    profileImage?: string | null
    genre?: string | null
    dob?: Date | string | null
    cellphone?: string | null
    role?: $Enums.E_Role
    status?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userTechnician?: UserTechnicianCreateNestedOneWithoutUserInput
    tickets?: TicketCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTicketHistoryInput = {
    id?: number
    name: string
    lastName: string
    email: string
    password: string
    profileImage?: string | null
    genre?: string | null
    dob?: Date | string | null
    cellphone?: string | null
    role?: $Enums.E_Role
    status?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userTechnician?: UserTechnicianUncheckedCreateNestedOneWithoutUserInput
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTicketHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketHistoryInput, UserUncheckedCreateWithoutTicketHistoryInput>
  }

  export type TicketImageCreateWithoutTicketHistoryInput = {
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    ticket?: TicketCreateNestedOneWithoutTicketImagesInput
  }

  export type TicketImageUncheckedCreateWithoutTicketHistoryInput = {
    id?: number
    ticketId?: number | null
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketImageCreateOrConnectWithoutTicketHistoryInput = {
    where: TicketImageWhereUniqueInput
    create: XOR<TicketImageCreateWithoutTicketHistoryInput, TicketImageUncheckedCreateWithoutTicketHistoryInput>
  }

  export type TicketImageCreateManyTicketHistoryInputEnvelope = {
    data: TicketImageCreateManyTicketHistoryInput | TicketImageCreateManyTicketHistoryInput[]
    skipDuplicates?: boolean
  }

  export type TicketUpsertWithoutTicketHistoryInput = {
    update: XOR<TicketUpdateWithoutTicketHistoryInput, TicketUncheckedUpdateWithoutTicketHistoryInput>
    create: XOR<TicketCreateWithoutTicketHistoryInput, TicketUncheckedCreateWithoutTicketHistoryInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutTicketHistoryInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutTicketHistoryInput, TicketUncheckedUpdateWithoutTicketHistoryInput>
  }

  export type TicketUpdateWithoutTicketHistoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    aceptanceCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionDays?: NullableIntFieldUpdateOperationsInput | number | null
    slaReply?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaResolution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resolutionAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketValorationId?: NullableIntFieldUpdateOperationsInput | number | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedMethod?: NullableEnumE_AssignedMethodFieldUpdateOperationsInput | $Enums.E_AssignedMethod | null
    user?: UserUpdateOneRequiredWithoutTicketsNestedInput
    technician?: UserTechnicianUpdateOneWithoutTicketsNestedInput
    ticketImages?: TicketImageUpdateManyWithoutTicketNestedInput
    ticketCategory?: TicketCategoryUpdateOneRequiredWithoutTicketsNestedInput
    notifications?: NotificationUpdateManyWithoutTicketNestedInput
    ticketValoration?: TicketValorationUpdateOneWithoutTicketNestedInput
    automaticTriageRule?: AutoTriageRuleUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutTicketHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    technicianId?: NullableIntFieldUpdateOperationsInput | number | null
    ticketCategoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    aceptanceCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionDays?: NullableIntFieldUpdateOperationsInput | number | null
    slaReply?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaResolution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resolutionAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketValorationId?: NullableIntFieldUpdateOperationsInput | number | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedMethod?: NullableEnumE_AssignedMethodFieldUpdateOperationsInput | $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: NullableIntFieldUpdateOperationsInput | number | null
    ticketImages?: TicketImageUncheckedUpdateManyWithoutTicketNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTicketNestedInput
    ticketValoration?: TicketValorationUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type UserUpsertWithoutTicketHistoryInput = {
    update: XOR<UserUpdateWithoutTicketHistoryInput, UserUncheckedUpdateWithoutTicketHistoryInput>
    create: XOR<UserCreateWithoutTicketHistoryInput, UserUncheckedCreateWithoutTicketHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketHistoryInput, UserUncheckedUpdateWithoutTicketHistoryInput>
  }

  export type UserUpdateWithoutTicketHistoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cellphone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumE_RoleFieldUpdateOperationsInput | $Enums.E_Role
    status?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTechnician?: UserTechnicianUpdateOneWithoutUserNestedInput
    tickets?: TicketUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTicketHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cellphone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumE_RoleFieldUpdateOperationsInput | $Enums.E_Role
    status?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTechnician?: UserTechnicianUncheckedUpdateOneWithoutUserNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TicketImageUpsertWithWhereUniqueWithoutTicketHistoryInput = {
    where: TicketImageWhereUniqueInput
    update: XOR<TicketImageUpdateWithoutTicketHistoryInput, TicketImageUncheckedUpdateWithoutTicketHistoryInput>
    create: XOR<TicketImageCreateWithoutTicketHistoryInput, TicketImageUncheckedCreateWithoutTicketHistoryInput>
  }

  export type TicketImageUpdateWithWhereUniqueWithoutTicketHistoryInput = {
    where: TicketImageWhereUniqueInput
    data: XOR<TicketImageUpdateWithoutTicketHistoryInput, TicketImageUncheckedUpdateWithoutTicketHistoryInput>
  }

  export type TicketImageUpdateManyWithWhereWithoutTicketHistoryInput = {
    where: TicketImageScalarWhereInput
    data: XOR<TicketImageUpdateManyMutationInput, TicketImageUncheckedUpdateManyWithoutTicketHistoryInput>
  }

  export type UserCreateWithoutNotificationsInput = {
    name: string
    lastName: string
    email: string
    password: string
    profileImage?: string | null
    genre?: string | null
    dob?: Date | string | null
    cellphone?: string | null
    role?: $Enums.E_Role
    status?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userTechnician?: UserTechnicianCreateNestedOneWithoutUserInput
    tickets?: TicketCreateNestedManyWithoutUserInput
    ticketHistory?: TicketHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    name: string
    lastName: string
    email: string
    password: string
    profileImage?: string | null
    genre?: string | null
    dob?: Date | string | null
    cellphone?: string | null
    role?: $Enums.E_Role
    status?: boolean
    lastLogin?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userTechnician?: UserTechnicianUncheckedCreateNestedOneWithoutUserInput
    tickets?: TicketUncheckedCreateNestedManyWithoutUserInput
    ticketHistory?: TicketHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type TicketCreateWithoutNotificationsInput = {
    title: string
    description?: string | null
    status?: $Enums.E_TicketStatus
    priority?: $Enums.E_TicketPriority
    storyPoints?: number | null
    aceptanceCriteria?: string | null
    comments?: string | null
    resolutionDays?: number | null
    slaReply?: Date | string | null
    slaResolution?: Date | string | null
    replyAchieved?: boolean | null
    resolutionAchieved?: boolean | null
    ticketValorationId?: number | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedAt?: Date | string | null
    assignedMethod?: $Enums.E_AssignedMethod | null
    user: UserCreateNestedOneWithoutTicketsInput
    technician?: UserTechnicianCreateNestedOneWithoutTicketsInput
    ticketImages?: TicketImageCreateNestedManyWithoutTicketInput
    ticketHistory?: TicketHistoryCreateNestedManyWithoutTicketInput
    ticketCategory: TicketCategoryCreateNestedOneWithoutTicketsInput
    ticketValoration?: TicketValorationCreateNestedOneWithoutTicketInput
    automaticTriageRule?: AutoTriageRuleCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutNotificationsInput = {
    id?: number
    userId: number
    technicianId?: number | null
    ticketCategoryId: number
    title: string
    description?: string | null
    status?: $Enums.E_TicketStatus
    priority?: $Enums.E_TicketPriority
    storyPoints?: number | null
    aceptanceCriteria?: string | null
    comments?: string | null
    resolutionDays?: number | null
    slaReply?: Date | string | null
    slaResolution?: Date | string | null
    replyAchieved?: boolean | null
    resolutionAchieved?: boolean | null
    ticketValorationId?: number | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedAt?: Date | string | null
    assignedMethod?: $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: number | null
    ticketImages?: TicketImageUncheckedCreateNestedManyWithoutTicketInput
    ticketHistory?: TicketHistoryUncheckedCreateNestedManyWithoutTicketInput
    ticketValoration?: TicketValorationUncheckedCreateNestedOneWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutNotificationsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutNotificationsInput, TicketUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cellphone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumE_RoleFieldUpdateOperationsInput | $Enums.E_Role
    status?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTechnician?: UserTechnicianUpdateOneWithoutUserNestedInput
    tickets?: TicketUpdateManyWithoutUserNestedInput
    ticketHistory?: TicketHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profileImage?: NullableStringFieldUpdateOperationsInput | string | null
    genre?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cellphone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumE_RoleFieldUpdateOperationsInput | $Enums.E_Role
    status?: BoolFieldUpdateOperationsInput | boolean
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userTechnician?: UserTechnicianUncheckedUpdateOneWithoutUserNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutUserNestedInput
    ticketHistory?: TicketHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TicketUpsertWithoutNotificationsInput = {
    update: XOR<TicketUpdateWithoutNotificationsInput, TicketUncheckedUpdateWithoutNotificationsInput>
    create: XOR<TicketCreateWithoutNotificationsInput, TicketUncheckedCreateWithoutNotificationsInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutNotificationsInput, TicketUncheckedUpdateWithoutNotificationsInput>
  }

  export type TicketUpdateWithoutNotificationsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    aceptanceCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionDays?: NullableIntFieldUpdateOperationsInput | number | null
    slaReply?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaResolution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resolutionAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketValorationId?: NullableIntFieldUpdateOperationsInput | number | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedMethod?: NullableEnumE_AssignedMethodFieldUpdateOperationsInput | $Enums.E_AssignedMethod | null
    user?: UserUpdateOneRequiredWithoutTicketsNestedInput
    technician?: UserTechnicianUpdateOneWithoutTicketsNestedInput
    ticketImages?: TicketImageUpdateManyWithoutTicketNestedInput
    ticketHistory?: TicketHistoryUpdateManyWithoutTicketNestedInput
    ticketCategory?: TicketCategoryUpdateOneRequiredWithoutTicketsNestedInput
    ticketValoration?: TicketValorationUpdateOneWithoutTicketNestedInput
    automaticTriageRule?: AutoTriageRuleUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    technicianId?: NullableIntFieldUpdateOperationsInput | number | null
    ticketCategoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    aceptanceCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionDays?: NullableIntFieldUpdateOperationsInput | number | null
    slaReply?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaResolution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resolutionAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketValorationId?: NullableIntFieldUpdateOperationsInput | number | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedMethod?: NullableEnumE_AssignedMethodFieldUpdateOperationsInput | $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: NullableIntFieldUpdateOperationsInput | number | null
    ticketImages?: TicketImageUncheckedUpdateManyWithoutTicketNestedInput
    ticketHistory?: TicketHistoryUncheckedUpdateManyWithoutTicketNestedInput
    ticketValoration?: TicketValorationUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketCreateWithoutTicketValorationInput = {
    title: string
    description?: string | null
    status?: $Enums.E_TicketStatus
    priority?: $Enums.E_TicketPriority
    storyPoints?: number | null
    aceptanceCriteria?: string | null
    comments?: string | null
    resolutionDays?: number | null
    slaReply?: Date | string | null
    slaResolution?: Date | string | null
    replyAchieved?: boolean | null
    resolutionAchieved?: boolean | null
    ticketValorationId?: number | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedAt?: Date | string | null
    assignedMethod?: $Enums.E_AssignedMethod | null
    user: UserCreateNestedOneWithoutTicketsInput
    technician?: UserTechnicianCreateNestedOneWithoutTicketsInput
    ticketImages?: TicketImageCreateNestedManyWithoutTicketInput
    ticketHistory?: TicketHistoryCreateNestedManyWithoutTicketInput
    ticketCategory: TicketCategoryCreateNestedOneWithoutTicketsInput
    notifications?: NotificationCreateNestedManyWithoutTicketInput
    automaticTriageRule?: AutoTriageRuleCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutTicketValorationInput = {
    id?: number
    userId: number
    technicianId?: number | null
    ticketCategoryId: number
    title: string
    description?: string | null
    status?: $Enums.E_TicketStatus
    priority?: $Enums.E_TicketPriority
    storyPoints?: number | null
    aceptanceCriteria?: string | null
    comments?: string | null
    resolutionDays?: number | null
    slaReply?: Date | string | null
    slaResolution?: Date | string | null
    replyAchieved?: boolean | null
    resolutionAchieved?: boolean | null
    ticketValorationId?: number | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedAt?: Date | string | null
    assignedMethod?: $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: number | null
    ticketImages?: TicketImageUncheckedCreateNestedManyWithoutTicketInput
    ticketHistory?: TicketHistoryUncheckedCreateNestedManyWithoutTicketInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutTicketValorationInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutTicketValorationInput, TicketUncheckedCreateWithoutTicketValorationInput>
  }

  export type TicketUpsertWithoutTicketValorationInput = {
    update: XOR<TicketUpdateWithoutTicketValorationInput, TicketUncheckedUpdateWithoutTicketValorationInput>
    create: XOR<TicketCreateWithoutTicketValorationInput, TicketUncheckedCreateWithoutTicketValorationInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutTicketValorationInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutTicketValorationInput, TicketUncheckedUpdateWithoutTicketValorationInput>
  }

  export type TicketUpdateWithoutTicketValorationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    aceptanceCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionDays?: NullableIntFieldUpdateOperationsInput | number | null
    slaReply?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaResolution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resolutionAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketValorationId?: NullableIntFieldUpdateOperationsInput | number | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedMethod?: NullableEnumE_AssignedMethodFieldUpdateOperationsInput | $Enums.E_AssignedMethod | null
    user?: UserUpdateOneRequiredWithoutTicketsNestedInput
    technician?: UserTechnicianUpdateOneWithoutTicketsNestedInput
    ticketImages?: TicketImageUpdateManyWithoutTicketNestedInput
    ticketHistory?: TicketHistoryUpdateManyWithoutTicketNestedInput
    ticketCategory?: TicketCategoryUpdateOneRequiredWithoutTicketsNestedInput
    notifications?: NotificationUpdateManyWithoutTicketNestedInput
    automaticTriageRule?: AutoTriageRuleUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutTicketValorationInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    technicianId?: NullableIntFieldUpdateOperationsInput | number | null
    ticketCategoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    aceptanceCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionDays?: NullableIntFieldUpdateOperationsInput | number | null
    slaReply?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaResolution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resolutionAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketValorationId?: NullableIntFieldUpdateOperationsInput | number | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedMethod?: NullableEnumE_AssignedMethodFieldUpdateOperationsInput | $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: NullableIntFieldUpdateOperationsInput | number | null
    ticketImages?: TicketImageUncheckedUpdateManyWithoutTicketNestedInput
    ticketHistory?: TicketHistoryUncheckedUpdateManyWithoutTicketNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyUserInput = {
    id?: number
    technicianId?: number | null
    ticketCategoryId: number
    title: string
    description?: string | null
    status?: $Enums.E_TicketStatus
    priority?: $Enums.E_TicketPriority
    storyPoints?: number | null
    aceptanceCriteria?: string | null
    comments?: string | null
    resolutionDays?: number | null
    slaReply?: Date | string | null
    slaResolution?: Date | string | null
    replyAchieved?: boolean | null
    resolutionAchieved?: boolean | null
    ticketValorationId?: number | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedAt?: Date | string | null
    assignedMethod?: $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: number | null
  }

  export type TicketHistoryCreateManyUserInput = {
    id?: number
    ticketId: number
    status: $Enums.E_TicketStatus
    changedAt?: Date | string
    observation: string
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    message: string
    isRead?: boolean
    ticketId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    aceptanceCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionDays?: NullableIntFieldUpdateOperationsInput | number | null
    slaReply?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaResolution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resolutionAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketValorationId?: NullableIntFieldUpdateOperationsInput | number | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedMethod?: NullableEnumE_AssignedMethodFieldUpdateOperationsInput | $Enums.E_AssignedMethod | null
    technician?: UserTechnicianUpdateOneWithoutTicketsNestedInput
    ticketImages?: TicketImageUpdateManyWithoutTicketNestedInput
    ticketHistory?: TicketHistoryUpdateManyWithoutTicketNestedInput
    ticketCategory?: TicketCategoryUpdateOneRequiredWithoutTicketsNestedInput
    notifications?: NotificationUpdateManyWithoutTicketNestedInput
    ticketValoration?: TicketValorationUpdateOneWithoutTicketNestedInput
    automaticTriageRule?: AutoTriageRuleUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    technicianId?: NullableIntFieldUpdateOperationsInput | number | null
    ticketCategoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    aceptanceCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionDays?: NullableIntFieldUpdateOperationsInput | number | null
    slaReply?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaResolution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resolutionAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketValorationId?: NullableIntFieldUpdateOperationsInput | number | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedMethod?: NullableEnumE_AssignedMethodFieldUpdateOperationsInput | $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: NullableIntFieldUpdateOperationsInput | number | null
    ticketImages?: TicketImageUncheckedUpdateManyWithoutTicketNestedInput
    ticketHistory?: TicketHistoryUncheckedUpdateManyWithoutTicketNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTicketNestedInput
    ticketValoration?: TicketValorationUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    technicianId?: NullableIntFieldUpdateOperationsInput | number | null
    ticketCategoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    aceptanceCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionDays?: NullableIntFieldUpdateOperationsInput | number | null
    slaReply?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaResolution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resolutionAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketValorationId?: NullableIntFieldUpdateOperationsInput | number | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedMethod?: NullableEnumE_AssignedMethodFieldUpdateOperationsInput | $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TicketHistoryUpdateWithoutUserInput = {
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    observation?: StringFieldUpdateOperationsInput | string
    ticket?: TicketUpdateOneRequiredWithoutTicketHistoryNestedInput
    ticketImages?: TicketImageUpdateManyWithoutTicketHistoryNestedInput
  }

  export type TicketHistoryUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    observation?: StringFieldUpdateOperationsInput | string
    ticketImages?: TicketImageUncheckedUpdateManyWithoutTicketHistoryNestedInput
  }

  export type TicketHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: IntFieldUpdateOperationsInput | number
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    observation?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUpdateWithoutUserInput = {
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    ticketId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    ticketId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyTechnicianInput = {
    id?: number
    userId: number
    ticketCategoryId: number
    title: string
    description?: string | null
    status?: $Enums.E_TicketStatus
    priority?: $Enums.E_TicketPriority
    storyPoints?: number | null
    aceptanceCriteria?: string | null
    comments?: string | null
    resolutionDays?: number | null
    slaReply?: Date | string | null
    slaResolution?: Date | string | null
    replyAchieved?: boolean | null
    resolutionAchieved?: boolean | null
    ticketValorationId?: number | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedAt?: Date | string | null
    assignedMethod?: $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: number | null
  }

  export type SpecialityAreaUpdateWithoutTechniciansInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketCategories?: TicketCategoryUpdateManyWithoutSpecialitiesNestedInput
  }

  export type SpecialityAreaUncheckedUpdateWithoutTechniciansInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketCategories?: TicketCategoryUncheckedUpdateManyWithoutSpecialitiesNestedInput
  }

  export type SpecialityAreaUncheckedUpdateManyWithoutTechniciansInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutTechnicianInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    aceptanceCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionDays?: NullableIntFieldUpdateOperationsInput | number | null
    slaReply?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaResolution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resolutionAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketValorationId?: NullableIntFieldUpdateOperationsInput | number | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedMethod?: NullableEnumE_AssignedMethodFieldUpdateOperationsInput | $Enums.E_AssignedMethod | null
    user?: UserUpdateOneRequiredWithoutTicketsNestedInput
    ticketImages?: TicketImageUpdateManyWithoutTicketNestedInput
    ticketHistory?: TicketHistoryUpdateManyWithoutTicketNestedInput
    ticketCategory?: TicketCategoryUpdateOneRequiredWithoutTicketsNestedInput
    notifications?: NotificationUpdateManyWithoutTicketNestedInput
    ticketValoration?: TicketValorationUpdateOneWithoutTicketNestedInput
    automaticTriageRule?: AutoTriageRuleUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutTechnicianInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ticketCategoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    aceptanceCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionDays?: NullableIntFieldUpdateOperationsInput | number | null
    slaReply?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaResolution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resolutionAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketValorationId?: NullableIntFieldUpdateOperationsInput | number | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedMethod?: NullableEnumE_AssignedMethodFieldUpdateOperationsInput | $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: NullableIntFieldUpdateOperationsInput | number | null
    ticketImages?: TicketImageUncheckedUpdateManyWithoutTicketNestedInput
    ticketHistory?: TicketHistoryUncheckedUpdateManyWithoutTicketNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTicketNestedInput
    ticketValoration?: TicketValorationUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutTechnicianInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    ticketCategoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    aceptanceCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionDays?: NullableIntFieldUpdateOperationsInput | number | null
    slaReply?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaResolution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resolutionAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketValorationId?: NullableIntFieldUpdateOperationsInput | number | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedMethod?: NullableEnumE_AssignedMethodFieldUpdateOperationsInput | $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserTechnicianUpdateWithoutSpecialitiesInput = {
    status?: EnumE_TechnicianStatusFieldUpdateOperationsInput | $Enums.E_TechnicianStatus
    workload?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserTechnicianNestedInput
    tickets?: TicketUpdateManyWithoutTechnicianNestedInput
  }

  export type UserTechnicianUncheckedUpdateWithoutSpecialitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumE_TechnicianStatusFieldUpdateOperationsInput | $Enums.E_TechnicianStatus
    workload?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutTechnicianNestedInput
  }

  export type UserTechnicianUncheckedUpdateManyWithoutSpecialitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    status?: EnumE_TechnicianStatusFieldUpdateOperationsInput | $Enums.E_TechnicianStatus
    workload?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCategoryUpdateWithoutSpecialitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SLA?: SLAUpdateOneRequiredWithoutTicketCategoryNestedInput
    categoryEtiquettes?: CategoryEtiquetteUpdateManyWithoutTicketCategoriesNestedInput
    tickets?: TicketUpdateManyWithoutTicketCategoryNestedInput
  }

  export type TicketCategoryUncheckedUpdateWithoutSpecialitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slaId?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryEtiquettes?: CategoryEtiquetteUncheckedUpdateManyWithoutTicketCategoriesNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutTicketCategoryNestedInput
  }

  export type TicketCategoryUncheckedUpdateManyWithoutSpecialitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slaId?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCategoryUpdateWithoutCategoryEtiquettesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SLA?: SLAUpdateOneRequiredWithoutTicketCategoryNestedInput
    specialities?: SpecialityAreaUpdateManyWithoutTicketCategoriesNestedInput
    tickets?: TicketUpdateManyWithoutTicketCategoryNestedInput
  }

  export type TicketCategoryUncheckedUpdateWithoutCategoryEtiquettesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slaId?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialities?: SpecialityAreaUncheckedUpdateManyWithoutTicketCategoriesNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutTicketCategoryNestedInput
  }

  export type TicketCategoryUncheckedUpdateManyWithoutCategoryEtiquettesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    slaId?: IntFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCategoryCreateManySLAInput = {
    id?: number
    name: string
    description?: string | null
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCategoryUpdateWithoutSLAInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialities?: SpecialityAreaUpdateManyWithoutTicketCategoriesNestedInput
    categoryEtiquettes?: CategoryEtiquetteUpdateManyWithoutTicketCategoriesNestedInput
    tickets?: TicketUpdateManyWithoutTicketCategoryNestedInput
  }

  export type TicketCategoryUncheckedUpdateWithoutSLAInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    specialities?: SpecialityAreaUncheckedUpdateManyWithoutTicketCategoriesNestedInput
    categoryEtiquettes?: CategoryEtiquetteUncheckedUpdateManyWithoutTicketCategoriesNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutTicketCategoryNestedInput
  }

  export type TicketCategoryUncheckedUpdateManyWithoutSLAInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyTicketCategoryInput = {
    id?: number
    userId: number
    technicianId?: number | null
    title: string
    description?: string | null
    status?: $Enums.E_TicketStatus
    priority?: $Enums.E_TicketPriority
    storyPoints?: number | null
    aceptanceCriteria?: string | null
    comments?: string | null
    resolutionDays?: number | null
    slaReply?: Date | string | null
    slaResolution?: Date | string | null
    replyAchieved?: boolean | null
    resolutionAchieved?: boolean | null
    ticketValorationId?: number | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedAt?: Date | string | null
    assignedMethod?: $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: number | null
  }

  export type SpecialityAreaUpdateWithoutTicketCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technicians?: UserTechnicianUpdateManyWithoutSpecialitiesNestedInput
  }

  export type SpecialityAreaUncheckedUpdateWithoutTicketCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    technicians?: UserTechnicianUncheckedUpdateManyWithoutSpecialitiesNestedInput
  }

  export type SpecialityAreaUncheckedUpdateManyWithoutTicketCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryEtiquetteUpdateWithoutTicketCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryEtiquetteUncheckedUpdateWithoutTicketCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryEtiquetteUncheckedUpdateManyWithoutTicketCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutTicketCategoryInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    aceptanceCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionDays?: NullableIntFieldUpdateOperationsInput | number | null
    slaReply?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaResolution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resolutionAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketValorationId?: NullableIntFieldUpdateOperationsInput | number | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedMethod?: NullableEnumE_AssignedMethodFieldUpdateOperationsInput | $Enums.E_AssignedMethod | null
    user?: UserUpdateOneRequiredWithoutTicketsNestedInput
    technician?: UserTechnicianUpdateOneWithoutTicketsNestedInput
    ticketImages?: TicketImageUpdateManyWithoutTicketNestedInput
    ticketHistory?: TicketHistoryUpdateManyWithoutTicketNestedInput
    notifications?: NotificationUpdateManyWithoutTicketNestedInput
    ticketValoration?: TicketValorationUpdateOneWithoutTicketNestedInput
    automaticTriageRule?: AutoTriageRuleUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutTicketCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    technicianId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    aceptanceCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionDays?: NullableIntFieldUpdateOperationsInput | number | null
    slaReply?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaResolution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resolutionAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketValorationId?: NullableIntFieldUpdateOperationsInput | number | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedMethod?: NullableEnumE_AssignedMethodFieldUpdateOperationsInput | $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: NullableIntFieldUpdateOperationsInput | number | null
    ticketImages?: TicketImageUncheckedUpdateManyWithoutTicketNestedInput
    ticketHistory?: TicketHistoryUncheckedUpdateManyWithoutTicketNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTicketNestedInput
    ticketValoration?: TicketValorationUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutTicketCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    technicianId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    aceptanceCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionDays?: NullableIntFieldUpdateOperationsInput | number | null
    slaReply?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaResolution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resolutionAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketValorationId?: NullableIntFieldUpdateOperationsInput | number | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedMethod?: NullableEnumE_AssignedMethodFieldUpdateOperationsInput | $Enums.E_AssignedMethod | null
    automaticTriageRuleId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TicketCreateManyAutomaticTriageRuleInput = {
    id?: number
    userId: number
    technicianId?: number | null
    ticketCategoryId: number
    title: string
    description?: string | null
    status?: $Enums.E_TicketStatus
    priority?: $Enums.E_TicketPriority
    storyPoints?: number | null
    aceptanceCriteria?: string | null
    comments?: string | null
    resolutionDays?: number | null
    slaReply?: Date | string | null
    slaResolution?: Date | string | null
    replyAchieved?: boolean | null
    resolutionAchieved?: boolean | null
    ticketValorationId?: number | null
    closedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedAt?: Date | string | null
    assignedMethod?: $Enums.E_AssignedMethod | null
  }

  export type TicketUpdateWithoutAutomaticTriageRuleInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    aceptanceCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionDays?: NullableIntFieldUpdateOperationsInput | number | null
    slaReply?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaResolution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resolutionAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketValorationId?: NullableIntFieldUpdateOperationsInput | number | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedMethod?: NullableEnumE_AssignedMethodFieldUpdateOperationsInput | $Enums.E_AssignedMethod | null
    user?: UserUpdateOneRequiredWithoutTicketsNestedInput
    technician?: UserTechnicianUpdateOneWithoutTicketsNestedInput
    ticketImages?: TicketImageUpdateManyWithoutTicketNestedInput
    ticketHistory?: TicketHistoryUpdateManyWithoutTicketNestedInput
    ticketCategory?: TicketCategoryUpdateOneRequiredWithoutTicketsNestedInput
    notifications?: NotificationUpdateManyWithoutTicketNestedInput
    ticketValoration?: TicketValorationUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutAutomaticTriageRuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    technicianId?: NullableIntFieldUpdateOperationsInput | number | null
    ticketCategoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    aceptanceCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionDays?: NullableIntFieldUpdateOperationsInput | number | null
    slaReply?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaResolution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resolutionAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketValorationId?: NullableIntFieldUpdateOperationsInput | number | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedMethod?: NullableEnumE_AssignedMethodFieldUpdateOperationsInput | $Enums.E_AssignedMethod | null
    ticketImages?: TicketImageUncheckedUpdateManyWithoutTicketNestedInput
    ticketHistory?: TicketHistoryUncheckedUpdateManyWithoutTicketNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutTicketNestedInput
    ticketValoration?: TicketValorationUncheckedUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutAutomaticTriageRuleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    technicianId?: NullableIntFieldUpdateOperationsInput | number | null
    ticketCategoryId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    priority?: EnumE_TicketPriorityFieldUpdateOperationsInput | $Enums.E_TicketPriority
    storyPoints?: NullableIntFieldUpdateOperationsInput | number | null
    aceptanceCriteria?: NullableStringFieldUpdateOperationsInput | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    resolutionDays?: NullableIntFieldUpdateOperationsInput | number | null
    slaReply?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    slaResolution?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    replyAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    resolutionAchieved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    ticketValorationId?: NullableIntFieldUpdateOperationsInput | number | null
    closedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignedMethod?: NullableEnumE_AssignedMethodFieldUpdateOperationsInput | $Enums.E_AssignedMethod | null
  }

  export type TicketImageCreateManyTicketInput = {
    id?: number
    ticketHistoryId?: number | null
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketHistoryCreateManyTicketInput = {
    id?: number
    status: $Enums.E_TicketStatus
    changedBy: number
    changedAt?: Date | string
    observation: string
  }

  export type NotificationCreateManyTicketInput = {
    id?: number
    userId: number
    message: string
    isRead?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketImageUpdateWithoutTicketInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketHistory?: TicketHistoryUpdateOneWithoutTicketImagesNestedInput
  }

  export type TicketImageUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketHistoryId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketImageUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketHistoryId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketHistoryUpdateWithoutTicketInput = {
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    observation?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTicketHistoryNestedInput
    ticketImages?: TicketImageUpdateManyWithoutTicketHistoryNestedInput
  }

  export type TicketHistoryUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    changedBy?: IntFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    observation?: StringFieldUpdateOperationsInput | string
    ticketImages?: TicketImageUncheckedUpdateManyWithoutTicketHistoryNestedInput
  }

  export type TicketHistoryUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: EnumE_TicketStatusFieldUpdateOperationsInput | $Enums.E_TicketStatus
    changedBy?: IntFieldUpdateOperationsInput | number
    changedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    observation?: StringFieldUpdateOperationsInput | string
  }

  export type NotificationUpdateWithoutTicketInput = {
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutTicketInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketImageCreateManyTicketHistoryInput = {
    id?: number
    ticketId?: number | null
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketImageUpdateWithoutTicketHistoryInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneWithoutTicketImagesNestedInput
  }

  export type TicketImageUncheckedUpdateWithoutTicketHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketImageUncheckedUpdateManyWithoutTicketHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    ticketId?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}