
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
 * Model Subcription
 * 
 */
export type Subcription = $Result.DefaultSelection<Prisma.$SubcriptionPayload>
/**
 * Model Automation
 * 
 */
export type Automation = $Result.DefaultSelection<Prisma.$AutomationPayload>
/**
 * Model Integrations
 * 
 */
export type Integrations = $Result.DefaultSelection<Prisma.$IntegrationsPayload>
/**
 * Model Trigger
 * 
 */
export type Trigger = $Result.DefaultSelection<Prisma.$TriggerPayload>
/**
 * Model Listener
 * 
 */
export type Listener = $Result.DefaultSelection<Prisma.$ListenerPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Dms
 * 
 */
export type Dms = $Result.DefaultSelection<Prisma.$DmsPayload>
/**
 * Model Keyword
 * 
 */
export type Keyword = $Result.DefaultSelection<Prisma.$KeywordPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const INTERGRATION: {
  INSTAGRAM: 'INSTAGRAM'
};

export type INTERGRATION = (typeof INTERGRATION)[keyof typeof INTERGRATION]


export const PLAN: {
  VIP: 'VIP',
  FREE: 'FREE'
};

export type PLAN = (typeof PLAN)[keyof typeof PLAN]


export const MEDIA_TYPE: {
  IMAGE: 'IMAGE',
  VIDEO: 'VIDEO',
  ALBUM: 'ALBUM'
};

export type MEDIA_TYPE = (typeof MEDIA_TYPE)[keyof typeof MEDIA_TYPE]


export const LISTENER: {
  AI: 'AI',
  MESSAGE: 'MESSAGE'
};

export type LISTENER = (typeof LISTENER)[keyof typeof LISTENER]

}

export type INTERGRATION = $Enums.INTERGRATION

export const INTERGRATION: typeof $Enums.INTERGRATION

export type PLAN = $Enums.PLAN

export const PLAN: typeof $Enums.PLAN

export type MEDIA_TYPE = $Enums.MEDIA_TYPE

export const MEDIA_TYPE: typeof $Enums.MEDIA_TYPE

export type LISTENER = $Enums.LISTENER

export const LISTENER: typeof $Enums.LISTENER

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
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.subcription`: Exposes CRUD operations for the **Subcription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subcriptions
    * const subcriptions = await prisma.subcription.findMany()
    * ```
    */
  get subcription(): Prisma.SubcriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.automation`: Exposes CRUD operations for the **Automation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Automations
    * const automations = await prisma.automation.findMany()
    * ```
    */
  get automation(): Prisma.AutomationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.integrations`: Exposes CRUD operations for the **Integrations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Integrations
    * const integrations = await prisma.integrations.findMany()
    * ```
    */
  get integrations(): Prisma.IntegrationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trigger`: Exposes CRUD operations for the **Trigger** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Triggers
    * const triggers = await prisma.trigger.findMany()
    * ```
    */
  get trigger(): Prisma.TriggerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.listener`: Exposes CRUD operations for the **Listener** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Listeners
    * const listeners = await prisma.listener.findMany()
    * ```
    */
  get listener(): Prisma.ListenerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dms`: Exposes CRUD operations for the **Dms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dms
    * const dms = await prisma.dms.findMany()
    * ```
    */
  get dms(): Prisma.DmsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.keyword`: Exposes CRUD operations for the **Keyword** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Keywords
    * const keywords = await prisma.keyword.findMany()
    * ```
    */
  get keyword(): Prisma.KeywordDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Subcription: 'Subcription',
    Automation: 'Automation',
    Integrations: 'Integrations',
    Trigger: 'Trigger',
    Listener: 'Listener',
    Post: 'Post',
    Dms: 'Dms',
    Keyword: 'Keyword'
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
      modelProps: "user" | "subcription" | "automation" | "integrations" | "trigger" | "listener" | "post" | "dms" | "keyword"
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
      Subcription: {
        payload: Prisma.$SubcriptionPayload<ExtArgs>
        fields: Prisma.SubcriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubcriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubcriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcriptionPayload>
          }
          findFirst: {
            args: Prisma.SubcriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubcriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcriptionPayload>
          }
          findMany: {
            args: Prisma.SubcriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcriptionPayload>[]
          }
          create: {
            args: Prisma.SubcriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcriptionPayload>
          }
          createMany: {
            args: Prisma.SubcriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubcriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcriptionPayload>
          }
          update: {
            args: Prisma.SubcriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubcriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubcriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubcriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubcriptionPayload>
          }
          aggregate: {
            args: Prisma.SubcriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubcription>
          }
          groupBy: {
            args: Prisma.SubcriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubcriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubcriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubcriptionCountAggregateOutputType> | number
          }
        }
      }
      Automation: {
        payload: Prisma.$AutomationPayload<ExtArgs>
        fields: Prisma.AutomationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AutomationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AutomationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          findFirst: {
            args: Prisma.AutomationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AutomationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          findMany: {
            args: Prisma.AutomationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>[]
          }
          create: {
            args: Prisma.AutomationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          createMany: {
            args: Prisma.AutomationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AutomationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          update: {
            args: Prisma.AutomationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          deleteMany: {
            args: Prisma.AutomationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AutomationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AutomationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AutomationPayload>
          }
          aggregate: {
            args: Prisma.AutomationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutomation>
          }
          groupBy: {
            args: Prisma.AutomationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutomationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AutomationCountArgs<ExtArgs>
            result: $Utils.Optional<AutomationCountAggregateOutputType> | number
          }
        }
      }
      Integrations: {
        payload: Prisma.$IntegrationsPayload<ExtArgs>
        fields: Prisma.IntegrationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IntegrationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IntegrationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationsPayload>
          }
          findFirst: {
            args: Prisma.IntegrationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IntegrationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationsPayload>
          }
          findMany: {
            args: Prisma.IntegrationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationsPayload>[]
          }
          create: {
            args: Prisma.IntegrationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationsPayload>
          }
          createMany: {
            args: Prisma.IntegrationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.IntegrationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationsPayload>
          }
          update: {
            args: Prisma.IntegrationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationsPayload>
          }
          deleteMany: {
            args: Prisma.IntegrationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IntegrationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.IntegrationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IntegrationsPayload>
          }
          aggregate: {
            args: Prisma.IntegrationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIntegrations>
          }
          groupBy: {
            args: Prisma.IntegrationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<IntegrationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.IntegrationsCountArgs<ExtArgs>
            result: $Utils.Optional<IntegrationsCountAggregateOutputType> | number
          }
        }
      }
      Trigger: {
        payload: Prisma.$TriggerPayload<ExtArgs>
        fields: Prisma.TriggerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TriggerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TriggerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findFirst: {
            args: Prisma.TriggerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TriggerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          findMany: {
            args: Prisma.TriggerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>[]
          }
          create: {
            args: Prisma.TriggerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          createMany: {
            args: Prisma.TriggerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TriggerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          update: {
            args: Prisma.TriggerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          deleteMany: {
            args: Prisma.TriggerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TriggerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TriggerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TriggerPayload>
          }
          aggregate: {
            args: Prisma.TriggerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrigger>
          }
          groupBy: {
            args: Prisma.TriggerGroupByArgs<ExtArgs>
            result: $Utils.Optional<TriggerGroupByOutputType>[]
          }
          count: {
            args: Prisma.TriggerCountArgs<ExtArgs>
            result: $Utils.Optional<TriggerCountAggregateOutputType> | number
          }
        }
      }
      Listener: {
        payload: Prisma.$ListenerPayload<ExtArgs>
        fields: Prisma.ListenerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListenerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListenerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListenerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListenerPayload>
          }
          findFirst: {
            args: Prisma.ListenerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListenerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListenerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListenerPayload>
          }
          findMany: {
            args: Prisma.ListenerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListenerPayload>[]
          }
          create: {
            args: Prisma.ListenerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListenerPayload>
          }
          createMany: {
            args: Prisma.ListenerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ListenerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListenerPayload>
          }
          update: {
            args: Prisma.ListenerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListenerPayload>
          }
          deleteMany: {
            args: Prisma.ListenerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListenerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ListenerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListenerPayload>
          }
          aggregate: {
            args: Prisma.ListenerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListener>
          }
          groupBy: {
            args: Prisma.ListenerGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListenerGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListenerCountArgs<ExtArgs>
            result: $Utils.Optional<ListenerCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Dms: {
        payload: Prisma.$DmsPayload<ExtArgs>
        fields: Prisma.DmsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DmsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DmsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DmsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DmsPayload>
          }
          findFirst: {
            args: Prisma.DmsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DmsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DmsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DmsPayload>
          }
          findMany: {
            args: Prisma.DmsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DmsPayload>[]
          }
          create: {
            args: Prisma.DmsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DmsPayload>
          }
          createMany: {
            args: Prisma.DmsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DmsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DmsPayload>
          }
          update: {
            args: Prisma.DmsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DmsPayload>
          }
          deleteMany: {
            args: Prisma.DmsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DmsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DmsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DmsPayload>
          }
          aggregate: {
            args: Prisma.DmsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDms>
          }
          groupBy: {
            args: Prisma.DmsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DmsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DmsCountArgs<ExtArgs>
            result: $Utils.Optional<DmsCountAggregateOutputType> | number
          }
        }
      }
      Keyword: {
        payload: Prisma.$KeywordPayload<ExtArgs>
        fields: Prisma.KeywordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeywordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeywordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          findFirst: {
            args: Prisma.KeywordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeywordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          findMany: {
            args: Prisma.KeywordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>[]
          }
          create: {
            args: Prisma.KeywordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          createMany: {
            args: Prisma.KeywordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.KeywordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          update: {
            args: Prisma.KeywordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          deleteMany: {
            args: Prisma.KeywordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KeywordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.KeywordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          aggregate: {
            args: Prisma.KeywordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKeyword>
          }
          groupBy: {
            args: Prisma.KeywordGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeywordGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeywordCountArgs<ExtArgs>
            result: $Utils.Optional<KeywordCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    subcription?: SubcriptionOmit
    automation?: AutomationOmit
    integrations?: IntegrationsOmit
    trigger?: TriggerOmit
    listener?: ListenerOmit
    post?: PostOmit
    dms?: DmsOmit
    keyword?: KeywordOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    automations: number
    integrations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    automations?: boolean | UserCountOutputTypeCountAutomationsArgs
    integrations?: boolean | UserCountOutputTypeCountIntegrationsArgs
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
  export type UserCountOutputTypeCountAutomationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountIntegrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationsWhereInput
  }


  /**
   * Count Type AutomationCountOutputType
   */

  export type AutomationCountOutputType = {
    trigger: number
    posts: number
    dms: number
    keywords: number
  }

  export type AutomationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trigger?: boolean | AutomationCountOutputTypeCountTriggerArgs
    posts?: boolean | AutomationCountOutputTypeCountPostsArgs
    dms?: boolean | AutomationCountOutputTypeCountDmsArgs
    keywords?: boolean | AutomationCountOutputTypeCountKeywordsArgs
  }

  // Custom InputTypes
  /**
   * AutomationCountOutputType without action
   */
  export type AutomationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutomationCountOutputType
     */
    select?: AutomationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AutomationCountOutputType without action
   */
  export type AutomationCountOutputTypeCountTriggerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
  }

  /**
   * AutomationCountOutputType without action
   */
  export type AutomationCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * AutomationCountOutputType without action
   */
  export type AutomationCountOutputTypeCountDmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DmsWhereInput
  }

  /**
   * AutomationCountOutputType without action
   */
  export type AutomationCountOutputTypeCountKeywordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeywordWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    createdAt: Date | null
    clerkId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstname: string | null
    lastname: string | null
    email: string | null
    createdAt: Date | null
    clerkId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstname: number
    lastname: number
    email: number
    createdAt: number
    clerkId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    createdAt?: true
    clerkId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    createdAt?: true
    clerkId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstname?: true
    lastname?: true
    email?: true
    createdAt?: true
    clerkId?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstname: string | null
    lastname: string | null
    email: string
    createdAt: Date
    clerkId: string
    _count: UserCountAggregateOutputType | null
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
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    createdAt?: boolean
    clerkId?: boolean
    subcription?: boolean | User$subcriptionArgs<ExtArgs>
    automations?: boolean | User$automationsArgs<ExtArgs>
    integrations?: boolean | User$integrationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    firstname?: boolean
    lastname?: boolean
    email?: boolean
    createdAt?: boolean
    clerkId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstname" | "lastname" | "email" | "createdAt" | "clerkId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subcription?: boolean | User$subcriptionArgs<ExtArgs>
    automations?: boolean | User$automationsArgs<ExtArgs>
    integrations?: boolean | User$integrationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      subcription: Prisma.$SubcriptionPayload<ExtArgs> | null
      automations: Prisma.$AutomationPayload<ExtArgs>[]
      integrations: Prisma.$IntegrationsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstname: string | null
      lastname: string | null
      email: string
      createdAt: Date
      clerkId: string
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
    subcription<T extends User$subcriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$subcriptionArgs<ExtArgs>>): Prisma__SubcriptionClient<$Result.GetResult<Prisma.$SubcriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    automations<T extends User$automationsArgs<ExtArgs> = {}>(args?: Subset<T, User$automationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    integrations<T extends User$integrationsArgs<ExtArgs> = {}>(args?: Subset<T, User$integrationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly clerkId: FieldRef<"User", 'String'>
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
   * User.subcription
   */
  export type User$subcriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcription
     */
    select?: SubcriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcription
     */
    omit?: SubcriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcriptionInclude<ExtArgs> | null
    where?: SubcriptionWhereInput
  }

  /**
   * User.automations
   */
  export type User$automationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    where?: AutomationWhereInput
    orderBy?: AutomationOrderByWithRelationInput | AutomationOrderByWithRelationInput[]
    cursor?: AutomationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AutomationScalarFieldEnum | AutomationScalarFieldEnum[]
  }

  /**
   * User.integrations
   */
  export type User$integrationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integrations
     */
    select?: IntegrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integrations
     */
    omit?: IntegrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationsInclude<ExtArgs> | null
    where?: IntegrationsWhereInput
    orderBy?: IntegrationsOrderByWithRelationInput | IntegrationsOrderByWithRelationInput[]
    cursor?: IntegrationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IntegrationsScalarFieldEnum | IntegrationsScalarFieldEnum[]
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
   * Model Subcription
   */

  export type AggregateSubcription = {
    _count: SubcriptionCountAggregateOutputType | null
    _min: SubcriptionMinAggregateOutputType | null
    _max: SubcriptionMaxAggregateOutputType | null
  }

  export type SubcriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    plan: $Enums.PLAN | null
    customerId: string | null
  }

  export type SubcriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    plan: $Enums.PLAN | null
    customerId: string | null
  }

  export type SubcriptionCountAggregateOutputType = {
    id: number
    userId: number
    createdAt: number
    updatedAt: number
    plan: number
    customerId: number
    _all: number
  }


  export type SubcriptionMinAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    plan?: true
    customerId?: true
  }

  export type SubcriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    plan?: true
    customerId?: true
  }

  export type SubcriptionCountAggregateInputType = {
    id?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    plan?: true
    customerId?: true
    _all?: true
  }

  export type SubcriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subcription to aggregate.
     */
    where?: SubcriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcriptions to fetch.
     */
    orderBy?: SubcriptionOrderByWithRelationInput | SubcriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubcriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subcriptions
    **/
    _count?: true | SubcriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubcriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubcriptionMaxAggregateInputType
  }

  export type GetSubcriptionAggregateType<T extends SubcriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubcription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubcription[P]>
      : GetScalarType<T[P], AggregateSubcription[P]>
  }




  export type SubcriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubcriptionWhereInput
    orderBy?: SubcriptionOrderByWithAggregationInput | SubcriptionOrderByWithAggregationInput[]
    by: SubcriptionScalarFieldEnum[] | SubcriptionScalarFieldEnum
    having?: SubcriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubcriptionCountAggregateInputType | true
    _min?: SubcriptionMinAggregateInputType
    _max?: SubcriptionMaxAggregateInputType
  }

  export type SubcriptionGroupByOutputType = {
    id: string
    userId: string | null
    createdAt: Date
    updatedAt: Date
    plan: $Enums.PLAN
    customerId: string | null
    _count: SubcriptionCountAggregateOutputType | null
    _min: SubcriptionMinAggregateOutputType | null
    _max: SubcriptionMaxAggregateOutputType | null
  }

  type GetSubcriptionGroupByPayload<T extends SubcriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubcriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubcriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubcriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubcriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubcriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean
    customerId?: boolean
    User?: boolean | Subcription$UserArgs<ExtArgs>
  }, ExtArgs["result"]["subcription"]>



  export type SubcriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    plan?: boolean
    customerId?: boolean
  }

  export type SubcriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "createdAt" | "updatedAt" | "plan" | "customerId", ExtArgs["result"]["subcription"]>
  export type SubcriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Subcription$UserArgs<ExtArgs>
  }

  export type $SubcriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subcription"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      createdAt: Date
      updatedAt: Date
      plan: $Enums.PLAN
      customerId: string | null
    }, ExtArgs["result"]["subcription"]>
    composites: {}
  }

  type SubcriptionGetPayload<S extends boolean | null | undefined | SubcriptionDefaultArgs> = $Result.GetResult<Prisma.$SubcriptionPayload, S>

  type SubcriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubcriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubcriptionCountAggregateInputType | true
    }

  export interface SubcriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subcription'], meta: { name: 'Subcription' } }
    /**
     * Find zero or one Subcription that matches the filter.
     * @param {SubcriptionFindUniqueArgs} args - Arguments to find a Subcription
     * @example
     * // Get one Subcription
     * const subcription = await prisma.subcription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubcriptionFindUniqueArgs>(args: SelectSubset<T, SubcriptionFindUniqueArgs<ExtArgs>>): Prisma__SubcriptionClient<$Result.GetResult<Prisma.$SubcriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subcription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubcriptionFindUniqueOrThrowArgs} args - Arguments to find a Subcription
     * @example
     * // Get one Subcription
     * const subcription = await prisma.subcription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubcriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubcriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubcriptionClient<$Result.GetResult<Prisma.$SubcriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subcription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcriptionFindFirstArgs} args - Arguments to find a Subcription
     * @example
     * // Get one Subcription
     * const subcription = await prisma.subcription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubcriptionFindFirstArgs>(args?: SelectSubset<T, SubcriptionFindFirstArgs<ExtArgs>>): Prisma__SubcriptionClient<$Result.GetResult<Prisma.$SubcriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subcription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcriptionFindFirstOrThrowArgs} args - Arguments to find a Subcription
     * @example
     * // Get one Subcription
     * const subcription = await prisma.subcription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubcriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubcriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubcriptionClient<$Result.GetResult<Prisma.$SubcriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subcriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subcriptions
     * const subcriptions = await prisma.subcription.findMany()
     * 
     * // Get first 10 Subcriptions
     * const subcriptions = await prisma.subcription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subcriptionWithIdOnly = await prisma.subcription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubcriptionFindManyArgs>(args?: SelectSubset<T, SubcriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubcriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subcription.
     * @param {SubcriptionCreateArgs} args - Arguments to create a Subcription.
     * @example
     * // Create one Subcription
     * const Subcription = await prisma.subcription.create({
     *   data: {
     *     // ... data to create a Subcription
     *   }
     * })
     * 
     */
    create<T extends SubcriptionCreateArgs>(args: SelectSubset<T, SubcriptionCreateArgs<ExtArgs>>): Prisma__SubcriptionClient<$Result.GetResult<Prisma.$SubcriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subcriptions.
     * @param {SubcriptionCreateManyArgs} args - Arguments to create many Subcriptions.
     * @example
     * // Create many Subcriptions
     * const subcription = await prisma.subcription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubcriptionCreateManyArgs>(args?: SelectSubset<T, SubcriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subcription.
     * @param {SubcriptionDeleteArgs} args - Arguments to delete one Subcription.
     * @example
     * // Delete one Subcription
     * const Subcription = await prisma.subcription.delete({
     *   where: {
     *     // ... filter to delete one Subcription
     *   }
     * })
     * 
     */
    delete<T extends SubcriptionDeleteArgs>(args: SelectSubset<T, SubcriptionDeleteArgs<ExtArgs>>): Prisma__SubcriptionClient<$Result.GetResult<Prisma.$SubcriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subcription.
     * @param {SubcriptionUpdateArgs} args - Arguments to update one Subcription.
     * @example
     * // Update one Subcription
     * const subcription = await prisma.subcription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubcriptionUpdateArgs>(args: SelectSubset<T, SubcriptionUpdateArgs<ExtArgs>>): Prisma__SubcriptionClient<$Result.GetResult<Prisma.$SubcriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subcriptions.
     * @param {SubcriptionDeleteManyArgs} args - Arguments to filter Subcriptions to delete.
     * @example
     * // Delete a few Subcriptions
     * const { count } = await prisma.subcription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubcriptionDeleteManyArgs>(args?: SelectSubset<T, SubcriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subcriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subcriptions
     * const subcription = await prisma.subcription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubcriptionUpdateManyArgs>(args: SelectSubset<T, SubcriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subcription.
     * @param {SubcriptionUpsertArgs} args - Arguments to update or create a Subcription.
     * @example
     * // Update or create a Subcription
     * const subcription = await prisma.subcription.upsert({
     *   create: {
     *     // ... data to create a Subcription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subcription we want to update
     *   }
     * })
     */
    upsert<T extends SubcriptionUpsertArgs>(args: SelectSubset<T, SubcriptionUpsertArgs<ExtArgs>>): Prisma__SubcriptionClient<$Result.GetResult<Prisma.$SubcriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subcriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcriptionCountArgs} args - Arguments to filter Subcriptions to count.
     * @example
     * // Count the number of Subcriptions
     * const count = await prisma.subcription.count({
     *   where: {
     *     // ... the filter for the Subcriptions we want to count
     *   }
     * })
    **/
    count<T extends SubcriptionCountArgs>(
      args?: Subset<T, SubcriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubcriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subcription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubcriptionAggregateArgs>(args: Subset<T, SubcriptionAggregateArgs>): Prisma.PrismaPromise<GetSubcriptionAggregateType<T>>

    /**
     * Group by Subcription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubcriptionGroupByArgs} args - Group by arguments.
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
      T extends SubcriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubcriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubcriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubcriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubcriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subcription model
   */
  readonly fields: SubcriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subcription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubcriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Subcription$UserArgs<ExtArgs> = {}>(args?: Subset<T, Subcription$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Subcription model
   */
  interface SubcriptionFieldRefs {
    readonly id: FieldRef<"Subcription", 'String'>
    readonly userId: FieldRef<"Subcription", 'String'>
    readonly createdAt: FieldRef<"Subcription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subcription", 'DateTime'>
    readonly plan: FieldRef<"Subcription", 'PLAN'>
    readonly customerId: FieldRef<"Subcription", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subcription findUnique
   */
  export type SubcriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcription
     */
    select?: SubcriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcription
     */
    omit?: SubcriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subcription to fetch.
     */
    where: SubcriptionWhereUniqueInput
  }

  /**
   * Subcription findUniqueOrThrow
   */
  export type SubcriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcription
     */
    select?: SubcriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcription
     */
    omit?: SubcriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subcription to fetch.
     */
    where: SubcriptionWhereUniqueInput
  }

  /**
   * Subcription findFirst
   */
  export type SubcriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcription
     */
    select?: SubcriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcription
     */
    omit?: SubcriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subcription to fetch.
     */
    where?: SubcriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcriptions to fetch.
     */
    orderBy?: SubcriptionOrderByWithRelationInput | SubcriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subcriptions.
     */
    cursor?: SubcriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subcriptions.
     */
    distinct?: SubcriptionScalarFieldEnum | SubcriptionScalarFieldEnum[]
  }

  /**
   * Subcription findFirstOrThrow
   */
  export type SubcriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcription
     */
    select?: SubcriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcription
     */
    omit?: SubcriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subcription to fetch.
     */
    where?: SubcriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcriptions to fetch.
     */
    orderBy?: SubcriptionOrderByWithRelationInput | SubcriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subcriptions.
     */
    cursor?: SubcriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subcriptions.
     */
    distinct?: SubcriptionScalarFieldEnum | SubcriptionScalarFieldEnum[]
  }

  /**
   * Subcription findMany
   */
  export type SubcriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcription
     */
    select?: SubcriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcription
     */
    omit?: SubcriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subcriptions to fetch.
     */
    where?: SubcriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subcriptions to fetch.
     */
    orderBy?: SubcriptionOrderByWithRelationInput | SubcriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subcriptions.
     */
    cursor?: SubcriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subcriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subcriptions.
     */
    skip?: number
    distinct?: SubcriptionScalarFieldEnum | SubcriptionScalarFieldEnum[]
  }

  /**
   * Subcription create
   */
  export type SubcriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcription
     */
    select?: SubcriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcription
     */
    omit?: SubcriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subcription.
     */
    data?: XOR<SubcriptionCreateInput, SubcriptionUncheckedCreateInput>
  }

  /**
   * Subcription createMany
   */
  export type SubcriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subcriptions.
     */
    data: SubcriptionCreateManyInput | SubcriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subcription update
   */
  export type SubcriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcription
     */
    select?: SubcriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcription
     */
    omit?: SubcriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subcription.
     */
    data: XOR<SubcriptionUpdateInput, SubcriptionUncheckedUpdateInput>
    /**
     * Choose, which Subcription to update.
     */
    where: SubcriptionWhereUniqueInput
  }

  /**
   * Subcription updateMany
   */
  export type SubcriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subcriptions.
     */
    data: XOR<SubcriptionUpdateManyMutationInput, SubcriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subcriptions to update
     */
    where?: SubcriptionWhereInput
    /**
     * Limit how many Subcriptions to update.
     */
    limit?: number
  }

  /**
   * Subcription upsert
   */
  export type SubcriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcription
     */
    select?: SubcriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcription
     */
    omit?: SubcriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subcription to update in case it exists.
     */
    where: SubcriptionWhereUniqueInput
    /**
     * In case the Subcription found by the `where` argument doesn't exist, create a new Subcription with this data.
     */
    create: XOR<SubcriptionCreateInput, SubcriptionUncheckedCreateInput>
    /**
     * In case the Subcription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubcriptionUpdateInput, SubcriptionUncheckedUpdateInput>
  }

  /**
   * Subcription delete
   */
  export type SubcriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcription
     */
    select?: SubcriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcription
     */
    omit?: SubcriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcriptionInclude<ExtArgs> | null
    /**
     * Filter which Subcription to delete.
     */
    where: SubcriptionWhereUniqueInput
  }

  /**
   * Subcription deleteMany
   */
  export type SubcriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subcriptions to delete
     */
    where?: SubcriptionWhereInput
    /**
     * Limit how many Subcriptions to delete.
     */
    limit?: number
  }

  /**
   * Subcription.User
   */
  export type Subcription$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Subcription without action
   */
  export type SubcriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subcription
     */
    select?: SubcriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subcription
     */
    omit?: SubcriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubcriptionInclude<ExtArgs> | null
  }


  /**
   * Model Automation
   */

  export type AggregateAutomation = {
    _count: AutomationCountAggregateOutputType | null
    _min: AutomationMinAggregateOutputType | null
    _max: AutomationMaxAggregateOutputType | null
  }

  export type AutomationMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    active: boolean | null
    userId: string | null
  }

  export type AutomationMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    active: boolean | null
    userId: string | null
  }

  export type AutomationCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    active: number
    userId: number
    _all: number
  }


  export type AutomationMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    active?: true
    userId?: true
  }

  export type AutomationMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    active?: true
    userId?: true
  }

  export type AutomationCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    active?: true
    userId?: true
    _all?: true
  }

  export type AutomationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Automation to aggregate.
     */
    where?: AutomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Automations to fetch.
     */
    orderBy?: AutomationOrderByWithRelationInput | AutomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AutomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Automations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Automations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Automations
    **/
    _count?: true | AutomationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutomationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutomationMaxAggregateInputType
  }

  export type GetAutomationAggregateType<T extends AutomationAggregateArgs> = {
        [P in keyof T & keyof AggregateAutomation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutomation[P]>
      : GetScalarType<T[P], AggregateAutomation[P]>
  }




  export type AutomationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AutomationWhereInput
    orderBy?: AutomationOrderByWithAggregationInput | AutomationOrderByWithAggregationInput[]
    by: AutomationScalarFieldEnum[] | AutomationScalarFieldEnum
    having?: AutomationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutomationCountAggregateInputType | true
    _min?: AutomationMinAggregateInputType
    _max?: AutomationMaxAggregateInputType
  }

  export type AutomationGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    active: boolean
    userId: string | null
    _count: AutomationCountAggregateOutputType | null
    _min: AutomationMinAggregateOutputType | null
    _max: AutomationMaxAggregateOutputType | null
  }

  type GetAutomationGroupByPayload<T extends AutomationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutomationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutomationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutomationGroupByOutputType[P]>
            : GetScalarType<T[P], AutomationGroupByOutputType[P]>
        }
      >
    >


  export type AutomationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    active?: boolean
    userId?: boolean
    User?: boolean | Automation$UserArgs<ExtArgs>
    trigger?: boolean | Automation$triggerArgs<ExtArgs>
    listener?: boolean | Automation$listenerArgs<ExtArgs>
    posts?: boolean | Automation$postsArgs<ExtArgs>
    dms?: boolean | Automation$dmsArgs<ExtArgs>
    keywords?: boolean | Automation$keywordsArgs<ExtArgs>
    _count?: boolean | AutomationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["automation"]>



  export type AutomationSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    active?: boolean
    userId?: boolean
  }

  export type AutomationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "active" | "userId", ExtArgs["result"]["automation"]>
  export type AutomationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Automation$UserArgs<ExtArgs>
    trigger?: boolean | Automation$triggerArgs<ExtArgs>
    listener?: boolean | Automation$listenerArgs<ExtArgs>
    posts?: boolean | Automation$postsArgs<ExtArgs>
    dms?: boolean | Automation$dmsArgs<ExtArgs>
    keywords?: boolean | Automation$keywordsArgs<ExtArgs>
    _count?: boolean | AutomationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AutomationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Automation"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      trigger: Prisma.$TriggerPayload<ExtArgs>[]
      listener: Prisma.$ListenerPayload<ExtArgs> | null
      posts: Prisma.$PostPayload<ExtArgs>[]
      dms: Prisma.$DmsPayload<ExtArgs>[]
      keywords: Prisma.$KeywordPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      active: boolean
      userId: string | null
    }, ExtArgs["result"]["automation"]>
    composites: {}
  }

  type AutomationGetPayload<S extends boolean | null | undefined | AutomationDefaultArgs> = $Result.GetResult<Prisma.$AutomationPayload, S>

  type AutomationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AutomationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutomationCountAggregateInputType | true
    }

  export interface AutomationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Automation'], meta: { name: 'Automation' } }
    /**
     * Find zero or one Automation that matches the filter.
     * @param {AutomationFindUniqueArgs} args - Arguments to find a Automation
     * @example
     * // Get one Automation
     * const automation = await prisma.automation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AutomationFindUniqueArgs>(args: SelectSubset<T, AutomationFindUniqueArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Automation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AutomationFindUniqueOrThrowArgs} args - Arguments to find a Automation
     * @example
     * // Get one Automation
     * const automation = await prisma.automation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AutomationFindUniqueOrThrowArgs>(args: SelectSubset<T, AutomationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Automation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationFindFirstArgs} args - Arguments to find a Automation
     * @example
     * // Get one Automation
     * const automation = await prisma.automation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AutomationFindFirstArgs>(args?: SelectSubset<T, AutomationFindFirstArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Automation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationFindFirstOrThrowArgs} args - Arguments to find a Automation
     * @example
     * // Get one Automation
     * const automation = await prisma.automation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AutomationFindFirstOrThrowArgs>(args?: SelectSubset<T, AutomationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Automations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Automations
     * const automations = await prisma.automation.findMany()
     * 
     * // Get first 10 Automations
     * const automations = await prisma.automation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const automationWithIdOnly = await prisma.automation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AutomationFindManyArgs>(args?: SelectSubset<T, AutomationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Automation.
     * @param {AutomationCreateArgs} args - Arguments to create a Automation.
     * @example
     * // Create one Automation
     * const Automation = await prisma.automation.create({
     *   data: {
     *     // ... data to create a Automation
     *   }
     * })
     * 
     */
    create<T extends AutomationCreateArgs>(args: SelectSubset<T, AutomationCreateArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Automations.
     * @param {AutomationCreateManyArgs} args - Arguments to create many Automations.
     * @example
     * // Create many Automations
     * const automation = await prisma.automation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AutomationCreateManyArgs>(args?: SelectSubset<T, AutomationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Automation.
     * @param {AutomationDeleteArgs} args - Arguments to delete one Automation.
     * @example
     * // Delete one Automation
     * const Automation = await prisma.automation.delete({
     *   where: {
     *     // ... filter to delete one Automation
     *   }
     * })
     * 
     */
    delete<T extends AutomationDeleteArgs>(args: SelectSubset<T, AutomationDeleteArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Automation.
     * @param {AutomationUpdateArgs} args - Arguments to update one Automation.
     * @example
     * // Update one Automation
     * const automation = await prisma.automation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AutomationUpdateArgs>(args: SelectSubset<T, AutomationUpdateArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Automations.
     * @param {AutomationDeleteManyArgs} args - Arguments to filter Automations to delete.
     * @example
     * // Delete a few Automations
     * const { count } = await prisma.automation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AutomationDeleteManyArgs>(args?: SelectSubset<T, AutomationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Automations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Automations
     * const automation = await prisma.automation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AutomationUpdateManyArgs>(args: SelectSubset<T, AutomationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Automation.
     * @param {AutomationUpsertArgs} args - Arguments to update or create a Automation.
     * @example
     * // Update or create a Automation
     * const automation = await prisma.automation.upsert({
     *   create: {
     *     // ... data to create a Automation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Automation we want to update
     *   }
     * })
     */
    upsert<T extends AutomationUpsertArgs>(args: SelectSubset<T, AutomationUpsertArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Automations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationCountArgs} args - Arguments to filter Automations to count.
     * @example
     * // Count the number of Automations
     * const count = await prisma.automation.count({
     *   where: {
     *     // ... the filter for the Automations we want to count
     *   }
     * })
    **/
    count<T extends AutomationCountArgs>(
      args?: Subset<T, AutomationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutomationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Automation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AutomationAggregateArgs>(args: Subset<T, AutomationAggregateArgs>): Prisma.PrismaPromise<GetAutomationAggregateType<T>>

    /**
     * Group by Automation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutomationGroupByArgs} args - Group by arguments.
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
      T extends AutomationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AutomationGroupByArgs['orderBy'] }
        : { orderBy?: AutomationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AutomationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutomationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Automation model
   */
  readonly fields: AutomationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Automation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AutomationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Automation$UserArgs<ExtArgs> = {}>(args?: Subset<T, Automation$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    trigger<T extends Automation$triggerArgs<ExtArgs> = {}>(args?: Subset<T, Automation$triggerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    listener<T extends Automation$listenerArgs<ExtArgs> = {}>(args?: Subset<T, Automation$listenerArgs<ExtArgs>>): Prisma__ListenerClient<$Result.GetResult<Prisma.$ListenerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    posts<T extends Automation$postsArgs<ExtArgs> = {}>(args?: Subset<T, Automation$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    dms<T extends Automation$dmsArgs<ExtArgs> = {}>(args?: Subset<T, Automation$dmsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DmsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    keywords<T extends Automation$keywordsArgs<ExtArgs> = {}>(args?: Subset<T, Automation$keywordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Automation model
   */
  interface AutomationFieldRefs {
    readonly id: FieldRef<"Automation", 'String'>
    readonly name: FieldRef<"Automation", 'String'>
    readonly createdAt: FieldRef<"Automation", 'DateTime'>
    readonly active: FieldRef<"Automation", 'Boolean'>
    readonly userId: FieldRef<"Automation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Automation findUnique
   */
  export type AutomationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * Filter, which Automation to fetch.
     */
    where: AutomationWhereUniqueInput
  }

  /**
   * Automation findUniqueOrThrow
   */
  export type AutomationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * Filter, which Automation to fetch.
     */
    where: AutomationWhereUniqueInput
  }

  /**
   * Automation findFirst
   */
  export type AutomationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * Filter, which Automation to fetch.
     */
    where?: AutomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Automations to fetch.
     */
    orderBy?: AutomationOrderByWithRelationInput | AutomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Automations.
     */
    cursor?: AutomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Automations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Automations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Automations.
     */
    distinct?: AutomationScalarFieldEnum | AutomationScalarFieldEnum[]
  }

  /**
   * Automation findFirstOrThrow
   */
  export type AutomationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * Filter, which Automation to fetch.
     */
    where?: AutomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Automations to fetch.
     */
    orderBy?: AutomationOrderByWithRelationInput | AutomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Automations.
     */
    cursor?: AutomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Automations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Automations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Automations.
     */
    distinct?: AutomationScalarFieldEnum | AutomationScalarFieldEnum[]
  }

  /**
   * Automation findMany
   */
  export type AutomationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * Filter, which Automations to fetch.
     */
    where?: AutomationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Automations to fetch.
     */
    orderBy?: AutomationOrderByWithRelationInput | AutomationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Automations.
     */
    cursor?: AutomationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Automations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Automations.
     */
    skip?: number
    distinct?: AutomationScalarFieldEnum | AutomationScalarFieldEnum[]
  }

  /**
   * Automation create
   */
  export type AutomationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * The data needed to create a Automation.
     */
    data?: XOR<AutomationCreateInput, AutomationUncheckedCreateInput>
  }

  /**
   * Automation createMany
   */
  export type AutomationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Automations.
     */
    data: AutomationCreateManyInput | AutomationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Automation update
   */
  export type AutomationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * The data needed to update a Automation.
     */
    data: XOR<AutomationUpdateInput, AutomationUncheckedUpdateInput>
    /**
     * Choose, which Automation to update.
     */
    where: AutomationWhereUniqueInput
  }

  /**
   * Automation updateMany
   */
  export type AutomationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Automations.
     */
    data: XOR<AutomationUpdateManyMutationInput, AutomationUncheckedUpdateManyInput>
    /**
     * Filter which Automations to update
     */
    where?: AutomationWhereInput
    /**
     * Limit how many Automations to update.
     */
    limit?: number
  }

  /**
   * Automation upsert
   */
  export type AutomationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * The filter to search for the Automation to update in case it exists.
     */
    where: AutomationWhereUniqueInput
    /**
     * In case the Automation found by the `where` argument doesn't exist, create a new Automation with this data.
     */
    create: XOR<AutomationCreateInput, AutomationUncheckedCreateInput>
    /**
     * In case the Automation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AutomationUpdateInput, AutomationUncheckedUpdateInput>
  }

  /**
   * Automation delete
   */
  export type AutomationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    /**
     * Filter which Automation to delete.
     */
    where: AutomationWhereUniqueInput
  }

  /**
   * Automation deleteMany
   */
  export type AutomationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Automations to delete
     */
    where?: AutomationWhereInput
    /**
     * Limit how many Automations to delete.
     */
    limit?: number
  }

  /**
   * Automation.User
   */
  export type Automation$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Automation.trigger
   */
  export type Automation$triggerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    cursor?: TriggerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Automation.listener
   */
  export type Automation$listenerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listener
     */
    select?: ListenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listener
     */
    omit?: ListenerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListenerInclude<ExtArgs> | null
    where?: ListenerWhereInput
  }

  /**
   * Automation.posts
   */
  export type Automation$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Automation.dms
   */
  export type Automation$dmsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dms
     */
    select?: DmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dms
     */
    omit?: DmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DmsInclude<ExtArgs> | null
    where?: DmsWhereInput
    orderBy?: DmsOrderByWithRelationInput | DmsOrderByWithRelationInput[]
    cursor?: DmsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DmsScalarFieldEnum | DmsScalarFieldEnum[]
  }

  /**
   * Automation.keywords
   */
  export type Automation$keywordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    where?: KeywordWhereInput
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    cursor?: KeywordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Automation without action
   */
  export type AutomationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
  }


  /**
   * Model Integrations
   */

  export type AggregateIntegrations = {
    _count: IntegrationsCountAggregateOutputType | null
    _min: IntegrationsMinAggregateOutputType | null
    _max: IntegrationsMaxAggregateOutputType | null
  }

  export type IntegrationsMinAggregateOutputType = {
    id: string | null
    name: $Enums.INTERGRATION | null
    createdAt: Date | null
    userId: string | null
    token: string | null
    expireAt: Date | null
    instagramId: string | null
  }

  export type IntegrationsMaxAggregateOutputType = {
    id: string | null
    name: $Enums.INTERGRATION | null
    createdAt: Date | null
    userId: string | null
    token: string | null
    expireAt: Date | null
    instagramId: string | null
  }

  export type IntegrationsCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    userId: number
    token: number
    expireAt: number
    instagramId: number
    _all: number
  }


  export type IntegrationsMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    userId?: true
    token?: true
    expireAt?: true
    instagramId?: true
  }

  export type IntegrationsMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    userId?: true
    token?: true
    expireAt?: true
    instagramId?: true
  }

  export type IntegrationsCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    userId?: true
    token?: true
    expireAt?: true
    instagramId?: true
    _all?: true
  }

  export type IntegrationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Integrations to aggregate.
     */
    where?: IntegrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationsOrderByWithRelationInput | IntegrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IntegrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Integrations
    **/
    _count?: true | IntegrationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IntegrationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IntegrationsMaxAggregateInputType
  }

  export type GetIntegrationsAggregateType<T extends IntegrationsAggregateArgs> = {
        [P in keyof T & keyof AggregateIntegrations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIntegrations[P]>
      : GetScalarType<T[P], AggregateIntegrations[P]>
  }




  export type IntegrationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IntegrationsWhereInput
    orderBy?: IntegrationsOrderByWithAggregationInput | IntegrationsOrderByWithAggregationInput[]
    by: IntegrationsScalarFieldEnum[] | IntegrationsScalarFieldEnum
    having?: IntegrationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IntegrationsCountAggregateInputType | true
    _min?: IntegrationsMinAggregateInputType
    _max?: IntegrationsMaxAggregateInputType
  }

  export type IntegrationsGroupByOutputType = {
    id: string
    name: $Enums.INTERGRATION
    createdAt: Date
    userId: string | null
    token: string
    expireAt: Date | null
    instagramId: string | null
    _count: IntegrationsCountAggregateOutputType | null
    _min: IntegrationsMinAggregateOutputType | null
    _max: IntegrationsMaxAggregateOutputType | null
  }

  type GetIntegrationsGroupByPayload<T extends IntegrationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IntegrationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IntegrationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IntegrationsGroupByOutputType[P]>
            : GetScalarType<T[P], IntegrationsGroupByOutputType[P]>
        }
      >
    >


  export type IntegrationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    userId?: boolean
    token?: boolean
    expireAt?: boolean
    instagramId?: boolean
    User?: boolean | Integrations$UserArgs<ExtArgs>
  }, ExtArgs["result"]["integrations"]>



  export type IntegrationsSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    userId?: boolean
    token?: boolean
    expireAt?: boolean
    instagramId?: boolean
  }

  export type IntegrationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "userId" | "token" | "expireAt" | "instagramId", ExtArgs["result"]["integrations"]>
  export type IntegrationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Integrations$UserArgs<ExtArgs>
  }

  export type $IntegrationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Integrations"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: $Enums.INTERGRATION
      createdAt: Date
      userId: string | null
      token: string
      expireAt: Date | null
      instagramId: string | null
    }, ExtArgs["result"]["integrations"]>
    composites: {}
  }

  type IntegrationsGetPayload<S extends boolean | null | undefined | IntegrationsDefaultArgs> = $Result.GetResult<Prisma.$IntegrationsPayload, S>

  type IntegrationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IntegrationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IntegrationsCountAggregateInputType | true
    }

  export interface IntegrationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Integrations'], meta: { name: 'Integrations' } }
    /**
     * Find zero or one Integrations that matches the filter.
     * @param {IntegrationsFindUniqueArgs} args - Arguments to find a Integrations
     * @example
     * // Get one Integrations
     * const integrations = await prisma.integrations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IntegrationsFindUniqueArgs>(args: SelectSubset<T, IntegrationsFindUniqueArgs<ExtArgs>>): Prisma__IntegrationsClient<$Result.GetResult<Prisma.$IntegrationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Integrations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IntegrationsFindUniqueOrThrowArgs} args - Arguments to find a Integrations
     * @example
     * // Get one Integrations
     * const integrations = await prisma.integrations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IntegrationsFindUniqueOrThrowArgs>(args: SelectSubset<T, IntegrationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IntegrationsClient<$Result.GetResult<Prisma.$IntegrationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Integrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationsFindFirstArgs} args - Arguments to find a Integrations
     * @example
     * // Get one Integrations
     * const integrations = await prisma.integrations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IntegrationsFindFirstArgs>(args?: SelectSubset<T, IntegrationsFindFirstArgs<ExtArgs>>): Prisma__IntegrationsClient<$Result.GetResult<Prisma.$IntegrationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Integrations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationsFindFirstOrThrowArgs} args - Arguments to find a Integrations
     * @example
     * // Get one Integrations
     * const integrations = await prisma.integrations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IntegrationsFindFirstOrThrowArgs>(args?: SelectSubset<T, IntegrationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__IntegrationsClient<$Result.GetResult<Prisma.$IntegrationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Integrations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Integrations
     * const integrations = await prisma.integrations.findMany()
     * 
     * // Get first 10 Integrations
     * const integrations = await prisma.integrations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const integrationsWithIdOnly = await prisma.integrations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IntegrationsFindManyArgs>(args?: SelectSubset<T, IntegrationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IntegrationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Integrations.
     * @param {IntegrationsCreateArgs} args - Arguments to create a Integrations.
     * @example
     * // Create one Integrations
     * const Integrations = await prisma.integrations.create({
     *   data: {
     *     // ... data to create a Integrations
     *   }
     * })
     * 
     */
    create<T extends IntegrationsCreateArgs>(args: SelectSubset<T, IntegrationsCreateArgs<ExtArgs>>): Prisma__IntegrationsClient<$Result.GetResult<Prisma.$IntegrationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Integrations.
     * @param {IntegrationsCreateManyArgs} args - Arguments to create many Integrations.
     * @example
     * // Create many Integrations
     * const integrations = await prisma.integrations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IntegrationsCreateManyArgs>(args?: SelectSubset<T, IntegrationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Integrations.
     * @param {IntegrationsDeleteArgs} args - Arguments to delete one Integrations.
     * @example
     * // Delete one Integrations
     * const Integrations = await prisma.integrations.delete({
     *   where: {
     *     // ... filter to delete one Integrations
     *   }
     * })
     * 
     */
    delete<T extends IntegrationsDeleteArgs>(args: SelectSubset<T, IntegrationsDeleteArgs<ExtArgs>>): Prisma__IntegrationsClient<$Result.GetResult<Prisma.$IntegrationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Integrations.
     * @param {IntegrationsUpdateArgs} args - Arguments to update one Integrations.
     * @example
     * // Update one Integrations
     * const integrations = await prisma.integrations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IntegrationsUpdateArgs>(args: SelectSubset<T, IntegrationsUpdateArgs<ExtArgs>>): Prisma__IntegrationsClient<$Result.GetResult<Prisma.$IntegrationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Integrations.
     * @param {IntegrationsDeleteManyArgs} args - Arguments to filter Integrations to delete.
     * @example
     * // Delete a few Integrations
     * const { count } = await prisma.integrations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IntegrationsDeleteManyArgs>(args?: SelectSubset<T, IntegrationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Integrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Integrations
     * const integrations = await prisma.integrations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IntegrationsUpdateManyArgs>(args: SelectSubset<T, IntegrationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Integrations.
     * @param {IntegrationsUpsertArgs} args - Arguments to update or create a Integrations.
     * @example
     * // Update or create a Integrations
     * const integrations = await prisma.integrations.upsert({
     *   create: {
     *     // ... data to create a Integrations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Integrations we want to update
     *   }
     * })
     */
    upsert<T extends IntegrationsUpsertArgs>(args: SelectSubset<T, IntegrationsUpsertArgs<ExtArgs>>): Prisma__IntegrationsClient<$Result.GetResult<Prisma.$IntegrationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Integrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationsCountArgs} args - Arguments to filter Integrations to count.
     * @example
     * // Count the number of Integrations
     * const count = await prisma.integrations.count({
     *   where: {
     *     // ... the filter for the Integrations we want to count
     *   }
     * })
    **/
    count<T extends IntegrationsCountArgs>(
      args?: Subset<T, IntegrationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IntegrationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Integrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IntegrationsAggregateArgs>(args: Subset<T, IntegrationsAggregateArgs>): Prisma.PrismaPromise<GetIntegrationsAggregateType<T>>

    /**
     * Group by Integrations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IntegrationsGroupByArgs} args - Group by arguments.
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
      T extends IntegrationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IntegrationsGroupByArgs['orderBy'] }
        : { orderBy?: IntegrationsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IntegrationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIntegrationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Integrations model
   */
  readonly fields: IntegrationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Integrations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IntegrationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Integrations$UserArgs<ExtArgs> = {}>(args?: Subset<T, Integrations$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Integrations model
   */
  interface IntegrationsFieldRefs {
    readonly id: FieldRef<"Integrations", 'String'>
    readonly name: FieldRef<"Integrations", 'INTERGRATION'>
    readonly createdAt: FieldRef<"Integrations", 'DateTime'>
    readonly userId: FieldRef<"Integrations", 'String'>
    readonly token: FieldRef<"Integrations", 'String'>
    readonly expireAt: FieldRef<"Integrations", 'DateTime'>
    readonly instagramId: FieldRef<"Integrations", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Integrations findUnique
   */
  export type IntegrationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integrations
     */
    select?: IntegrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integrations
     */
    omit?: IntegrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationsInclude<ExtArgs> | null
    /**
     * Filter, which Integrations to fetch.
     */
    where: IntegrationsWhereUniqueInput
  }

  /**
   * Integrations findUniqueOrThrow
   */
  export type IntegrationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integrations
     */
    select?: IntegrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integrations
     */
    omit?: IntegrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationsInclude<ExtArgs> | null
    /**
     * Filter, which Integrations to fetch.
     */
    where: IntegrationsWhereUniqueInput
  }

  /**
   * Integrations findFirst
   */
  export type IntegrationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integrations
     */
    select?: IntegrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integrations
     */
    omit?: IntegrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationsInclude<ExtArgs> | null
    /**
     * Filter, which Integrations to fetch.
     */
    where?: IntegrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationsOrderByWithRelationInput | IntegrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Integrations.
     */
    cursor?: IntegrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Integrations.
     */
    distinct?: IntegrationsScalarFieldEnum | IntegrationsScalarFieldEnum[]
  }

  /**
   * Integrations findFirstOrThrow
   */
  export type IntegrationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integrations
     */
    select?: IntegrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integrations
     */
    omit?: IntegrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationsInclude<ExtArgs> | null
    /**
     * Filter, which Integrations to fetch.
     */
    where?: IntegrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationsOrderByWithRelationInput | IntegrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Integrations.
     */
    cursor?: IntegrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Integrations.
     */
    distinct?: IntegrationsScalarFieldEnum | IntegrationsScalarFieldEnum[]
  }

  /**
   * Integrations findMany
   */
  export type IntegrationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integrations
     */
    select?: IntegrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integrations
     */
    omit?: IntegrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationsInclude<ExtArgs> | null
    /**
     * Filter, which Integrations to fetch.
     */
    where?: IntegrationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Integrations to fetch.
     */
    orderBy?: IntegrationsOrderByWithRelationInput | IntegrationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Integrations.
     */
    cursor?: IntegrationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Integrations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Integrations.
     */
    skip?: number
    distinct?: IntegrationsScalarFieldEnum | IntegrationsScalarFieldEnum[]
  }

  /**
   * Integrations create
   */
  export type IntegrationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integrations
     */
    select?: IntegrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integrations
     */
    omit?: IntegrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationsInclude<ExtArgs> | null
    /**
     * The data needed to create a Integrations.
     */
    data: XOR<IntegrationsCreateInput, IntegrationsUncheckedCreateInput>
  }

  /**
   * Integrations createMany
   */
  export type IntegrationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Integrations.
     */
    data: IntegrationsCreateManyInput | IntegrationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Integrations update
   */
  export type IntegrationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integrations
     */
    select?: IntegrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integrations
     */
    omit?: IntegrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationsInclude<ExtArgs> | null
    /**
     * The data needed to update a Integrations.
     */
    data: XOR<IntegrationsUpdateInput, IntegrationsUncheckedUpdateInput>
    /**
     * Choose, which Integrations to update.
     */
    where: IntegrationsWhereUniqueInput
  }

  /**
   * Integrations updateMany
   */
  export type IntegrationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Integrations.
     */
    data: XOR<IntegrationsUpdateManyMutationInput, IntegrationsUncheckedUpdateManyInput>
    /**
     * Filter which Integrations to update
     */
    where?: IntegrationsWhereInput
    /**
     * Limit how many Integrations to update.
     */
    limit?: number
  }

  /**
   * Integrations upsert
   */
  export type IntegrationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integrations
     */
    select?: IntegrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integrations
     */
    omit?: IntegrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationsInclude<ExtArgs> | null
    /**
     * The filter to search for the Integrations to update in case it exists.
     */
    where: IntegrationsWhereUniqueInput
    /**
     * In case the Integrations found by the `where` argument doesn't exist, create a new Integrations with this data.
     */
    create: XOR<IntegrationsCreateInput, IntegrationsUncheckedCreateInput>
    /**
     * In case the Integrations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IntegrationsUpdateInput, IntegrationsUncheckedUpdateInput>
  }

  /**
   * Integrations delete
   */
  export type IntegrationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integrations
     */
    select?: IntegrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integrations
     */
    omit?: IntegrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationsInclude<ExtArgs> | null
    /**
     * Filter which Integrations to delete.
     */
    where: IntegrationsWhereUniqueInput
  }

  /**
   * Integrations deleteMany
   */
  export type IntegrationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Integrations to delete
     */
    where?: IntegrationsWhereInput
    /**
     * Limit how many Integrations to delete.
     */
    limit?: number
  }

  /**
   * Integrations.User
   */
  export type Integrations$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Integrations without action
   */
  export type IntegrationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Integrations
     */
    select?: IntegrationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Integrations
     */
    omit?: IntegrationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IntegrationsInclude<ExtArgs> | null
  }


  /**
   * Model Trigger
   */

  export type AggregateTrigger = {
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  export type TriggerMinAggregateOutputType = {
    id: string | null
    type: string | null
    automateId: string | null
  }

  export type TriggerMaxAggregateOutputType = {
    id: string | null
    type: string | null
    automateId: string | null
  }

  export type TriggerCountAggregateOutputType = {
    id: number
    type: number
    automateId: number
    _all: number
  }


  export type TriggerMinAggregateInputType = {
    id?: true
    type?: true
    automateId?: true
  }

  export type TriggerMaxAggregateInputType = {
    id?: true
    type?: true
    automateId?: true
  }

  export type TriggerCountAggregateInputType = {
    id?: true
    type?: true
    automateId?: true
    _all?: true
  }

  export type TriggerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Trigger to aggregate.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Triggers
    **/
    _count?: true | TriggerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TriggerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TriggerMaxAggregateInputType
  }

  export type GetTriggerAggregateType<T extends TriggerAggregateArgs> = {
        [P in keyof T & keyof AggregateTrigger]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrigger[P]>
      : GetScalarType<T[P], AggregateTrigger[P]>
  }




  export type TriggerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TriggerWhereInput
    orderBy?: TriggerOrderByWithAggregationInput | TriggerOrderByWithAggregationInput[]
    by: TriggerScalarFieldEnum[] | TriggerScalarFieldEnum
    having?: TriggerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TriggerCountAggregateInputType | true
    _min?: TriggerMinAggregateInputType
    _max?: TriggerMaxAggregateInputType
  }

  export type TriggerGroupByOutputType = {
    id: string
    type: string
    automateId: string | null
    _count: TriggerCountAggregateOutputType | null
    _min: TriggerMinAggregateOutputType | null
    _max: TriggerMaxAggregateOutputType | null
  }

  type GetTriggerGroupByPayload<T extends TriggerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TriggerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TriggerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TriggerGroupByOutputType[P]>
            : GetScalarType<T[P], TriggerGroupByOutputType[P]>
        }
      >
    >


  export type TriggerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    automateId?: boolean
    Automation?: boolean | Trigger$AutomationArgs<ExtArgs>
  }, ExtArgs["result"]["trigger"]>



  export type TriggerSelectScalar = {
    id?: boolean
    type?: boolean
    automateId?: boolean
  }

  export type TriggerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "automateId", ExtArgs["result"]["trigger"]>
  export type TriggerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Automation?: boolean | Trigger$AutomationArgs<ExtArgs>
  }

  export type $TriggerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Trigger"
    objects: {
      Automation: Prisma.$AutomationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      automateId: string | null
    }, ExtArgs["result"]["trigger"]>
    composites: {}
  }

  type TriggerGetPayload<S extends boolean | null | undefined | TriggerDefaultArgs> = $Result.GetResult<Prisma.$TriggerPayload, S>

  type TriggerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TriggerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TriggerCountAggregateInputType | true
    }

  export interface TriggerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Trigger'], meta: { name: 'Trigger' } }
    /**
     * Find zero or one Trigger that matches the filter.
     * @param {TriggerFindUniqueArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TriggerFindUniqueArgs>(args: SelectSubset<T, TriggerFindUniqueArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Trigger that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TriggerFindUniqueOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TriggerFindUniqueOrThrowArgs>(args: SelectSubset<T, TriggerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TriggerFindFirstArgs>(args?: SelectSubset<T, TriggerFindFirstArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Trigger that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindFirstOrThrowArgs} args - Arguments to find a Trigger
     * @example
     * // Get one Trigger
     * const trigger = await prisma.trigger.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TriggerFindFirstOrThrowArgs>(args?: SelectSubset<T, TriggerFindFirstOrThrowArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Triggers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Triggers
     * const triggers = await prisma.trigger.findMany()
     * 
     * // Get first 10 Triggers
     * const triggers = await prisma.trigger.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const triggerWithIdOnly = await prisma.trigger.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TriggerFindManyArgs>(args?: SelectSubset<T, TriggerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Trigger.
     * @param {TriggerCreateArgs} args - Arguments to create a Trigger.
     * @example
     * // Create one Trigger
     * const Trigger = await prisma.trigger.create({
     *   data: {
     *     // ... data to create a Trigger
     *   }
     * })
     * 
     */
    create<T extends TriggerCreateArgs>(args: SelectSubset<T, TriggerCreateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Triggers.
     * @param {TriggerCreateManyArgs} args - Arguments to create many Triggers.
     * @example
     * // Create many Triggers
     * const trigger = await prisma.trigger.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TriggerCreateManyArgs>(args?: SelectSubset<T, TriggerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Trigger.
     * @param {TriggerDeleteArgs} args - Arguments to delete one Trigger.
     * @example
     * // Delete one Trigger
     * const Trigger = await prisma.trigger.delete({
     *   where: {
     *     // ... filter to delete one Trigger
     *   }
     * })
     * 
     */
    delete<T extends TriggerDeleteArgs>(args: SelectSubset<T, TriggerDeleteArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Trigger.
     * @param {TriggerUpdateArgs} args - Arguments to update one Trigger.
     * @example
     * // Update one Trigger
     * const trigger = await prisma.trigger.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TriggerUpdateArgs>(args: SelectSubset<T, TriggerUpdateArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Triggers.
     * @param {TriggerDeleteManyArgs} args - Arguments to filter Triggers to delete.
     * @example
     * // Delete a few Triggers
     * const { count } = await prisma.trigger.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TriggerDeleteManyArgs>(args?: SelectSubset<T, TriggerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Triggers
     * const trigger = await prisma.trigger.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TriggerUpdateManyArgs>(args: SelectSubset<T, TriggerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Trigger.
     * @param {TriggerUpsertArgs} args - Arguments to update or create a Trigger.
     * @example
     * // Update or create a Trigger
     * const trigger = await prisma.trigger.upsert({
     *   create: {
     *     // ... data to create a Trigger
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Trigger we want to update
     *   }
     * })
     */
    upsert<T extends TriggerUpsertArgs>(args: SelectSubset<T, TriggerUpsertArgs<ExtArgs>>): Prisma__TriggerClient<$Result.GetResult<Prisma.$TriggerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Triggers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerCountArgs} args - Arguments to filter Triggers to count.
     * @example
     * // Count the number of Triggers
     * const count = await prisma.trigger.count({
     *   where: {
     *     // ... the filter for the Triggers we want to count
     *   }
     * })
    **/
    count<T extends TriggerCountArgs>(
      args?: Subset<T, TriggerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TriggerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TriggerAggregateArgs>(args: Subset<T, TriggerAggregateArgs>): Prisma.PrismaPromise<GetTriggerAggregateType<T>>

    /**
     * Group by Trigger.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TriggerGroupByArgs} args - Group by arguments.
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
      T extends TriggerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TriggerGroupByArgs['orderBy'] }
        : { orderBy?: TriggerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TriggerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTriggerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Trigger model
   */
  readonly fields: TriggerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Trigger.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TriggerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Automation<T extends Trigger$AutomationArgs<ExtArgs> = {}>(args?: Subset<T, Trigger$AutomationArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Trigger model
   */
  interface TriggerFieldRefs {
    readonly id: FieldRef<"Trigger", 'String'>
    readonly type: FieldRef<"Trigger", 'String'>
    readonly automateId: FieldRef<"Trigger", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Trigger findUnique
   */
  export type TriggerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findUniqueOrThrow
   */
  export type TriggerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger findFirst
   */
  export type TriggerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findFirstOrThrow
   */
  export type TriggerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Trigger to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Triggers.
     */
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger findMany
   */
  export type TriggerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter, which Triggers to fetch.
     */
    where?: TriggerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Triggers to fetch.
     */
    orderBy?: TriggerOrderByWithRelationInput | TriggerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Triggers.
     */
    cursor?: TriggerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Triggers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Triggers.
     */
    skip?: number
    distinct?: TriggerScalarFieldEnum | TriggerScalarFieldEnum[]
  }

  /**
   * Trigger create
   */
  export type TriggerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to create a Trigger.
     */
    data: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
  }

  /**
   * Trigger createMany
   */
  export type TriggerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Triggers.
     */
    data: TriggerCreateManyInput | TriggerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Trigger update
   */
  export type TriggerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The data needed to update a Trigger.
     */
    data: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
    /**
     * Choose, which Trigger to update.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger updateMany
   */
  export type TriggerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Triggers.
     */
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyInput>
    /**
     * Filter which Triggers to update
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to update.
     */
    limit?: number
  }

  /**
   * Trigger upsert
   */
  export type TriggerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * The filter to search for the Trigger to update in case it exists.
     */
    where: TriggerWhereUniqueInput
    /**
     * In case the Trigger found by the `where` argument doesn't exist, create a new Trigger with this data.
     */
    create: XOR<TriggerCreateInput, TriggerUncheckedCreateInput>
    /**
     * In case the Trigger was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TriggerUpdateInput, TriggerUncheckedUpdateInput>
  }

  /**
   * Trigger delete
   */
  export type TriggerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
    /**
     * Filter which Trigger to delete.
     */
    where: TriggerWhereUniqueInput
  }

  /**
   * Trigger deleteMany
   */
  export type TriggerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Triggers to delete
     */
    where?: TriggerWhereInput
    /**
     * Limit how many Triggers to delete.
     */
    limit?: number
  }

  /**
   * Trigger.Automation
   */
  export type Trigger$AutomationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    where?: AutomationWhereInput
  }

  /**
   * Trigger without action
   */
  export type TriggerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Trigger
     */
    select?: TriggerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Trigger
     */
    omit?: TriggerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TriggerInclude<ExtArgs> | null
  }


  /**
   * Model Listener
   */

  export type AggregateListener = {
    _count: ListenerCountAggregateOutputType | null
    _avg: ListenerAvgAggregateOutputType | null
    _sum: ListenerSumAggregateOutputType | null
    _min: ListenerMinAggregateOutputType | null
    _max: ListenerMaxAggregateOutputType | null
  }

  export type ListenerAvgAggregateOutputType = {
    dmCount: number | null
    commentCount: number | null
  }

  export type ListenerSumAggregateOutputType = {
    dmCount: number | null
    commentCount: number | null
  }

  export type ListenerMinAggregateOutputType = {
    id: string | null
    automateId: string | null
    listener: $Enums.LISTENER | null
    prompt: string | null
    commentReply: string | null
    dmCount: number | null
    commentCount: number | null
  }

  export type ListenerMaxAggregateOutputType = {
    id: string | null
    automateId: string | null
    listener: $Enums.LISTENER | null
    prompt: string | null
    commentReply: string | null
    dmCount: number | null
    commentCount: number | null
  }

  export type ListenerCountAggregateOutputType = {
    id: number
    automateId: number
    listener: number
    prompt: number
    commentReply: number
    dmCount: number
    commentCount: number
    _all: number
  }


  export type ListenerAvgAggregateInputType = {
    dmCount?: true
    commentCount?: true
  }

  export type ListenerSumAggregateInputType = {
    dmCount?: true
    commentCount?: true
  }

  export type ListenerMinAggregateInputType = {
    id?: true
    automateId?: true
    listener?: true
    prompt?: true
    commentReply?: true
    dmCount?: true
    commentCount?: true
  }

  export type ListenerMaxAggregateInputType = {
    id?: true
    automateId?: true
    listener?: true
    prompt?: true
    commentReply?: true
    dmCount?: true
    commentCount?: true
  }

  export type ListenerCountAggregateInputType = {
    id?: true
    automateId?: true
    listener?: true
    prompt?: true
    commentReply?: true
    dmCount?: true
    commentCount?: true
    _all?: true
  }

  export type ListenerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listener to aggregate.
     */
    where?: ListenerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listeners to fetch.
     */
    orderBy?: ListenerOrderByWithRelationInput | ListenerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListenerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listeners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listeners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Listeners
    **/
    _count?: true | ListenerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListenerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListenerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListenerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListenerMaxAggregateInputType
  }

  export type GetListenerAggregateType<T extends ListenerAggregateArgs> = {
        [P in keyof T & keyof AggregateListener]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListener[P]>
      : GetScalarType<T[P], AggregateListener[P]>
  }




  export type ListenerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListenerWhereInput
    orderBy?: ListenerOrderByWithAggregationInput | ListenerOrderByWithAggregationInput[]
    by: ListenerScalarFieldEnum[] | ListenerScalarFieldEnum
    having?: ListenerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListenerCountAggregateInputType | true
    _avg?: ListenerAvgAggregateInputType
    _sum?: ListenerSumAggregateInputType
    _min?: ListenerMinAggregateInputType
    _max?: ListenerMaxAggregateInputType
  }

  export type ListenerGroupByOutputType = {
    id: string
    automateId: string
    listener: $Enums.LISTENER
    prompt: string
    commentReply: string | null
    dmCount: number
    commentCount: number
    _count: ListenerCountAggregateOutputType | null
    _avg: ListenerAvgAggregateOutputType | null
    _sum: ListenerSumAggregateOutputType | null
    _min: ListenerMinAggregateOutputType | null
    _max: ListenerMaxAggregateOutputType | null
  }

  type GetListenerGroupByPayload<T extends ListenerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListenerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListenerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListenerGroupByOutputType[P]>
            : GetScalarType<T[P], ListenerGroupByOutputType[P]>
        }
      >
    >


  export type ListenerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    automateId?: boolean
    listener?: boolean
    prompt?: boolean
    commentReply?: boolean
    dmCount?: boolean
    commentCount?: boolean
    Automation?: boolean | AutomationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listener"]>



  export type ListenerSelectScalar = {
    id?: boolean
    automateId?: boolean
    listener?: boolean
    prompt?: boolean
    commentReply?: boolean
    dmCount?: boolean
    commentCount?: boolean
  }

  export type ListenerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "automateId" | "listener" | "prompt" | "commentReply" | "dmCount" | "commentCount", ExtArgs["result"]["listener"]>
  export type ListenerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Automation?: boolean | AutomationDefaultArgs<ExtArgs>
  }

  export type $ListenerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Listener"
    objects: {
      Automation: Prisma.$AutomationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      automateId: string
      listener: $Enums.LISTENER
      prompt: string
      commentReply: string | null
      dmCount: number
      commentCount: number
    }, ExtArgs["result"]["listener"]>
    composites: {}
  }

  type ListenerGetPayload<S extends boolean | null | undefined | ListenerDefaultArgs> = $Result.GetResult<Prisma.$ListenerPayload, S>

  type ListenerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListenerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListenerCountAggregateInputType | true
    }

  export interface ListenerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Listener'], meta: { name: 'Listener' } }
    /**
     * Find zero or one Listener that matches the filter.
     * @param {ListenerFindUniqueArgs} args - Arguments to find a Listener
     * @example
     * // Get one Listener
     * const listener = await prisma.listener.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListenerFindUniqueArgs>(args: SelectSubset<T, ListenerFindUniqueArgs<ExtArgs>>): Prisma__ListenerClient<$Result.GetResult<Prisma.$ListenerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Listener that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListenerFindUniqueOrThrowArgs} args - Arguments to find a Listener
     * @example
     * // Get one Listener
     * const listener = await prisma.listener.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListenerFindUniqueOrThrowArgs>(args: SelectSubset<T, ListenerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListenerClient<$Result.GetResult<Prisma.$ListenerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listener that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListenerFindFirstArgs} args - Arguments to find a Listener
     * @example
     * // Get one Listener
     * const listener = await prisma.listener.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListenerFindFirstArgs>(args?: SelectSubset<T, ListenerFindFirstArgs<ExtArgs>>): Prisma__ListenerClient<$Result.GetResult<Prisma.$ListenerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Listener that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListenerFindFirstOrThrowArgs} args - Arguments to find a Listener
     * @example
     * // Get one Listener
     * const listener = await prisma.listener.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListenerFindFirstOrThrowArgs>(args?: SelectSubset<T, ListenerFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListenerClient<$Result.GetResult<Prisma.$ListenerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Listeners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListenerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Listeners
     * const listeners = await prisma.listener.findMany()
     * 
     * // Get first 10 Listeners
     * const listeners = await prisma.listener.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listenerWithIdOnly = await prisma.listener.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListenerFindManyArgs>(args?: SelectSubset<T, ListenerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListenerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Listener.
     * @param {ListenerCreateArgs} args - Arguments to create a Listener.
     * @example
     * // Create one Listener
     * const Listener = await prisma.listener.create({
     *   data: {
     *     // ... data to create a Listener
     *   }
     * })
     * 
     */
    create<T extends ListenerCreateArgs>(args: SelectSubset<T, ListenerCreateArgs<ExtArgs>>): Prisma__ListenerClient<$Result.GetResult<Prisma.$ListenerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Listeners.
     * @param {ListenerCreateManyArgs} args - Arguments to create many Listeners.
     * @example
     * // Create many Listeners
     * const listener = await prisma.listener.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListenerCreateManyArgs>(args?: SelectSubset<T, ListenerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Listener.
     * @param {ListenerDeleteArgs} args - Arguments to delete one Listener.
     * @example
     * // Delete one Listener
     * const Listener = await prisma.listener.delete({
     *   where: {
     *     // ... filter to delete one Listener
     *   }
     * })
     * 
     */
    delete<T extends ListenerDeleteArgs>(args: SelectSubset<T, ListenerDeleteArgs<ExtArgs>>): Prisma__ListenerClient<$Result.GetResult<Prisma.$ListenerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Listener.
     * @param {ListenerUpdateArgs} args - Arguments to update one Listener.
     * @example
     * // Update one Listener
     * const listener = await prisma.listener.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListenerUpdateArgs>(args: SelectSubset<T, ListenerUpdateArgs<ExtArgs>>): Prisma__ListenerClient<$Result.GetResult<Prisma.$ListenerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Listeners.
     * @param {ListenerDeleteManyArgs} args - Arguments to filter Listeners to delete.
     * @example
     * // Delete a few Listeners
     * const { count } = await prisma.listener.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListenerDeleteManyArgs>(args?: SelectSubset<T, ListenerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Listeners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListenerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Listeners
     * const listener = await prisma.listener.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListenerUpdateManyArgs>(args: SelectSubset<T, ListenerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Listener.
     * @param {ListenerUpsertArgs} args - Arguments to update or create a Listener.
     * @example
     * // Update or create a Listener
     * const listener = await prisma.listener.upsert({
     *   create: {
     *     // ... data to create a Listener
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Listener we want to update
     *   }
     * })
     */
    upsert<T extends ListenerUpsertArgs>(args: SelectSubset<T, ListenerUpsertArgs<ExtArgs>>): Prisma__ListenerClient<$Result.GetResult<Prisma.$ListenerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Listeners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListenerCountArgs} args - Arguments to filter Listeners to count.
     * @example
     * // Count the number of Listeners
     * const count = await prisma.listener.count({
     *   where: {
     *     // ... the filter for the Listeners we want to count
     *   }
     * })
    **/
    count<T extends ListenerCountArgs>(
      args?: Subset<T, ListenerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListenerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Listener.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListenerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListenerAggregateArgs>(args: Subset<T, ListenerAggregateArgs>): Prisma.PrismaPromise<GetListenerAggregateType<T>>

    /**
     * Group by Listener.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListenerGroupByArgs} args - Group by arguments.
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
      T extends ListenerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListenerGroupByArgs['orderBy'] }
        : { orderBy?: ListenerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListenerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListenerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Listener model
   */
  readonly fields: ListenerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Listener.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListenerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Automation<T extends AutomationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AutomationDefaultArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Listener model
   */
  interface ListenerFieldRefs {
    readonly id: FieldRef<"Listener", 'String'>
    readonly automateId: FieldRef<"Listener", 'String'>
    readonly listener: FieldRef<"Listener", 'LISTENER'>
    readonly prompt: FieldRef<"Listener", 'String'>
    readonly commentReply: FieldRef<"Listener", 'String'>
    readonly dmCount: FieldRef<"Listener", 'Int'>
    readonly commentCount: FieldRef<"Listener", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Listener findUnique
   */
  export type ListenerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listener
     */
    select?: ListenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listener
     */
    omit?: ListenerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListenerInclude<ExtArgs> | null
    /**
     * Filter, which Listener to fetch.
     */
    where: ListenerWhereUniqueInput
  }

  /**
   * Listener findUniqueOrThrow
   */
  export type ListenerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listener
     */
    select?: ListenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listener
     */
    omit?: ListenerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListenerInclude<ExtArgs> | null
    /**
     * Filter, which Listener to fetch.
     */
    where: ListenerWhereUniqueInput
  }

  /**
   * Listener findFirst
   */
  export type ListenerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listener
     */
    select?: ListenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listener
     */
    omit?: ListenerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListenerInclude<ExtArgs> | null
    /**
     * Filter, which Listener to fetch.
     */
    where?: ListenerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listeners to fetch.
     */
    orderBy?: ListenerOrderByWithRelationInput | ListenerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listeners.
     */
    cursor?: ListenerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listeners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listeners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listeners.
     */
    distinct?: ListenerScalarFieldEnum | ListenerScalarFieldEnum[]
  }

  /**
   * Listener findFirstOrThrow
   */
  export type ListenerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listener
     */
    select?: ListenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listener
     */
    omit?: ListenerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListenerInclude<ExtArgs> | null
    /**
     * Filter, which Listener to fetch.
     */
    where?: ListenerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listeners to fetch.
     */
    orderBy?: ListenerOrderByWithRelationInput | ListenerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Listeners.
     */
    cursor?: ListenerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listeners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listeners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Listeners.
     */
    distinct?: ListenerScalarFieldEnum | ListenerScalarFieldEnum[]
  }

  /**
   * Listener findMany
   */
  export type ListenerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listener
     */
    select?: ListenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listener
     */
    omit?: ListenerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListenerInclude<ExtArgs> | null
    /**
     * Filter, which Listeners to fetch.
     */
    where?: ListenerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Listeners to fetch.
     */
    orderBy?: ListenerOrderByWithRelationInput | ListenerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Listeners.
     */
    cursor?: ListenerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Listeners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Listeners.
     */
    skip?: number
    distinct?: ListenerScalarFieldEnum | ListenerScalarFieldEnum[]
  }

  /**
   * Listener create
   */
  export type ListenerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listener
     */
    select?: ListenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listener
     */
    omit?: ListenerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListenerInclude<ExtArgs> | null
    /**
     * The data needed to create a Listener.
     */
    data: XOR<ListenerCreateInput, ListenerUncheckedCreateInput>
  }

  /**
   * Listener createMany
   */
  export type ListenerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Listeners.
     */
    data: ListenerCreateManyInput | ListenerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Listener update
   */
  export type ListenerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listener
     */
    select?: ListenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listener
     */
    omit?: ListenerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListenerInclude<ExtArgs> | null
    /**
     * The data needed to update a Listener.
     */
    data: XOR<ListenerUpdateInput, ListenerUncheckedUpdateInput>
    /**
     * Choose, which Listener to update.
     */
    where: ListenerWhereUniqueInput
  }

  /**
   * Listener updateMany
   */
  export type ListenerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Listeners.
     */
    data: XOR<ListenerUpdateManyMutationInput, ListenerUncheckedUpdateManyInput>
    /**
     * Filter which Listeners to update
     */
    where?: ListenerWhereInput
    /**
     * Limit how many Listeners to update.
     */
    limit?: number
  }

  /**
   * Listener upsert
   */
  export type ListenerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listener
     */
    select?: ListenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listener
     */
    omit?: ListenerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListenerInclude<ExtArgs> | null
    /**
     * The filter to search for the Listener to update in case it exists.
     */
    where: ListenerWhereUniqueInput
    /**
     * In case the Listener found by the `where` argument doesn't exist, create a new Listener with this data.
     */
    create: XOR<ListenerCreateInput, ListenerUncheckedCreateInput>
    /**
     * In case the Listener was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListenerUpdateInput, ListenerUncheckedUpdateInput>
  }

  /**
   * Listener delete
   */
  export type ListenerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listener
     */
    select?: ListenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listener
     */
    omit?: ListenerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListenerInclude<ExtArgs> | null
    /**
     * Filter which Listener to delete.
     */
    where: ListenerWhereUniqueInput
  }

  /**
   * Listener deleteMany
   */
  export type ListenerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Listeners to delete
     */
    where?: ListenerWhereInput
    /**
     * Limit how many Listeners to delete.
     */
    limit?: number
  }

  /**
   * Listener without action
   */
  export type ListenerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Listener
     */
    select?: ListenerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Listener
     */
    omit?: ListenerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListenerInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostMinAggregateOutputType = {
    id: string | null
    postid: string | null
    caption: string | null
    media: string | null
    mediaType: $Enums.MEDIA_TYPE | null
    automateId: string | null
  }

  export type PostMaxAggregateOutputType = {
    id: string | null
    postid: string | null
    caption: string | null
    media: string | null
    mediaType: $Enums.MEDIA_TYPE | null
    automateId: string | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    postid: number
    caption: number
    media: number
    mediaType: number
    automateId: number
    _all: number
  }


  export type PostMinAggregateInputType = {
    id?: true
    postid?: true
    caption?: true
    media?: true
    mediaType?: true
    automateId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    postid?: true
    caption?: true
    media?: true
    mediaType?: true
    automateId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    postid?: true
    caption?: true
    media?: true
    mediaType?: true
    automateId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: string
    postid: string
    caption: string | null
    media: string
    mediaType: $Enums.MEDIA_TYPE
    automateId: string | null
    _count: PostCountAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    postid?: boolean
    caption?: boolean
    media?: boolean
    mediaType?: boolean
    automateId?: boolean
    Automation?: boolean | Post$AutomationArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>



  export type PostSelectScalar = {
    id?: boolean
    postid?: boolean
    caption?: boolean
    media?: boolean
    mediaType?: boolean
    automateId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "postid" | "caption" | "media" | "mediaType" | "automateId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Automation?: boolean | Post$AutomationArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      Automation: Prisma.$AutomationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      postid: string
      caption: string | null
      media: string
      mediaType: $Enums.MEDIA_TYPE
      automateId: string | null
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Automation<T extends Post$AutomationArgs<ExtArgs> = {}>(args?: Subset<T, Post$AutomationArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'String'>
    readonly postid: FieldRef<"Post", 'String'>
    readonly caption: FieldRef<"Post", 'String'>
    readonly media: FieldRef<"Post", 'String'>
    readonly mediaType: FieldRef<"Post", 'MEDIA_TYPE'>
    readonly automateId: FieldRef<"Post", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post.Automation
   */
  export type Post$AutomationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    where?: AutomationWhereInput
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Dms
   */

  export type AggregateDms = {
    _count: DmsCountAggregateOutputType | null
    _min: DmsMinAggregateOutputType | null
    _max: DmsMaxAggregateOutputType | null
  }

  export type DmsMinAggregateOutputType = {
    id: string | null
    automateId: string | null
    createdAt: Date | null
    senderId: string | null
    receiverId: string | null
    message: string | null
  }

  export type DmsMaxAggregateOutputType = {
    id: string | null
    automateId: string | null
    createdAt: Date | null
    senderId: string | null
    receiverId: string | null
    message: string | null
  }

  export type DmsCountAggregateOutputType = {
    id: number
    automateId: number
    createdAt: number
    senderId: number
    receiverId: number
    message: number
    _all: number
  }


  export type DmsMinAggregateInputType = {
    id?: true
    automateId?: true
    createdAt?: true
    senderId?: true
    receiverId?: true
    message?: true
  }

  export type DmsMaxAggregateInputType = {
    id?: true
    automateId?: true
    createdAt?: true
    senderId?: true
    receiverId?: true
    message?: true
  }

  export type DmsCountAggregateInputType = {
    id?: true
    automateId?: true
    createdAt?: true
    senderId?: true
    receiverId?: true
    message?: true
    _all?: true
  }

  export type DmsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dms to aggregate.
     */
    where?: DmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dms to fetch.
     */
    orderBy?: DmsOrderByWithRelationInput | DmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dms
    **/
    _count?: true | DmsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DmsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DmsMaxAggregateInputType
  }

  export type GetDmsAggregateType<T extends DmsAggregateArgs> = {
        [P in keyof T & keyof AggregateDms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDms[P]>
      : GetScalarType<T[P], AggregateDms[P]>
  }




  export type DmsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DmsWhereInput
    orderBy?: DmsOrderByWithAggregationInput | DmsOrderByWithAggregationInput[]
    by: DmsScalarFieldEnum[] | DmsScalarFieldEnum
    having?: DmsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DmsCountAggregateInputType | true
    _min?: DmsMinAggregateInputType
    _max?: DmsMaxAggregateInputType
  }

  export type DmsGroupByOutputType = {
    id: string
    automateId: string | null
    createdAt: Date
    senderId: string | null
    receiverId: string | null
    message: string | null
    _count: DmsCountAggregateOutputType | null
    _min: DmsMinAggregateOutputType | null
    _max: DmsMaxAggregateOutputType | null
  }

  type GetDmsGroupByPayload<T extends DmsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DmsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DmsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DmsGroupByOutputType[P]>
            : GetScalarType<T[P], DmsGroupByOutputType[P]>
        }
      >
    >


  export type DmsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    automateId?: boolean
    createdAt?: boolean
    senderId?: boolean
    receiverId?: boolean
    message?: boolean
    Automation?: boolean | Dms$AutomationArgs<ExtArgs>
  }, ExtArgs["result"]["dms"]>



  export type DmsSelectScalar = {
    id?: boolean
    automateId?: boolean
    createdAt?: boolean
    senderId?: boolean
    receiverId?: boolean
    message?: boolean
  }

  export type DmsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "automateId" | "createdAt" | "senderId" | "receiverId" | "message", ExtArgs["result"]["dms"]>
  export type DmsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Automation?: boolean | Dms$AutomationArgs<ExtArgs>
  }

  export type $DmsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dms"
    objects: {
      Automation: Prisma.$AutomationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      automateId: string | null
      createdAt: Date
      senderId: string | null
      receiverId: string | null
      message: string | null
    }, ExtArgs["result"]["dms"]>
    composites: {}
  }

  type DmsGetPayload<S extends boolean | null | undefined | DmsDefaultArgs> = $Result.GetResult<Prisma.$DmsPayload, S>

  type DmsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DmsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DmsCountAggregateInputType | true
    }

  export interface DmsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dms'], meta: { name: 'Dms' } }
    /**
     * Find zero or one Dms that matches the filter.
     * @param {DmsFindUniqueArgs} args - Arguments to find a Dms
     * @example
     * // Get one Dms
     * const dms = await prisma.dms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DmsFindUniqueArgs>(args: SelectSubset<T, DmsFindUniqueArgs<ExtArgs>>): Prisma__DmsClient<$Result.GetResult<Prisma.$DmsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DmsFindUniqueOrThrowArgs} args - Arguments to find a Dms
     * @example
     * // Get one Dms
     * const dms = await prisma.dms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DmsFindUniqueOrThrowArgs>(args: SelectSubset<T, DmsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DmsClient<$Result.GetResult<Prisma.$DmsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DmsFindFirstArgs} args - Arguments to find a Dms
     * @example
     * // Get one Dms
     * const dms = await prisma.dms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DmsFindFirstArgs>(args?: SelectSubset<T, DmsFindFirstArgs<ExtArgs>>): Prisma__DmsClient<$Result.GetResult<Prisma.$DmsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DmsFindFirstOrThrowArgs} args - Arguments to find a Dms
     * @example
     * // Get one Dms
     * const dms = await prisma.dms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DmsFindFirstOrThrowArgs>(args?: SelectSubset<T, DmsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DmsClient<$Result.GetResult<Prisma.$DmsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DmsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dms
     * const dms = await prisma.dms.findMany()
     * 
     * // Get first 10 Dms
     * const dms = await prisma.dms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dmsWithIdOnly = await prisma.dms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DmsFindManyArgs>(args?: SelectSubset<T, DmsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DmsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dms.
     * @param {DmsCreateArgs} args - Arguments to create a Dms.
     * @example
     * // Create one Dms
     * const Dms = await prisma.dms.create({
     *   data: {
     *     // ... data to create a Dms
     *   }
     * })
     * 
     */
    create<T extends DmsCreateArgs>(args: SelectSubset<T, DmsCreateArgs<ExtArgs>>): Prisma__DmsClient<$Result.GetResult<Prisma.$DmsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dms.
     * @param {DmsCreateManyArgs} args - Arguments to create many Dms.
     * @example
     * // Create many Dms
     * const dms = await prisma.dms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DmsCreateManyArgs>(args?: SelectSubset<T, DmsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Dms.
     * @param {DmsDeleteArgs} args - Arguments to delete one Dms.
     * @example
     * // Delete one Dms
     * const Dms = await prisma.dms.delete({
     *   where: {
     *     // ... filter to delete one Dms
     *   }
     * })
     * 
     */
    delete<T extends DmsDeleteArgs>(args: SelectSubset<T, DmsDeleteArgs<ExtArgs>>): Prisma__DmsClient<$Result.GetResult<Prisma.$DmsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dms.
     * @param {DmsUpdateArgs} args - Arguments to update one Dms.
     * @example
     * // Update one Dms
     * const dms = await prisma.dms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DmsUpdateArgs>(args: SelectSubset<T, DmsUpdateArgs<ExtArgs>>): Prisma__DmsClient<$Result.GetResult<Prisma.$DmsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dms.
     * @param {DmsDeleteManyArgs} args - Arguments to filter Dms to delete.
     * @example
     * // Delete a few Dms
     * const { count } = await prisma.dms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DmsDeleteManyArgs>(args?: SelectSubset<T, DmsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DmsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dms
     * const dms = await prisma.dms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DmsUpdateManyArgs>(args: SelectSubset<T, DmsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Dms.
     * @param {DmsUpsertArgs} args - Arguments to update or create a Dms.
     * @example
     * // Update or create a Dms
     * const dms = await prisma.dms.upsert({
     *   create: {
     *     // ... data to create a Dms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dms we want to update
     *   }
     * })
     */
    upsert<T extends DmsUpsertArgs>(args: SelectSubset<T, DmsUpsertArgs<ExtArgs>>): Prisma__DmsClient<$Result.GetResult<Prisma.$DmsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DmsCountArgs} args - Arguments to filter Dms to count.
     * @example
     * // Count the number of Dms
     * const count = await prisma.dms.count({
     *   where: {
     *     // ... the filter for the Dms we want to count
     *   }
     * })
    **/
    count<T extends DmsCountArgs>(
      args?: Subset<T, DmsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DmsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DmsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DmsAggregateArgs>(args: Subset<T, DmsAggregateArgs>): Prisma.PrismaPromise<GetDmsAggregateType<T>>

    /**
     * Group by Dms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DmsGroupByArgs} args - Group by arguments.
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
      T extends DmsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DmsGroupByArgs['orderBy'] }
        : { orderBy?: DmsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DmsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDmsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dms model
   */
  readonly fields: DmsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DmsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Automation<T extends Dms$AutomationArgs<ExtArgs> = {}>(args?: Subset<T, Dms$AutomationArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Dms model
   */
  interface DmsFieldRefs {
    readonly id: FieldRef<"Dms", 'String'>
    readonly automateId: FieldRef<"Dms", 'String'>
    readonly createdAt: FieldRef<"Dms", 'DateTime'>
    readonly senderId: FieldRef<"Dms", 'String'>
    readonly receiverId: FieldRef<"Dms", 'String'>
    readonly message: FieldRef<"Dms", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Dms findUnique
   */
  export type DmsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dms
     */
    select?: DmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dms
     */
    omit?: DmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DmsInclude<ExtArgs> | null
    /**
     * Filter, which Dms to fetch.
     */
    where: DmsWhereUniqueInput
  }

  /**
   * Dms findUniqueOrThrow
   */
  export type DmsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dms
     */
    select?: DmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dms
     */
    omit?: DmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DmsInclude<ExtArgs> | null
    /**
     * Filter, which Dms to fetch.
     */
    where: DmsWhereUniqueInput
  }

  /**
   * Dms findFirst
   */
  export type DmsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dms
     */
    select?: DmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dms
     */
    omit?: DmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DmsInclude<ExtArgs> | null
    /**
     * Filter, which Dms to fetch.
     */
    where?: DmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dms to fetch.
     */
    orderBy?: DmsOrderByWithRelationInput | DmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dms.
     */
    cursor?: DmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dms.
     */
    distinct?: DmsScalarFieldEnum | DmsScalarFieldEnum[]
  }

  /**
   * Dms findFirstOrThrow
   */
  export type DmsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dms
     */
    select?: DmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dms
     */
    omit?: DmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DmsInclude<ExtArgs> | null
    /**
     * Filter, which Dms to fetch.
     */
    where?: DmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dms to fetch.
     */
    orderBy?: DmsOrderByWithRelationInput | DmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dms.
     */
    cursor?: DmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dms.
     */
    distinct?: DmsScalarFieldEnum | DmsScalarFieldEnum[]
  }

  /**
   * Dms findMany
   */
  export type DmsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dms
     */
    select?: DmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dms
     */
    omit?: DmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DmsInclude<ExtArgs> | null
    /**
     * Filter, which Dms to fetch.
     */
    where?: DmsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dms to fetch.
     */
    orderBy?: DmsOrderByWithRelationInput | DmsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dms.
     */
    cursor?: DmsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dms.
     */
    skip?: number
    distinct?: DmsScalarFieldEnum | DmsScalarFieldEnum[]
  }

  /**
   * Dms create
   */
  export type DmsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dms
     */
    select?: DmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dms
     */
    omit?: DmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DmsInclude<ExtArgs> | null
    /**
     * The data needed to create a Dms.
     */
    data?: XOR<DmsCreateInput, DmsUncheckedCreateInput>
  }

  /**
   * Dms createMany
   */
  export type DmsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dms.
     */
    data: DmsCreateManyInput | DmsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dms update
   */
  export type DmsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dms
     */
    select?: DmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dms
     */
    omit?: DmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DmsInclude<ExtArgs> | null
    /**
     * The data needed to update a Dms.
     */
    data: XOR<DmsUpdateInput, DmsUncheckedUpdateInput>
    /**
     * Choose, which Dms to update.
     */
    where: DmsWhereUniqueInput
  }

  /**
   * Dms updateMany
   */
  export type DmsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dms.
     */
    data: XOR<DmsUpdateManyMutationInput, DmsUncheckedUpdateManyInput>
    /**
     * Filter which Dms to update
     */
    where?: DmsWhereInput
    /**
     * Limit how many Dms to update.
     */
    limit?: number
  }

  /**
   * Dms upsert
   */
  export type DmsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dms
     */
    select?: DmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dms
     */
    omit?: DmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DmsInclude<ExtArgs> | null
    /**
     * The filter to search for the Dms to update in case it exists.
     */
    where: DmsWhereUniqueInput
    /**
     * In case the Dms found by the `where` argument doesn't exist, create a new Dms with this data.
     */
    create: XOR<DmsCreateInput, DmsUncheckedCreateInput>
    /**
     * In case the Dms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DmsUpdateInput, DmsUncheckedUpdateInput>
  }

  /**
   * Dms delete
   */
  export type DmsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dms
     */
    select?: DmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dms
     */
    omit?: DmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DmsInclude<ExtArgs> | null
    /**
     * Filter which Dms to delete.
     */
    where: DmsWhereUniqueInput
  }

  /**
   * Dms deleteMany
   */
  export type DmsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dms to delete
     */
    where?: DmsWhereInput
    /**
     * Limit how many Dms to delete.
     */
    limit?: number
  }

  /**
   * Dms.Automation
   */
  export type Dms$AutomationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    where?: AutomationWhereInput
  }

  /**
   * Dms without action
   */
  export type DmsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dms
     */
    select?: DmsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dms
     */
    omit?: DmsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DmsInclude<ExtArgs> | null
  }


  /**
   * Model Keyword
   */

  export type AggregateKeyword = {
    _count: KeywordCountAggregateOutputType | null
    _min: KeywordMinAggregateOutputType | null
    _max: KeywordMaxAggregateOutputType | null
  }

  export type KeywordMinAggregateOutputType = {
    id: string | null
    word: string | null
    automateId: string | null
  }

  export type KeywordMaxAggregateOutputType = {
    id: string | null
    word: string | null
    automateId: string | null
  }

  export type KeywordCountAggregateOutputType = {
    id: number
    word: number
    automateId: number
    _all: number
  }


  export type KeywordMinAggregateInputType = {
    id?: true
    word?: true
    automateId?: true
  }

  export type KeywordMaxAggregateInputType = {
    id?: true
    word?: true
    automateId?: true
  }

  export type KeywordCountAggregateInputType = {
    id?: true
    word?: true
    automateId?: true
    _all?: true
  }

  export type KeywordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keyword to aggregate.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Keywords
    **/
    _count?: true | KeywordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeywordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeywordMaxAggregateInputType
  }

  export type GetKeywordAggregateType<T extends KeywordAggregateArgs> = {
        [P in keyof T & keyof AggregateKeyword]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeyword[P]>
      : GetScalarType<T[P], AggregateKeyword[P]>
  }




  export type KeywordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeywordWhereInput
    orderBy?: KeywordOrderByWithAggregationInput | KeywordOrderByWithAggregationInput[]
    by: KeywordScalarFieldEnum[] | KeywordScalarFieldEnum
    having?: KeywordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeywordCountAggregateInputType | true
    _min?: KeywordMinAggregateInputType
    _max?: KeywordMaxAggregateInputType
  }

  export type KeywordGroupByOutputType = {
    id: string
    word: string
    automateId: string | null
    _count: KeywordCountAggregateOutputType | null
    _min: KeywordMinAggregateOutputType | null
    _max: KeywordMaxAggregateOutputType | null
  }

  type GetKeywordGroupByPayload<T extends KeywordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeywordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeywordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeywordGroupByOutputType[P]>
            : GetScalarType<T[P], KeywordGroupByOutputType[P]>
        }
      >
    >


  export type KeywordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    word?: boolean
    automateId?: boolean
    Automation?: boolean | Keyword$AutomationArgs<ExtArgs>
  }, ExtArgs["result"]["keyword"]>



  export type KeywordSelectScalar = {
    id?: boolean
    word?: boolean
    automateId?: boolean
  }

  export type KeywordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "word" | "automateId", ExtArgs["result"]["keyword"]>
  export type KeywordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Automation?: boolean | Keyword$AutomationArgs<ExtArgs>
  }

  export type $KeywordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Keyword"
    objects: {
      Automation: Prisma.$AutomationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      word: string
      automateId: string | null
    }, ExtArgs["result"]["keyword"]>
    composites: {}
  }

  type KeywordGetPayload<S extends boolean | null | undefined | KeywordDefaultArgs> = $Result.GetResult<Prisma.$KeywordPayload, S>

  type KeywordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KeywordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeywordCountAggregateInputType | true
    }

  export interface KeywordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Keyword'], meta: { name: 'Keyword' } }
    /**
     * Find zero or one Keyword that matches the filter.
     * @param {KeywordFindUniqueArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeywordFindUniqueArgs>(args: SelectSubset<T, KeywordFindUniqueArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Keyword that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KeywordFindUniqueOrThrowArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeywordFindUniqueOrThrowArgs>(args: SelectSubset<T, KeywordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keyword that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordFindFirstArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeywordFindFirstArgs>(args?: SelectSubset<T, KeywordFindFirstArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keyword that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordFindFirstOrThrowArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeywordFindFirstOrThrowArgs>(args?: SelectSubset<T, KeywordFindFirstOrThrowArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Keywords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Keywords
     * const keywords = await prisma.keyword.findMany()
     * 
     * // Get first 10 Keywords
     * const keywords = await prisma.keyword.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keywordWithIdOnly = await prisma.keyword.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KeywordFindManyArgs>(args?: SelectSubset<T, KeywordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Keyword.
     * @param {KeywordCreateArgs} args - Arguments to create a Keyword.
     * @example
     * // Create one Keyword
     * const Keyword = await prisma.keyword.create({
     *   data: {
     *     // ... data to create a Keyword
     *   }
     * })
     * 
     */
    create<T extends KeywordCreateArgs>(args: SelectSubset<T, KeywordCreateArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Keywords.
     * @param {KeywordCreateManyArgs} args - Arguments to create many Keywords.
     * @example
     * // Create many Keywords
     * const keyword = await prisma.keyword.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KeywordCreateManyArgs>(args?: SelectSubset<T, KeywordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Keyword.
     * @param {KeywordDeleteArgs} args - Arguments to delete one Keyword.
     * @example
     * // Delete one Keyword
     * const Keyword = await prisma.keyword.delete({
     *   where: {
     *     // ... filter to delete one Keyword
     *   }
     * })
     * 
     */
    delete<T extends KeywordDeleteArgs>(args: SelectSubset<T, KeywordDeleteArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Keyword.
     * @param {KeywordUpdateArgs} args - Arguments to update one Keyword.
     * @example
     * // Update one Keyword
     * const keyword = await prisma.keyword.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KeywordUpdateArgs>(args: SelectSubset<T, KeywordUpdateArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Keywords.
     * @param {KeywordDeleteManyArgs} args - Arguments to filter Keywords to delete.
     * @example
     * // Delete a few Keywords
     * const { count } = await prisma.keyword.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KeywordDeleteManyArgs>(args?: SelectSubset<T, KeywordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Keywords
     * const keyword = await prisma.keyword.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KeywordUpdateManyArgs>(args: SelectSubset<T, KeywordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Keyword.
     * @param {KeywordUpsertArgs} args - Arguments to update or create a Keyword.
     * @example
     * // Update or create a Keyword
     * const keyword = await prisma.keyword.upsert({
     *   create: {
     *     // ... data to create a Keyword
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Keyword we want to update
     *   }
     * })
     */
    upsert<T extends KeywordUpsertArgs>(args: SelectSubset<T, KeywordUpsertArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Keywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordCountArgs} args - Arguments to filter Keywords to count.
     * @example
     * // Count the number of Keywords
     * const count = await prisma.keyword.count({
     *   where: {
     *     // ... the filter for the Keywords we want to count
     *   }
     * })
    **/
    count<T extends KeywordCountArgs>(
      args?: Subset<T, KeywordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeywordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Keyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KeywordAggregateArgs>(args: Subset<T, KeywordAggregateArgs>): Prisma.PrismaPromise<GetKeywordAggregateType<T>>

    /**
     * Group by Keyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordGroupByArgs} args - Group by arguments.
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
      T extends KeywordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeywordGroupByArgs['orderBy'] }
        : { orderBy?: KeywordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KeywordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeywordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Keyword model
   */
  readonly fields: KeywordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Keyword.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeywordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Automation<T extends Keyword$AutomationArgs<ExtArgs> = {}>(args?: Subset<T, Keyword$AutomationArgs<ExtArgs>>): Prisma__AutomationClient<$Result.GetResult<Prisma.$AutomationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Keyword model
   */
  interface KeywordFieldRefs {
    readonly id: FieldRef<"Keyword", 'String'>
    readonly word: FieldRef<"Keyword", 'String'>
    readonly automateId: FieldRef<"Keyword", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Keyword findUnique
   */
  export type KeywordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword findUniqueOrThrow
   */
  export type KeywordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword findFirst
   */
  export type KeywordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keywords.
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keywords.
     */
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Keyword findFirstOrThrow
   */
  export type KeywordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keywords.
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keywords.
     */
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Keyword findMany
   */
  export type KeywordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keywords to fetch.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Keywords.
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Keyword create
   */
  export type KeywordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * The data needed to create a Keyword.
     */
    data: XOR<KeywordCreateInput, KeywordUncheckedCreateInput>
  }

  /**
   * Keyword createMany
   */
  export type KeywordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Keywords.
     */
    data: KeywordCreateManyInput | KeywordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Keyword update
   */
  export type KeywordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * The data needed to update a Keyword.
     */
    data: XOR<KeywordUpdateInput, KeywordUncheckedUpdateInput>
    /**
     * Choose, which Keyword to update.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword updateMany
   */
  export type KeywordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Keywords.
     */
    data: XOR<KeywordUpdateManyMutationInput, KeywordUncheckedUpdateManyInput>
    /**
     * Filter which Keywords to update
     */
    where?: KeywordWhereInput
    /**
     * Limit how many Keywords to update.
     */
    limit?: number
  }

  /**
   * Keyword upsert
   */
  export type KeywordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * The filter to search for the Keyword to update in case it exists.
     */
    where: KeywordWhereUniqueInput
    /**
     * In case the Keyword found by the `where` argument doesn't exist, create a new Keyword with this data.
     */
    create: XOR<KeywordCreateInput, KeywordUncheckedCreateInput>
    /**
     * In case the Keyword was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeywordUpdateInput, KeywordUncheckedUpdateInput>
  }

  /**
   * Keyword delete
   */
  export type KeywordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter which Keyword to delete.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword deleteMany
   */
  export type KeywordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keywords to delete
     */
    where?: KeywordWhereInput
    /**
     * Limit how many Keywords to delete.
     */
    limit?: number
  }

  /**
   * Keyword.Automation
   */
  export type Keyword$AutomationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Automation
     */
    select?: AutomationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Automation
     */
    omit?: AutomationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AutomationInclude<ExtArgs> | null
    where?: AutomationWhereInput
  }

  /**
   * Keyword without action
   */
  export type KeywordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
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
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    createdAt: 'createdAt',
    clerkId: 'clerkId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SubcriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    plan: 'plan',
    customerId: 'customerId'
  };

  export type SubcriptionScalarFieldEnum = (typeof SubcriptionScalarFieldEnum)[keyof typeof SubcriptionScalarFieldEnum]


  export const AutomationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    active: 'active',
    userId: 'userId'
  };

  export type AutomationScalarFieldEnum = (typeof AutomationScalarFieldEnum)[keyof typeof AutomationScalarFieldEnum]


  export const IntegrationsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    userId: 'userId',
    token: 'token',
    expireAt: 'expireAt',
    instagramId: 'instagramId'
  };

  export type IntegrationsScalarFieldEnum = (typeof IntegrationsScalarFieldEnum)[keyof typeof IntegrationsScalarFieldEnum]


  export const TriggerScalarFieldEnum: {
    id: 'id',
    type: 'type',
    automateId: 'automateId'
  };

  export type TriggerScalarFieldEnum = (typeof TriggerScalarFieldEnum)[keyof typeof TriggerScalarFieldEnum]


  export const ListenerScalarFieldEnum: {
    id: 'id',
    automateId: 'automateId',
    listener: 'listener',
    prompt: 'prompt',
    commentReply: 'commentReply',
    dmCount: 'dmCount',
    commentCount: 'commentCount'
  };

  export type ListenerScalarFieldEnum = (typeof ListenerScalarFieldEnum)[keyof typeof ListenerScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    postid: 'postid',
    caption: 'caption',
    media: 'media',
    mediaType: 'mediaType',
    automateId: 'automateId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const DmsScalarFieldEnum: {
    id: 'id',
    automateId: 'automateId',
    createdAt: 'createdAt',
    senderId: 'senderId',
    receiverId: 'receiverId',
    message: 'message'
  };

  export type DmsScalarFieldEnum = (typeof DmsScalarFieldEnum)[keyof typeof DmsScalarFieldEnum]


  export const KeywordScalarFieldEnum: {
    id: 'id',
    word: 'word',
    automateId: 'automateId'
  };

  export type KeywordScalarFieldEnum = (typeof KeywordScalarFieldEnum)[keyof typeof KeywordScalarFieldEnum]


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
    id: 'id',
    firstname: 'firstname',
    lastname: 'lastname',
    email: 'email',
    clerkId: 'clerkId'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const SubcriptionOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    customerId: 'customerId'
  };

  export type SubcriptionOrderByRelevanceFieldEnum = (typeof SubcriptionOrderByRelevanceFieldEnum)[keyof typeof SubcriptionOrderByRelevanceFieldEnum]


  export const AutomationOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId'
  };

  export type AutomationOrderByRelevanceFieldEnum = (typeof AutomationOrderByRelevanceFieldEnum)[keyof typeof AutomationOrderByRelevanceFieldEnum]


  export const IntegrationsOrderByRelevanceFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    instagramId: 'instagramId'
  };

  export type IntegrationsOrderByRelevanceFieldEnum = (typeof IntegrationsOrderByRelevanceFieldEnum)[keyof typeof IntegrationsOrderByRelevanceFieldEnum]


  export const TriggerOrderByRelevanceFieldEnum: {
    id: 'id',
    type: 'type',
    automateId: 'automateId'
  };

  export type TriggerOrderByRelevanceFieldEnum = (typeof TriggerOrderByRelevanceFieldEnum)[keyof typeof TriggerOrderByRelevanceFieldEnum]


  export const ListenerOrderByRelevanceFieldEnum: {
    id: 'id',
    automateId: 'automateId',
    prompt: 'prompt',
    commentReply: 'commentReply'
  };

  export type ListenerOrderByRelevanceFieldEnum = (typeof ListenerOrderByRelevanceFieldEnum)[keyof typeof ListenerOrderByRelevanceFieldEnum]


  export const PostOrderByRelevanceFieldEnum: {
    id: 'id',
    postid: 'postid',
    caption: 'caption',
    media: 'media',
    automateId: 'automateId'
  };

  export type PostOrderByRelevanceFieldEnum = (typeof PostOrderByRelevanceFieldEnum)[keyof typeof PostOrderByRelevanceFieldEnum]


  export const DmsOrderByRelevanceFieldEnum: {
    id: 'id',
    automateId: 'automateId',
    senderId: 'senderId',
    receiverId: 'receiverId',
    message: 'message'
  };

  export type DmsOrderByRelevanceFieldEnum = (typeof DmsOrderByRelevanceFieldEnum)[keyof typeof DmsOrderByRelevanceFieldEnum]


  export const KeywordOrderByRelevanceFieldEnum: {
    id: 'id',
    word: 'word',
    automateId: 'automateId'
  };

  export type KeywordOrderByRelevanceFieldEnum = (typeof KeywordOrderByRelevanceFieldEnum)[keyof typeof KeywordOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'PLAN'
   */
  export type EnumPLANFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PLAN'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'INTERGRATION'
   */
  export type EnumINTERGRATIONFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'INTERGRATION'>
    


  /**
   * Reference to a field of type 'LISTENER'
   */
  export type EnumLISTENERFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LISTENER'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'MEDIA_TYPE'
   */
  export type EnumMEDIA_TYPEFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MEDIA_TYPE'>
    


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
    id?: StringFilter<"User"> | string
    firstname?: StringNullableFilter<"User"> | string | null
    lastname?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    clerkId?: StringFilter<"User"> | string
    subcription?: XOR<SubcriptionNullableScalarRelationFilter, SubcriptionWhereInput> | null
    automations?: AutomationListRelationFilter
    integrations?: IntegrationsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    clerkId?: SortOrder
    subcription?: SubcriptionOrderByWithRelationInput
    automations?: AutomationOrderByRelationAggregateInput
    integrations?: IntegrationsOrderByRelationAggregateInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    firstname?: string
    lastname?: string
    email?: string
    clerkId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    subcription?: XOR<SubcriptionNullableScalarRelationFilter, SubcriptionWhereInput> | null
    automations?: AutomationListRelationFilter
    integrations?: IntegrationsListRelationFilter
  }, "id" | "firstname" | "lastname" | "email" | "clerkId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstname?: SortOrderInput | SortOrder
    lastname?: SortOrderInput | SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    clerkId?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstname?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastname?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    clerkId?: StringWithAggregatesFilter<"User"> | string
  }

  export type SubcriptionWhereInput = {
    AND?: SubcriptionWhereInput | SubcriptionWhereInput[]
    OR?: SubcriptionWhereInput[]
    NOT?: SubcriptionWhereInput | SubcriptionWhereInput[]
    id?: StringFilter<"Subcription"> | string
    userId?: StringNullableFilter<"Subcription"> | string | null
    createdAt?: DateTimeFilter<"Subcription"> | Date | string
    updatedAt?: DateTimeFilter<"Subcription"> | Date | string
    plan?: EnumPLANFilter<"Subcription"> | $Enums.PLAN
    customerId?: StringNullableFilter<"Subcription"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type SubcriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SortOrder
    customerId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
    _relevance?: SubcriptionOrderByRelevanceInput
  }

  export type SubcriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    customerId?: string
    AND?: SubcriptionWhereInput | SubcriptionWhereInput[]
    OR?: SubcriptionWhereInput[]
    NOT?: SubcriptionWhereInput | SubcriptionWhereInput[]
    createdAt?: DateTimeFilter<"Subcription"> | Date | string
    updatedAt?: DateTimeFilter<"Subcription"> | Date | string
    plan?: EnumPLANFilter<"Subcription"> | $Enums.PLAN
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "userId" | "customerId">

  export type SubcriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SortOrder
    customerId?: SortOrderInput | SortOrder
    _count?: SubcriptionCountOrderByAggregateInput
    _max?: SubcriptionMaxOrderByAggregateInput
    _min?: SubcriptionMinOrderByAggregateInput
  }

  export type SubcriptionScalarWhereWithAggregatesInput = {
    AND?: SubcriptionScalarWhereWithAggregatesInput | SubcriptionScalarWhereWithAggregatesInput[]
    OR?: SubcriptionScalarWhereWithAggregatesInput[]
    NOT?: SubcriptionScalarWhereWithAggregatesInput | SubcriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subcription"> | string
    userId?: StringNullableWithAggregatesFilter<"Subcription"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Subcription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subcription"> | Date | string
    plan?: EnumPLANWithAggregatesFilter<"Subcription"> | $Enums.PLAN
    customerId?: StringNullableWithAggregatesFilter<"Subcription"> | string | null
  }

  export type AutomationWhereInput = {
    AND?: AutomationWhereInput | AutomationWhereInput[]
    OR?: AutomationWhereInput[]
    NOT?: AutomationWhereInput | AutomationWhereInput[]
    id?: StringFilter<"Automation"> | string
    name?: StringFilter<"Automation"> | string
    createdAt?: DateTimeFilter<"Automation"> | Date | string
    active?: BoolFilter<"Automation"> | boolean
    userId?: StringNullableFilter<"Automation"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    trigger?: TriggerListRelationFilter
    listener?: XOR<ListenerNullableScalarRelationFilter, ListenerWhereInput> | null
    posts?: PostListRelationFilter
    dms?: DmsListRelationFilter
    keywords?: KeywordListRelationFilter
  }

  export type AutomationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    userId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
    trigger?: TriggerOrderByRelationAggregateInput
    listener?: ListenerOrderByWithRelationInput
    posts?: PostOrderByRelationAggregateInput
    dms?: DmsOrderByRelationAggregateInput
    keywords?: KeywordOrderByRelationAggregateInput
    _relevance?: AutomationOrderByRelevanceInput
  }

  export type AutomationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: AutomationWhereInput | AutomationWhereInput[]
    OR?: AutomationWhereInput[]
    NOT?: AutomationWhereInput | AutomationWhereInput[]
    name?: StringFilter<"Automation"> | string
    createdAt?: DateTimeFilter<"Automation"> | Date | string
    active?: BoolFilter<"Automation"> | boolean
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    trigger?: TriggerListRelationFilter
    listener?: XOR<ListenerNullableScalarRelationFilter, ListenerWhereInput> | null
    posts?: PostListRelationFilter
    dms?: DmsListRelationFilter
    keywords?: KeywordListRelationFilter
  }, "id" | "userId">

  export type AutomationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: AutomationCountOrderByAggregateInput
    _max?: AutomationMaxOrderByAggregateInput
    _min?: AutomationMinOrderByAggregateInput
  }

  export type AutomationScalarWhereWithAggregatesInput = {
    AND?: AutomationScalarWhereWithAggregatesInput | AutomationScalarWhereWithAggregatesInput[]
    OR?: AutomationScalarWhereWithAggregatesInput[]
    NOT?: AutomationScalarWhereWithAggregatesInput | AutomationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Automation"> | string
    name?: StringWithAggregatesFilter<"Automation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Automation"> | Date | string
    active?: BoolWithAggregatesFilter<"Automation"> | boolean
    userId?: StringNullableWithAggregatesFilter<"Automation"> | string | null
  }

  export type IntegrationsWhereInput = {
    AND?: IntegrationsWhereInput | IntegrationsWhereInput[]
    OR?: IntegrationsWhereInput[]
    NOT?: IntegrationsWhereInput | IntegrationsWhereInput[]
    id?: StringFilter<"Integrations"> | string
    name?: EnumINTERGRATIONFilter<"Integrations"> | $Enums.INTERGRATION
    createdAt?: DateTimeFilter<"Integrations"> | Date | string
    userId?: StringNullableFilter<"Integrations"> | string | null
    token?: StringFilter<"Integrations"> | string
    expireAt?: DateTimeNullableFilter<"Integrations"> | Date | string | null
    instagramId?: StringNullableFilter<"Integrations"> | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type IntegrationsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    token?: SortOrder
    expireAt?: SortOrderInput | SortOrder
    instagramId?: SortOrderInput | SortOrder
    User?: UserOrderByWithRelationInput
    _relevance?: IntegrationsOrderByRelevanceInput
  }

  export type IntegrationsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    token?: string
    instagramId?: string
    AND?: IntegrationsWhereInput | IntegrationsWhereInput[]
    OR?: IntegrationsWhereInput[]
    NOT?: IntegrationsWhereInput | IntegrationsWhereInput[]
    name?: EnumINTERGRATIONFilter<"Integrations"> | $Enums.INTERGRATION
    createdAt?: DateTimeFilter<"Integrations"> | Date | string
    expireAt?: DateTimeNullableFilter<"Integrations"> | Date | string | null
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id" | "userId" | "token" | "instagramId">

  export type IntegrationsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    token?: SortOrder
    expireAt?: SortOrderInput | SortOrder
    instagramId?: SortOrderInput | SortOrder
    _count?: IntegrationsCountOrderByAggregateInput
    _max?: IntegrationsMaxOrderByAggregateInput
    _min?: IntegrationsMinOrderByAggregateInput
  }

  export type IntegrationsScalarWhereWithAggregatesInput = {
    AND?: IntegrationsScalarWhereWithAggregatesInput | IntegrationsScalarWhereWithAggregatesInput[]
    OR?: IntegrationsScalarWhereWithAggregatesInput[]
    NOT?: IntegrationsScalarWhereWithAggregatesInput | IntegrationsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Integrations"> | string
    name?: EnumINTERGRATIONWithAggregatesFilter<"Integrations"> | $Enums.INTERGRATION
    createdAt?: DateTimeWithAggregatesFilter<"Integrations"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Integrations"> | string | null
    token?: StringWithAggregatesFilter<"Integrations"> | string
    expireAt?: DateTimeNullableWithAggregatesFilter<"Integrations"> | Date | string | null
    instagramId?: StringNullableWithAggregatesFilter<"Integrations"> | string | null
  }

  export type TriggerWhereInput = {
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    id?: StringFilter<"Trigger"> | string
    type?: StringFilter<"Trigger"> | string
    automateId?: StringNullableFilter<"Trigger"> | string | null
    Automation?: XOR<AutomationNullableScalarRelationFilter, AutomationWhereInput> | null
  }

  export type TriggerOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    automateId?: SortOrderInput | SortOrder
    Automation?: AutomationOrderByWithRelationInput
    _relevance?: TriggerOrderByRelevanceInput
  }

  export type TriggerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TriggerWhereInput | TriggerWhereInput[]
    OR?: TriggerWhereInput[]
    NOT?: TriggerWhereInput | TriggerWhereInput[]
    type?: StringFilter<"Trigger"> | string
    automateId?: StringNullableFilter<"Trigger"> | string | null
    Automation?: XOR<AutomationNullableScalarRelationFilter, AutomationWhereInput> | null
  }, "id">

  export type TriggerOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    automateId?: SortOrderInput | SortOrder
    _count?: TriggerCountOrderByAggregateInput
    _max?: TriggerMaxOrderByAggregateInput
    _min?: TriggerMinOrderByAggregateInput
  }

  export type TriggerScalarWhereWithAggregatesInput = {
    AND?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    OR?: TriggerScalarWhereWithAggregatesInput[]
    NOT?: TriggerScalarWhereWithAggregatesInput | TriggerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Trigger"> | string
    type?: StringWithAggregatesFilter<"Trigger"> | string
    automateId?: StringNullableWithAggregatesFilter<"Trigger"> | string | null
  }

  export type ListenerWhereInput = {
    AND?: ListenerWhereInput | ListenerWhereInput[]
    OR?: ListenerWhereInput[]
    NOT?: ListenerWhereInput | ListenerWhereInput[]
    id?: StringFilter<"Listener"> | string
    automateId?: StringFilter<"Listener"> | string
    listener?: EnumLISTENERFilter<"Listener"> | $Enums.LISTENER
    prompt?: StringFilter<"Listener"> | string
    commentReply?: StringNullableFilter<"Listener"> | string | null
    dmCount?: IntFilter<"Listener"> | number
    commentCount?: IntFilter<"Listener"> | number
    Automation?: XOR<AutomationScalarRelationFilter, AutomationWhereInput>
  }

  export type ListenerOrderByWithRelationInput = {
    id?: SortOrder
    automateId?: SortOrder
    listener?: SortOrder
    prompt?: SortOrder
    commentReply?: SortOrderInput | SortOrder
    dmCount?: SortOrder
    commentCount?: SortOrder
    Automation?: AutomationOrderByWithRelationInput
    _relevance?: ListenerOrderByRelevanceInput
  }

  export type ListenerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    automateId?: string
    AND?: ListenerWhereInput | ListenerWhereInput[]
    OR?: ListenerWhereInput[]
    NOT?: ListenerWhereInput | ListenerWhereInput[]
    listener?: EnumLISTENERFilter<"Listener"> | $Enums.LISTENER
    prompt?: StringFilter<"Listener"> | string
    commentReply?: StringNullableFilter<"Listener"> | string | null
    dmCount?: IntFilter<"Listener"> | number
    commentCount?: IntFilter<"Listener"> | number
    Automation?: XOR<AutomationScalarRelationFilter, AutomationWhereInput>
  }, "id" | "automateId">

  export type ListenerOrderByWithAggregationInput = {
    id?: SortOrder
    automateId?: SortOrder
    listener?: SortOrder
    prompt?: SortOrder
    commentReply?: SortOrderInput | SortOrder
    dmCount?: SortOrder
    commentCount?: SortOrder
    _count?: ListenerCountOrderByAggregateInput
    _avg?: ListenerAvgOrderByAggregateInput
    _max?: ListenerMaxOrderByAggregateInput
    _min?: ListenerMinOrderByAggregateInput
    _sum?: ListenerSumOrderByAggregateInput
  }

  export type ListenerScalarWhereWithAggregatesInput = {
    AND?: ListenerScalarWhereWithAggregatesInput | ListenerScalarWhereWithAggregatesInput[]
    OR?: ListenerScalarWhereWithAggregatesInput[]
    NOT?: ListenerScalarWhereWithAggregatesInput | ListenerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Listener"> | string
    automateId?: StringWithAggregatesFilter<"Listener"> | string
    listener?: EnumLISTENERWithAggregatesFilter<"Listener"> | $Enums.LISTENER
    prompt?: StringWithAggregatesFilter<"Listener"> | string
    commentReply?: StringNullableWithAggregatesFilter<"Listener"> | string | null
    dmCount?: IntWithAggregatesFilter<"Listener"> | number
    commentCount?: IntWithAggregatesFilter<"Listener"> | number
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: StringFilter<"Post"> | string
    postid?: StringFilter<"Post"> | string
    caption?: StringNullableFilter<"Post"> | string | null
    media?: StringFilter<"Post"> | string
    mediaType?: EnumMEDIA_TYPEFilter<"Post"> | $Enums.MEDIA_TYPE
    automateId?: StringNullableFilter<"Post"> | string | null
    Automation?: XOR<AutomationNullableScalarRelationFilter, AutomationWhereInput> | null
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    postid?: SortOrder
    caption?: SortOrderInput | SortOrder
    media?: SortOrder
    mediaType?: SortOrder
    automateId?: SortOrderInput | SortOrder
    Automation?: AutomationOrderByWithRelationInput
    _relevance?: PostOrderByRelevanceInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    postid?: StringFilter<"Post"> | string
    caption?: StringNullableFilter<"Post"> | string | null
    media?: StringFilter<"Post"> | string
    mediaType?: EnumMEDIA_TYPEFilter<"Post"> | $Enums.MEDIA_TYPE
    automateId?: StringNullableFilter<"Post"> | string | null
    Automation?: XOR<AutomationNullableScalarRelationFilter, AutomationWhereInput> | null
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    postid?: SortOrder
    caption?: SortOrderInput | SortOrder
    media?: SortOrder
    mediaType?: SortOrder
    automateId?: SortOrderInput | SortOrder
    _count?: PostCountOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Post"> | string
    postid?: StringWithAggregatesFilter<"Post"> | string
    caption?: StringNullableWithAggregatesFilter<"Post"> | string | null
    media?: StringWithAggregatesFilter<"Post"> | string
    mediaType?: EnumMEDIA_TYPEWithAggregatesFilter<"Post"> | $Enums.MEDIA_TYPE
    automateId?: StringNullableWithAggregatesFilter<"Post"> | string | null
  }

  export type DmsWhereInput = {
    AND?: DmsWhereInput | DmsWhereInput[]
    OR?: DmsWhereInput[]
    NOT?: DmsWhereInput | DmsWhereInput[]
    id?: StringFilter<"Dms"> | string
    automateId?: StringNullableFilter<"Dms"> | string | null
    createdAt?: DateTimeFilter<"Dms"> | Date | string
    senderId?: StringNullableFilter<"Dms"> | string | null
    receiverId?: StringNullableFilter<"Dms"> | string | null
    message?: StringNullableFilter<"Dms"> | string | null
    Automation?: XOR<AutomationNullableScalarRelationFilter, AutomationWhereInput> | null
  }

  export type DmsOrderByWithRelationInput = {
    id?: SortOrder
    automateId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    senderId?: SortOrderInput | SortOrder
    receiverId?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    Automation?: AutomationOrderByWithRelationInput
    _relevance?: DmsOrderByRelevanceInput
  }

  export type DmsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DmsWhereInput | DmsWhereInput[]
    OR?: DmsWhereInput[]
    NOT?: DmsWhereInput | DmsWhereInput[]
    automateId?: StringNullableFilter<"Dms"> | string | null
    createdAt?: DateTimeFilter<"Dms"> | Date | string
    senderId?: StringNullableFilter<"Dms"> | string | null
    receiverId?: StringNullableFilter<"Dms"> | string | null
    message?: StringNullableFilter<"Dms"> | string | null
    Automation?: XOR<AutomationNullableScalarRelationFilter, AutomationWhereInput> | null
  }, "id">

  export type DmsOrderByWithAggregationInput = {
    id?: SortOrder
    automateId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    senderId?: SortOrderInput | SortOrder
    receiverId?: SortOrderInput | SortOrder
    message?: SortOrderInput | SortOrder
    _count?: DmsCountOrderByAggregateInput
    _max?: DmsMaxOrderByAggregateInput
    _min?: DmsMinOrderByAggregateInput
  }

  export type DmsScalarWhereWithAggregatesInput = {
    AND?: DmsScalarWhereWithAggregatesInput | DmsScalarWhereWithAggregatesInput[]
    OR?: DmsScalarWhereWithAggregatesInput[]
    NOT?: DmsScalarWhereWithAggregatesInput | DmsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dms"> | string
    automateId?: StringNullableWithAggregatesFilter<"Dms"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Dms"> | Date | string
    senderId?: StringNullableWithAggregatesFilter<"Dms"> | string | null
    receiverId?: StringNullableWithAggregatesFilter<"Dms"> | string | null
    message?: StringNullableWithAggregatesFilter<"Dms"> | string | null
  }

  export type KeywordWhereInput = {
    AND?: KeywordWhereInput | KeywordWhereInput[]
    OR?: KeywordWhereInput[]
    NOT?: KeywordWhereInput | KeywordWhereInput[]
    id?: StringFilter<"Keyword"> | string
    word?: StringFilter<"Keyword"> | string
    automateId?: StringNullableFilter<"Keyword"> | string | null
    Automation?: XOR<AutomationNullableScalarRelationFilter, AutomationWhereInput> | null
  }

  export type KeywordOrderByWithRelationInput = {
    id?: SortOrder
    word?: SortOrder
    automateId?: SortOrderInput | SortOrder
    Automation?: AutomationOrderByWithRelationInput
    _relevance?: KeywordOrderByRelevanceInput
  }

  export type KeywordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    automateId?: string
    automateId_word?: KeywordAutomateIdWordCompoundUniqueInput
    AND?: KeywordWhereInput | KeywordWhereInput[]
    OR?: KeywordWhereInput[]
    NOT?: KeywordWhereInput | KeywordWhereInput[]
    word?: StringFilter<"Keyword"> | string
    Automation?: XOR<AutomationNullableScalarRelationFilter, AutomationWhereInput> | null
  }, "id" | "automateId" | "automateId_word">

  export type KeywordOrderByWithAggregationInput = {
    id?: SortOrder
    word?: SortOrder
    automateId?: SortOrderInput | SortOrder
    _count?: KeywordCountOrderByAggregateInput
    _max?: KeywordMaxOrderByAggregateInput
    _min?: KeywordMinOrderByAggregateInput
  }

  export type KeywordScalarWhereWithAggregatesInput = {
    AND?: KeywordScalarWhereWithAggregatesInput | KeywordScalarWhereWithAggregatesInput[]
    OR?: KeywordScalarWhereWithAggregatesInput[]
    NOT?: KeywordScalarWhereWithAggregatesInput | KeywordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Keyword"> | string
    word?: StringWithAggregatesFilter<"Keyword"> | string
    automateId?: StringNullableWithAggregatesFilter<"Keyword"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    email: string
    createdAt?: Date | string
    clerkId: string
    subcription?: SubcriptionCreateNestedOneWithoutUserInput
    automations?: AutomationCreateNestedManyWithoutUserInput
    integrations?: IntegrationsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    email: string
    createdAt?: Date | string
    clerkId: string
    subcription?: SubcriptionUncheckedCreateNestedOneWithoutUserInput
    automations?: AutomationUncheckedCreateNestedManyWithoutUserInput
    integrations?: IntegrationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
    subcription?: SubcriptionUpdateOneWithoutUserNestedInput
    automations?: AutomationUpdateManyWithoutUserNestedInput
    integrations?: IntegrationsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
    subcription?: SubcriptionUncheckedUpdateOneWithoutUserNestedInput
    automations?: AutomationUncheckedUpdateManyWithoutUserNestedInput
    integrations?: IntegrationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    email: string
    createdAt?: Date | string
    clerkId: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
  }

  export type SubcriptionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: $Enums.PLAN
    customerId?: string | null
    User?: UserCreateNestedOneWithoutSubcriptionInput
  }

  export type SubcriptionUncheckedCreateInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: $Enums.PLAN
    customerId?: string | null
  }

  export type SubcriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumPLANFieldUpdateOperationsInput | $Enums.PLAN
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutSubcriptionNestedInput
  }

  export type SubcriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumPLANFieldUpdateOperationsInput | $Enums.PLAN
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubcriptionCreateManyInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: $Enums.PLAN
    customerId?: string | null
  }

  export type SubcriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumPLANFieldUpdateOperationsInput | $Enums.PLAN
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubcriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumPLANFieldUpdateOperationsInput | $Enums.PLAN
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AutomationCreateInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    User?: UserCreateNestedOneWithoutAutomationsInput
    trigger?: TriggerCreateNestedManyWithoutAutomationInput
    listener?: ListenerCreateNestedOneWithoutAutomationInput
    posts?: PostCreateNestedManyWithoutAutomationInput
    dms?: DmsCreateNestedManyWithoutAutomationInput
    keywords?: KeywordCreateNestedManyWithoutAutomationInput
  }

  export type AutomationUncheckedCreateInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    userId?: string | null
    trigger?: TriggerUncheckedCreateNestedManyWithoutAutomationInput
    listener?: ListenerUncheckedCreateNestedOneWithoutAutomationInput
    posts?: PostUncheckedCreateNestedManyWithoutAutomationInput
    dms?: DmsUncheckedCreateNestedManyWithoutAutomationInput
    keywords?: KeywordUncheckedCreateNestedManyWithoutAutomationInput
  }

  export type AutomationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneWithoutAutomationsNestedInput
    trigger?: TriggerUpdateManyWithoutAutomationNestedInput
    listener?: ListenerUpdateOneWithoutAutomationNestedInput
    posts?: PostUpdateManyWithoutAutomationNestedInput
    dms?: DmsUpdateManyWithoutAutomationNestedInput
    keywords?: KeywordUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: TriggerUncheckedUpdateManyWithoutAutomationNestedInput
    listener?: ListenerUncheckedUpdateOneWithoutAutomationNestedInput
    posts?: PostUncheckedUpdateManyWithoutAutomationNestedInput
    dms?: DmsUncheckedUpdateManyWithoutAutomationNestedInput
    keywords?: KeywordUncheckedUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationCreateManyInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    userId?: string | null
  }

  export type AutomationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AutomationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntegrationsCreateInput = {
    id?: string
    name?: $Enums.INTERGRATION
    createdAt?: Date | string
    token: string
    expireAt?: Date | string | null
    instagramId?: string | null
    User?: UserCreateNestedOneWithoutIntegrationsInput
  }

  export type IntegrationsUncheckedCreateInput = {
    id?: string
    name?: $Enums.INTERGRATION
    createdAt?: Date | string
    userId?: string | null
    token: string
    expireAt?: Date | string | null
    instagramId?: string | null
  }

  export type IntegrationsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumINTERGRATIONFieldUpdateOperationsInput | $Enums.INTERGRATION
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instagramId?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneWithoutIntegrationsNestedInput
  }

  export type IntegrationsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumINTERGRATIONFieldUpdateOperationsInput | $Enums.INTERGRATION
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instagramId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntegrationsCreateManyInput = {
    id?: string
    name?: $Enums.INTERGRATION
    createdAt?: Date | string
    userId?: string | null
    token: string
    expireAt?: Date | string | null
    instagramId?: string | null
  }

  export type IntegrationsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumINTERGRATIONFieldUpdateOperationsInput | $Enums.INTERGRATION
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instagramId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntegrationsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumINTERGRATIONFieldUpdateOperationsInput | $Enums.INTERGRATION
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    token?: StringFieldUpdateOperationsInput | string
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instagramId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TriggerCreateInput = {
    id?: string
    type: string
    Automation?: AutomationCreateNestedOneWithoutTriggerInput
  }

  export type TriggerUncheckedCreateInput = {
    id?: string
    type: string
    automateId?: string | null
  }

  export type TriggerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    Automation?: AutomationUpdateOneWithoutTriggerNestedInput
  }

  export type TriggerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    automateId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TriggerCreateManyInput = {
    id?: string
    type: string
    automateId?: string | null
  }

  export type TriggerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    automateId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ListenerCreateInput = {
    id?: string
    listener?: $Enums.LISTENER
    prompt: string
    commentReply?: string | null
    dmCount?: number
    commentCount?: number
    Automation: AutomationCreateNestedOneWithoutListenerInput
  }

  export type ListenerUncheckedCreateInput = {
    id?: string
    automateId: string
    listener?: $Enums.LISTENER
    prompt: string
    commentReply?: string | null
    dmCount?: number
    commentCount?: number
  }

  export type ListenerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    listener?: EnumLISTENERFieldUpdateOperationsInput | $Enums.LISTENER
    prompt?: StringFieldUpdateOperationsInput | string
    commentReply?: NullableStringFieldUpdateOperationsInput | string | null
    dmCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
    Automation?: AutomationUpdateOneRequiredWithoutListenerNestedInput
  }

  export type ListenerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    automateId?: StringFieldUpdateOperationsInput | string
    listener?: EnumLISTENERFieldUpdateOperationsInput | $Enums.LISTENER
    prompt?: StringFieldUpdateOperationsInput | string
    commentReply?: NullableStringFieldUpdateOperationsInput | string | null
    dmCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
  }

  export type ListenerCreateManyInput = {
    id?: string
    automateId: string
    listener?: $Enums.LISTENER
    prompt: string
    commentReply?: string | null
    dmCount?: number
    commentCount?: number
  }

  export type ListenerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    listener?: EnumLISTENERFieldUpdateOperationsInput | $Enums.LISTENER
    prompt?: StringFieldUpdateOperationsInput | string
    commentReply?: NullableStringFieldUpdateOperationsInput | string | null
    dmCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
  }

  export type ListenerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    automateId?: StringFieldUpdateOperationsInput | string
    listener?: EnumLISTENERFieldUpdateOperationsInput | $Enums.LISTENER
    prompt?: StringFieldUpdateOperationsInput | string
    commentReply?: NullableStringFieldUpdateOperationsInput | string | null
    dmCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
  }

  export type PostCreateInput = {
    id?: string
    postid: string
    caption?: string | null
    media: string
    mediaType?: $Enums.MEDIA_TYPE
    Automation?: AutomationCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: string
    postid: string
    caption?: string | null
    media: string
    mediaType?: $Enums.MEDIA_TYPE
    automateId?: string | null
  }

  export type PostUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postid?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    media?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMEDIA_TYPEFieldUpdateOperationsInput | $Enums.MEDIA_TYPE
    Automation?: AutomationUpdateOneWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    postid?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    media?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMEDIA_TYPEFieldUpdateOperationsInput | $Enums.MEDIA_TYPE
    automateId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateManyInput = {
    id?: string
    postid: string
    caption?: string | null
    media: string
    mediaType?: $Enums.MEDIA_TYPE
    automateId?: string | null
  }

  export type PostUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    postid?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    media?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMEDIA_TYPEFieldUpdateOperationsInput | $Enums.MEDIA_TYPE
  }

  export type PostUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    postid?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    media?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMEDIA_TYPEFieldUpdateOperationsInput | $Enums.MEDIA_TYPE
    automateId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DmsCreateInput = {
    id?: string
    createdAt?: Date | string
    senderId?: string | null
    receiverId?: string | null
    message?: string | null
    Automation?: AutomationCreateNestedOneWithoutDmsInput
  }

  export type DmsUncheckedCreateInput = {
    id?: string
    automateId?: string | null
    createdAt?: Date | string
    senderId?: string | null
    receiverId?: string | null
    message?: string | null
  }

  export type DmsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
    Automation?: AutomationUpdateOneWithoutDmsNestedInput
  }

  export type DmsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    automateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DmsCreateManyInput = {
    id?: string
    automateId?: string | null
    createdAt?: Date | string
    senderId?: string | null
    receiverId?: string | null
    message?: string | null
  }

  export type DmsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DmsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    automateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KeywordCreateInput = {
    id?: string
    word: string
    Automation?: AutomationCreateNestedOneWithoutKeywordsInput
  }

  export type KeywordUncheckedCreateInput = {
    id?: string
    word: string
    automateId?: string | null
  }

  export type KeywordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    Automation?: AutomationUpdateOneWithoutKeywordsNestedInput
  }

  export type KeywordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    automateId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KeywordCreateManyInput = {
    id?: string
    word: string
    automateId?: string | null
  }

  export type KeywordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
  }

  export type KeywordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
    automateId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type SubcriptionNullableScalarRelationFilter = {
    is?: SubcriptionWhereInput | null
    isNot?: SubcriptionWhereInput | null
  }

  export type AutomationListRelationFilter = {
    every?: AutomationWhereInput
    some?: AutomationWhereInput
    none?: AutomationWhereInput
  }

  export type IntegrationsListRelationFilter = {
    every?: IntegrationsWhereInput
    some?: IntegrationsWhereInput
    none?: IntegrationsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AutomationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IntegrationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    clerkId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    clerkId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    email?: SortOrder
    createdAt?: SortOrder
    clerkId?: SortOrder
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

  export type EnumPLANFilter<$PrismaModel = never> = {
    equals?: $Enums.PLAN | EnumPLANFieldRefInput<$PrismaModel>
    in?: $Enums.PLAN[]
    notIn?: $Enums.PLAN[]
    not?: NestedEnumPLANFilter<$PrismaModel> | $Enums.PLAN
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SubcriptionOrderByRelevanceInput = {
    fields: SubcriptionOrderByRelevanceFieldEnum | SubcriptionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SubcriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SortOrder
    customerId?: SortOrder
  }

  export type SubcriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SortOrder
    customerId?: SortOrder
  }

  export type SubcriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    plan?: SortOrder
    customerId?: SortOrder
  }

  export type EnumPLANWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PLAN | EnumPLANFieldRefInput<$PrismaModel>
    in?: $Enums.PLAN[]
    notIn?: $Enums.PLAN[]
    not?: NestedEnumPLANWithAggregatesFilter<$PrismaModel> | $Enums.PLAN
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPLANFilter<$PrismaModel>
    _max?: NestedEnumPLANFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TriggerListRelationFilter = {
    every?: TriggerWhereInput
    some?: TriggerWhereInput
    none?: TriggerWhereInput
  }

  export type ListenerNullableScalarRelationFilter = {
    is?: ListenerWhereInput | null
    isNot?: ListenerWhereInput | null
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type DmsListRelationFilter = {
    every?: DmsWhereInput
    some?: DmsWhereInput
    none?: DmsWhereInput
  }

  export type KeywordListRelationFilter = {
    every?: KeywordWhereInput
    some?: KeywordWhereInput
    none?: KeywordWhereInput
  }

  export type TriggerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DmsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KeywordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AutomationOrderByRelevanceInput = {
    fields: AutomationOrderByRelevanceFieldEnum | AutomationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AutomationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    userId?: SortOrder
  }

  export type AutomationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    userId?: SortOrder
  }

  export type AutomationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumINTERGRATIONFilter<$PrismaModel = never> = {
    equals?: $Enums.INTERGRATION | EnumINTERGRATIONFieldRefInput<$PrismaModel>
    in?: $Enums.INTERGRATION[]
    notIn?: $Enums.INTERGRATION[]
    not?: NestedEnumINTERGRATIONFilter<$PrismaModel> | $Enums.INTERGRATION
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

  export type IntegrationsOrderByRelevanceInput = {
    fields: IntegrationsOrderByRelevanceFieldEnum | IntegrationsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type IntegrationsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expireAt?: SortOrder
    instagramId?: SortOrder
  }

  export type IntegrationsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expireAt?: SortOrder
    instagramId?: SortOrder
  }

  export type IntegrationsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expireAt?: SortOrder
    instagramId?: SortOrder
  }

  export type EnumINTERGRATIONWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.INTERGRATION | EnumINTERGRATIONFieldRefInput<$PrismaModel>
    in?: $Enums.INTERGRATION[]
    notIn?: $Enums.INTERGRATION[]
    not?: NestedEnumINTERGRATIONWithAggregatesFilter<$PrismaModel> | $Enums.INTERGRATION
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumINTERGRATIONFilter<$PrismaModel>
    _max?: NestedEnumINTERGRATIONFilter<$PrismaModel>
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

  export type AutomationNullableScalarRelationFilter = {
    is?: AutomationWhereInput | null
    isNot?: AutomationWhereInput | null
  }

  export type TriggerOrderByRelevanceInput = {
    fields: TriggerOrderByRelevanceFieldEnum | TriggerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TriggerCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    automateId?: SortOrder
  }

  export type TriggerMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    automateId?: SortOrder
  }

  export type TriggerMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    automateId?: SortOrder
  }

  export type EnumLISTENERFilter<$PrismaModel = never> = {
    equals?: $Enums.LISTENER | EnumLISTENERFieldRefInput<$PrismaModel>
    in?: $Enums.LISTENER[]
    notIn?: $Enums.LISTENER[]
    not?: NestedEnumLISTENERFilter<$PrismaModel> | $Enums.LISTENER
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

  export type AutomationScalarRelationFilter = {
    is?: AutomationWhereInput
    isNot?: AutomationWhereInput
  }

  export type ListenerOrderByRelevanceInput = {
    fields: ListenerOrderByRelevanceFieldEnum | ListenerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ListenerCountOrderByAggregateInput = {
    id?: SortOrder
    automateId?: SortOrder
    listener?: SortOrder
    prompt?: SortOrder
    commentReply?: SortOrder
    dmCount?: SortOrder
    commentCount?: SortOrder
  }

  export type ListenerAvgOrderByAggregateInput = {
    dmCount?: SortOrder
    commentCount?: SortOrder
  }

  export type ListenerMaxOrderByAggregateInput = {
    id?: SortOrder
    automateId?: SortOrder
    listener?: SortOrder
    prompt?: SortOrder
    commentReply?: SortOrder
    dmCount?: SortOrder
    commentCount?: SortOrder
  }

  export type ListenerMinOrderByAggregateInput = {
    id?: SortOrder
    automateId?: SortOrder
    listener?: SortOrder
    prompt?: SortOrder
    commentReply?: SortOrder
    dmCount?: SortOrder
    commentCount?: SortOrder
  }

  export type ListenerSumOrderByAggregateInput = {
    dmCount?: SortOrder
    commentCount?: SortOrder
  }

  export type EnumLISTENERWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LISTENER | EnumLISTENERFieldRefInput<$PrismaModel>
    in?: $Enums.LISTENER[]
    notIn?: $Enums.LISTENER[]
    not?: NestedEnumLISTENERWithAggregatesFilter<$PrismaModel> | $Enums.LISTENER
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLISTENERFilter<$PrismaModel>
    _max?: NestedEnumLISTENERFilter<$PrismaModel>
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

  export type EnumMEDIA_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.MEDIA_TYPE | EnumMEDIA_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.MEDIA_TYPE[]
    notIn?: $Enums.MEDIA_TYPE[]
    not?: NestedEnumMEDIA_TYPEFilter<$PrismaModel> | $Enums.MEDIA_TYPE
  }

  export type PostOrderByRelevanceInput = {
    fields: PostOrderByRelevanceFieldEnum | PostOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    postid?: SortOrder
    caption?: SortOrder
    media?: SortOrder
    mediaType?: SortOrder
    automateId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    postid?: SortOrder
    caption?: SortOrder
    media?: SortOrder
    mediaType?: SortOrder
    automateId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    postid?: SortOrder
    caption?: SortOrder
    media?: SortOrder
    mediaType?: SortOrder
    automateId?: SortOrder
  }

  export type EnumMEDIA_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MEDIA_TYPE | EnumMEDIA_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.MEDIA_TYPE[]
    notIn?: $Enums.MEDIA_TYPE[]
    not?: NestedEnumMEDIA_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.MEDIA_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMEDIA_TYPEFilter<$PrismaModel>
    _max?: NestedEnumMEDIA_TYPEFilter<$PrismaModel>
  }

  export type DmsOrderByRelevanceInput = {
    fields: DmsOrderByRelevanceFieldEnum | DmsOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DmsCountOrderByAggregateInput = {
    id?: SortOrder
    automateId?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
  }

  export type DmsMaxOrderByAggregateInput = {
    id?: SortOrder
    automateId?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
  }

  export type DmsMinOrderByAggregateInput = {
    id?: SortOrder
    automateId?: SortOrder
    createdAt?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    message?: SortOrder
  }

  export type KeywordOrderByRelevanceInput = {
    fields: KeywordOrderByRelevanceFieldEnum | KeywordOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type KeywordAutomateIdWordCompoundUniqueInput = {
    automateId: string
    word: string
  }

  export type KeywordCountOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    automateId?: SortOrder
  }

  export type KeywordMaxOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    automateId?: SortOrder
  }

  export type KeywordMinOrderByAggregateInput = {
    id?: SortOrder
    word?: SortOrder
    automateId?: SortOrder
  }

  export type SubcriptionCreateNestedOneWithoutUserInput = {
    create?: XOR<SubcriptionCreateWithoutUserInput, SubcriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubcriptionCreateOrConnectWithoutUserInput
    connect?: SubcriptionWhereUniqueInput
  }

  export type AutomationCreateNestedManyWithoutUserInput = {
    create?: XOR<AutomationCreateWithoutUserInput, AutomationUncheckedCreateWithoutUserInput> | AutomationCreateWithoutUserInput[] | AutomationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AutomationCreateOrConnectWithoutUserInput | AutomationCreateOrConnectWithoutUserInput[]
    createMany?: AutomationCreateManyUserInputEnvelope
    connect?: AutomationWhereUniqueInput | AutomationWhereUniqueInput[]
  }

  export type IntegrationsCreateNestedManyWithoutUserInput = {
    create?: XOR<IntegrationsCreateWithoutUserInput, IntegrationsUncheckedCreateWithoutUserInput> | IntegrationsCreateWithoutUserInput[] | IntegrationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationsCreateOrConnectWithoutUserInput | IntegrationsCreateOrConnectWithoutUserInput[]
    createMany?: IntegrationsCreateManyUserInputEnvelope
    connect?: IntegrationsWhereUniqueInput | IntegrationsWhereUniqueInput[]
  }

  export type SubcriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<SubcriptionCreateWithoutUserInput, SubcriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubcriptionCreateOrConnectWithoutUserInput
    connect?: SubcriptionWhereUniqueInput
  }

  export type AutomationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AutomationCreateWithoutUserInput, AutomationUncheckedCreateWithoutUserInput> | AutomationCreateWithoutUserInput[] | AutomationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AutomationCreateOrConnectWithoutUserInput | AutomationCreateOrConnectWithoutUserInput[]
    createMany?: AutomationCreateManyUserInputEnvelope
    connect?: AutomationWhereUniqueInput | AutomationWhereUniqueInput[]
  }

  export type IntegrationsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IntegrationsCreateWithoutUserInput, IntegrationsUncheckedCreateWithoutUserInput> | IntegrationsCreateWithoutUserInput[] | IntegrationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationsCreateOrConnectWithoutUserInput | IntegrationsCreateOrConnectWithoutUserInput[]
    createMany?: IntegrationsCreateManyUserInputEnvelope
    connect?: IntegrationsWhereUniqueInput | IntegrationsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SubcriptionUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubcriptionCreateWithoutUserInput, SubcriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubcriptionCreateOrConnectWithoutUserInput
    upsert?: SubcriptionUpsertWithoutUserInput
    disconnect?: SubcriptionWhereInput | boolean
    delete?: SubcriptionWhereInput | boolean
    connect?: SubcriptionWhereUniqueInput
    update?: XOR<XOR<SubcriptionUpdateToOneWithWhereWithoutUserInput, SubcriptionUpdateWithoutUserInput>, SubcriptionUncheckedUpdateWithoutUserInput>
  }

  export type AutomationUpdateManyWithoutUserNestedInput = {
    create?: XOR<AutomationCreateWithoutUserInput, AutomationUncheckedCreateWithoutUserInput> | AutomationCreateWithoutUserInput[] | AutomationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AutomationCreateOrConnectWithoutUserInput | AutomationCreateOrConnectWithoutUserInput[]
    upsert?: AutomationUpsertWithWhereUniqueWithoutUserInput | AutomationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AutomationCreateManyUserInputEnvelope
    set?: AutomationWhereUniqueInput | AutomationWhereUniqueInput[]
    disconnect?: AutomationWhereUniqueInput | AutomationWhereUniqueInput[]
    delete?: AutomationWhereUniqueInput | AutomationWhereUniqueInput[]
    connect?: AutomationWhereUniqueInput | AutomationWhereUniqueInput[]
    update?: AutomationUpdateWithWhereUniqueWithoutUserInput | AutomationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AutomationUpdateManyWithWhereWithoutUserInput | AutomationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AutomationScalarWhereInput | AutomationScalarWhereInput[]
  }

  export type IntegrationsUpdateManyWithoutUserNestedInput = {
    create?: XOR<IntegrationsCreateWithoutUserInput, IntegrationsUncheckedCreateWithoutUserInput> | IntegrationsCreateWithoutUserInput[] | IntegrationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationsCreateOrConnectWithoutUserInput | IntegrationsCreateOrConnectWithoutUserInput[]
    upsert?: IntegrationsUpsertWithWhereUniqueWithoutUserInput | IntegrationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IntegrationsCreateManyUserInputEnvelope
    set?: IntegrationsWhereUniqueInput | IntegrationsWhereUniqueInput[]
    disconnect?: IntegrationsWhereUniqueInput | IntegrationsWhereUniqueInput[]
    delete?: IntegrationsWhereUniqueInput | IntegrationsWhereUniqueInput[]
    connect?: IntegrationsWhereUniqueInput | IntegrationsWhereUniqueInput[]
    update?: IntegrationsUpdateWithWhereUniqueWithoutUserInput | IntegrationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IntegrationsUpdateManyWithWhereWithoutUserInput | IntegrationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IntegrationsScalarWhereInput | IntegrationsScalarWhereInput[]
  }

  export type SubcriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<SubcriptionCreateWithoutUserInput, SubcriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: SubcriptionCreateOrConnectWithoutUserInput
    upsert?: SubcriptionUpsertWithoutUserInput
    disconnect?: SubcriptionWhereInput | boolean
    delete?: SubcriptionWhereInput | boolean
    connect?: SubcriptionWhereUniqueInput
    update?: XOR<XOR<SubcriptionUpdateToOneWithWhereWithoutUserInput, SubcriptionUpdateWithoutUserInput>, SubcriptionUncheckedUpdateWithoutUserInput>
  }

  export type AutomationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AutomationCreateWithoutUserInput, AutomationUncheckedCreateWithoutUserInput> | AutomationCreateWithoutUserInput[] | AutomationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AutomationCreateOrConnectWithoutUserInput | AutomationCreateOrConnectWithoutUserInput[]
    upsert?: AutomationUpsertWithWhereUniqueWithoutUserInput | AutomationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AutomationCreateManyUserInputEnvelope
    set?: AutomationWhereUniqueInput | AutomationWhereUniqueInput[]
    disconnect?: AutomationWhereUniqueInput | AutomationWhereUniqueInput[]
    delete?: AutomationWhereUniqueInput | AutomationWhereUniqueInput[]
    connect?: AutomationWhereUniqueInput | AutomationWhereUniqueInput[]
    update?: AutomationUpdateWithWhereUniqueWithoutUserInput | AutomationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AutomationUpdateManyWithWhereWithoutUserInput | AutomationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AutomationScalarWhereInput | AutomationScalarWhereInput[]
  }

  export type IntegrationsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IntegrationsCreateWithoutUserInput, IntegrationsUncheckedCreateWithoutUserInput> | IntegrationsCreateWithoutUserInput[] | IntegrationsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IntegrationsCreateOrConnectWithoutUserInput | IntegrationsCreateOrConnectWithoutUserInput[]
    upsert?: IntegrationsUpsertWithWhereUniqueWithoutUserInput | IntegrationsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IntegrationsCreateManyUserInputEnvelope
    set?: IntegrationsWhereUniqueInput | IntegrationsWhereUniqueInput[]
    disconnect?: IntegrationsWhereUniqueInput | IntegrationsWhereUniqueInput[]
    delete?: IntegrationsWhereUniqueInput | IntegrationsWhereUniqueInput[]
    connect?: IntegrationsWhereUniqueInput | IntegrationsWhereUniqueInput[]
    update?: IntegrationsUpdateWithWhereUniqueWithoutUserInput | IntegrationsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IntegrationsUpdateManyWithWhereWithoutUserInput | IntegrationsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IntegrationsScalarWhereInput | IntegrationsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubcriptionInput = {
    create?: XOR<UserCreateWithoutSubcriptionInput, UserUncheckedCreateWithoutSubcriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubcriptionInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPLANFieldUpdateOperationsInput = {
    set?: $Enums.PLAN
  }

  export type UserUpdateOneWithoutSubcriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubcriptionInput, UserUncheckedCreateWithoutSubcriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubcriptionInput
    upsert?: UserUpsertWithoutSubcriptionInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubcriptionInput, UserUpdateWithoutSubcriptionInput>, UserUncheckedUpdateWithoutSubcriptionInput>
  }

  export type UserCreateNestedOneWithoutAutomationsInput = {
    create?: XOR<UserCreateWithoutAutomationsInput, UserUncheckedCreateWithoutAutomationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAutomationsInput
    connect?: UserWhereUniqueInput
  }

  export type TriggerCreateNestedManyWithoutAutomationInput = {
    create?: XOR<TriggerCreateWithoutAutomationInput, TriggerUncheckedCreateWithoutAutomationInput> | TriggerCreateWithoutAutomationInput[] | TriggerUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutAutomationInput | TriggerCreateOrConnectWithoutAutomationInput[]
    createMany?: TriggerCreateManyAutomationInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type ListenerCreateNestedOneWithoutAutomationInput = {
    create?: XOR<ListenerCreateWithoutAutomationInput, ListenerUncheckedCreateWithoutAutomationInput>
    connectOrCreate?: ListenerCreateOrConnectWithoutAutomationInput
    connect?: ListenerWhereUniqueInput
  }

  export type PostCreateNestedManyWithoutAutomationInput = {
    create?: XOR<PostCreateWithoutAutomationInput, PostUncheckedCreateWithoutAutomationInput> | PostCreateWithoutAutomationInput[] | PostUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAutomationInput | PostCreateOrConnectWithoutAutomationInput[]
    createMany?: PostCreateManyAutomationInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type DmsCreateNestedManyWithoutAutomationInput = {
    create?: XOR<DmsCreateWithoutAutomationInput, DmsUncheckedCreateWithoutAutomationInput> | DmsCreateWithoutAutomationInput[] | DmsUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: DmsCreateOrConnectWithoutAutomationInput | DmsCreateOrConnectWithoutAutomationInput[]
    createMany?: DmsCreateManyAutomationInputEnvelope
    connect?: DmsWhereUniqueInput | DmsWhereUniqueInput[]
  }

  export type KeywordCreateNestedManyWithoutAutomationInput = {
    create?: XOR<KeywordCreateWithoutAutomationInput, KeywordUncheckedCreateWithoutAutomationInput> | KeywordCreateWithoutAutomationInput[] | KeywordUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutAutomationInput | KeywordCreateOrConnectWithoutAutomationInput[]
    createMany?: KeywordCreateManyAutomationInputEnvelope
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
  }

  export type TriggerUncheckedCreateNestedManyWithoutAutomationInput = {
    create?: XOR<TriggerCreateWithoutAutomationInput, TriggerUncheckedCreateWithoutAutomationInput> | TriggerCreateWithoutAutomationInput[] | TriggerUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutAutomationInput | TriggerCreateOrConnectWithoutAutomationInput[]
    createMany?: TriggerCreateManyAutomationInputEnvelope
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
  }

  export type ListenerUncheckedCreateNestedOneWithoutAutomationInput = {
    create?: XOR<ListenerCreateWithoutAutomationInput, ListenerUncheckedCreateWithoutAutomationInput>
    connectOrCreate?: ListenerCreateOrConnectWithoutAutomationInput
    connect?: ListenerWhereUniqueInput
  }

  export type PostUncheckedCreateNestedManyWithoutAutomationInput = {
    create?: XOR<PostCreateWithoutAutomationInput, PostUncheckedCreateWithoutAutomationInput> | PostCreateWithoutAutomationInput[] | PostUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAutomationInput | PostCreateOrConnectWithoutAutomationInput[]
    createMany?: PostCreateManyAutomationInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type DmsUncheckedCreateNestedManyWithoutAutomationInput = {
    create?: XOR<DmsCreateWithoutAutomationInput, DmsUncheckedCreateWithoutAutomationInput> | DmsCreateWithoutAutomationInput[] | DmsUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: DmsCreateOrConnectWithoutAutomationInput | DmsCreateOrConnectWithoutAutomationInput[]
    createMany?: DmsCreateManyAutomationInputEnvelope
    connect?: DmsWhereUniqueInput | DmsWhereUniqueInput[]
  }

  export type KeywordUncheckedCreateNestedManyWithoutAutomationInput = {
    create?: XOR<KeywordCreateWithoutAutomationInput, KeywordUncheckedCreateWithoutAutomationInput> | KeywordCreateWithoutAutomationInput[] | KeywordUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutAutomationInput | KeywordCreateOrConnectWithoutAutomationInput[]
    createMany?: KeywordCreateManyAutomationInputEnvelope
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneWithoutAutomationsNestedInput = {
    create?: XOR<UserCreateWithoutAutomationsInput, UserUncheckedCreateWithoutAutomationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAutomationsInput
    upsert?: UserUpsertWithoutAutomationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAutomationsInput, UserUpdateWithoutAutomationsInput>, UserUncheckedUpdateWithoutAutomationsInput>
  }

  export type TriggerUpdateManyWithoutAutomationNestedInput = {
    create?: XOR<TriggerCreateWithoutAutomationInput, TriggerUncheckedCreateWithoutAutomationInput> | TriggerCreateWithoutAutomationInput[] | TriggerUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutAutomationInput | TriggerCreateOrConnectWithoutAutomationInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutAutomationInput | TriggerUpsertWithWhereUniqueWithoutAutomationInput[]
    createMany?: TriggerCreateManyAutomationInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutAutomationInput | TriggerUpdateWithWhereUniqueWithoutAutomationInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutAutomationInput | TriggerUpdateManyWithWhereWithoutAutomationInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type ListenerUpdateOneWithoutAutomationNestedInput = {
    create?: XOR<ListenerCreateWithoutAutomationInput, ListenerUncheckedCreateWithoutAutomationInput>
    connectOrCreate?: ListenerCreateOrConnectWithoutAutomationInput
    upsert?: ListenerUpsertWithoutAutomationInput
    disconnect?: ListenerWhereInput | boolean
    delete?: ListenerWhereInput | boolean
    connect?: ListenerWhereUniqueInput
    update?: XOR<XOR<ListenerUpdateToOneWithWhereWithoutAutomationInput, ListenerUpdateWithoutAutomationInput>, ListenerUncheckedUpdateWithoutAutomationInput>
  }

  export type PostUpdateManyWithoutAutomationNestedInput = {
    create?: XOR<PostCreateWithoutAutomationInput, PostUncheckedCreateWithoutAutomationInput> | PostCreateWithoutAutomationInput[] | PostUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAutomationInput | PostCreateOrConnectWithoutAutomationInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAutomationInput | PostUpsertWithWhereUniqueWithoutAutomationInput[]
    createMany?: PostCreateManyAutomationInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAutomationInput | PostUpdateWithWhereUniqueWithoutAutomationInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAutomationInput | PostUpdateManyWithWhereWithoutAutomationInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type DmsUpdateManyWithoutAutomationNestedInput = {
    create?: XOR<DmsCreateWithoutAutomationInput, DmsUncheckedCreateWithoutAutomationInput> | DmsCreateWithoutAutomationInput[] | DmsUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: DmsCreateOrConnectWithoutAutomationInput | DmsCreateOrConnectWithoutAutomationInput[]
    upsert?: DmsUpsertWithWhereUniqueWithoutAutomationInput | DmsUpsertWithWhereUniqueWithoutAutomationInput[]
    createMany?: DmsCreateManyAutomationInputEnvelope
    set?: DmsWhereUniqueInput | DmsWhereUniqueInput[]
    disconnect?: DmsWhereUniqueInput | DmsWhereUniqueInput[]
    delete?: DmsWhereUniqueInput | DmsWhereUniqueInput[]
    connect?: DmsWhereUniqueInput | DmsWhereUniqueInput[]
    update?: DmsUpdateWithWhereUniqueWithoutAutomationInput | DmsUpdateWithWhereUniqueWithoutAutomationInput[]
    updateMany?: DmsUpdateManyWithWhereWithoutAutomationInput | DmsUpdateManyWithWhereWithoutAutomationInput[]
    deleteMany?: DmsScalarWhereInput | DmsScalarWhereInput[]
  }

  export type KeywordUpdateManyWithoutAutomationNestedInput = {
    create?: XOR<KeywordCreateWithoutAutomationInput, KeywordUncheckedCreateWithoutAutomationInput> | KeywordCreateWithoutAutomationInput[] | KeywordUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutAutomationInput | KeywordCreateOrConnectWithoutAutomationInput[]
    upsert?: KeywordUpsertWithWhereUniqueWithoutAutomationInput | KeywordUpsertWithWhereUniqueWithoutAutomationInput[]
    createMany?: KeywordCreateManyAutomationInputEnvelope
    set?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    disconnect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    delete?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    update?: KeywordUpdateWithWhereUniqueWithoutAutomationInput | KeywordUpdateWithWhereUniqueWithoutAutomationInput[]
    updateMany?: KeywordUpdateManyWithWhereWithoutAutomationInput | KeywordUpdateManyWithWhereWithoutAutomationInput[]
    deleteMany?: KeywordScalarWhereInput | KeywordScalarWhereInput[]
  }

  export type TriggerUncheckedUpdateManyWithoutAutomationNestedInput = {
    create?: XOR<TriggerCreateWithoutAutomationInput, TriggerUncheckedCreateWithoutAutomationInput> | TriggerCreateWithoutAutomationInput[] | TriggerUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: TriggerCreateOrConnectWithoutAutomationInput | TriggerCreateOrConnectWithoutAutomationInput[]
    upsert?: TriggerUpsertWithWhereUniqueWithoutAutomationInput | TriggerUpsertWithWhereUniqueWithoutAutomationInput[]
    createMany?: TriggerCreateManyAutomationInputEnvelope
    set?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    disconnect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    delete?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    connect?: TriggerWhereUniqueInput | TriggerWhereUniqueInput[]
    update?: TriggerUpdateWithWhereUniqueWithoutAutomationInput | TriggerUpdateWithWhereUniqueWithoutAutomationInput[]
    updateMany?: TriggerUpdateManyWithWhereWithoutAutomationInput | TriggerUpdateManyWithWhereWithoutAutomationInput[]
    deleteMany?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
  }

  export type ListenerUncheckedUpdateOneWithoutAutomationNestedInput = {
    create?: XOR<ListenerCreateWithoutAutomationInput, ListenerUncheckedCreateWithoutAutomationInput>
    connectOrCreate?: ListenerCreateOrConnectWithoutAutomationInput
    upsert?: ListenerUpsertWithoutAutomationInput
    disconnect?: ListenerWhereInput | boolean
    delete?: ListenerWhereInput | boolean
    connect?: ListenerWhereUniqueInput
    update?: XOR<XOR<ListenerUpdateToOneWithWhereWithoutAutomationInput, ListenerUpdateWithoutAutomationInput>, ListenerUncheckedUpdateWithoutAutomationInput>
  }

  export type PostUncheckedUpdateManyWithoutAutomationNestedInput = {
    create?: XOR<PostCreateWithoutAutomationInput, PostUncheckedCreateWithoutAutomationInput> | PostCreateWithoutAutomationInput[] | PostUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAutomationInput | PostCreateOrConnectWithoutAutomationInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAutomationInput | PostUpsertWithWhereUniqueWithoutAutomationInput[]
    createMany?: PostCreateManyAutomationInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAutomationInput | PostUpdateWithWhereUniqueWithoutAutomationInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAutomationInput | PostUpdateManyWithWhereWithoutAutomationInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type DmsUncheckedUpdateManyWithoutAutomationNestedInput = {
    create?: XOR<DmsCreateWithoutAutomationInput, DmsUncheckedCreateWithoutAutomationInput> | DmsCreateWithoutAutomationInput[] | DmsUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: DmsCreateOrConnectWithoutAutomationInput | DmsCreateOrConnectWithoutAutomationInput[]
    upsert?: DmsUpsertWithWhereUniqueWithoutAutomationInput | DmsUpsertWithWhereUniqueWithoutAutomationInput[]
    createMany?: DmsCreateManyAutomationInputEnvelope
    set?: DmsWhereUniqueInput | DmsWhereUniqueInput[]
    disconnect?: DmsWhereUniqueInput | DmsWhereUniqueInput[]
    delete?: DmsWhereUniqueInput | DmsWhereUniqueInput[]
    connect?: DmsWhereUniqueInput | DmsWhereUniqueInput[]
    update?: DmsUpdateWithWhereUniqueWithoutAutomationInput | DmsUpdateWithWhereUniqueWithoutAutomationInput[]
    updateMany?: DmsUpdateManyWithWhereWithoutAutomationInput | DmsUpdateManyWithWhereWithoutAutomationInput[]
    deleteMany?: DmsScalarWhereInput | DmsScalarWhereInput[]
  }

  export type KeywordUncheckedUpdateManyWithoutAutomationNestedInput = {
    create?: XOR<KeywordCreateWithoutAutomationInput, KeywordUncheckedCreateWithoutAutomationInput> | KeywordCreateWithoutAutomationInput[] | KeywordUncheckedCreateWithoutAutomationInput[]
    connectOrCreate?: KeywordCreateOrConnectWithoutAutomationInput | KeywordCreateOrConnectWithoutAutomationInput[]
    upsert?: KeywordUpsertWithWhereUniqueWithoutAutomationInput | KeywordUpsertWithWhereUniqueWithoutAutomationInput[]
    createMany?: KeywordCreateManyAutomationInputEnvelope
    set?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    disconnect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    delete?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    connect?: KeywordWhereUniqueInput | KeywordWhereUniqueInput[]
    update?: KeywordUpdateWithWhereUniqueWithoutAutomationInput | KeywordUpdateWithWhereUniqueWithoutAutomationInput[]
    updateMany?: KeywordUpdateManyWithWhereWithoutAutomationInput | KeywordUpdateManyWithWhereWithoutAutomationInput[]
    deleteMany?: KeywordScalarWhereInput | KeywordScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutIntegrationsInput = {
    create?: XOR<UserCreateWithoutIntegrationsInput, UserUncheckedCreateWithoutIntegrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIntegrationsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumINTERGRATIONFieldUpdateOperationsInput = {
    set?: $Enums.INTERGRATION
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneWithoutIntegrationsNestedInput = {
    create?: XOR<UserCreateWithoutIntegrationsInput, UserUncheckedCreateWithoutIntegrationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutIntegrationsInput
    upsert?: UserUpsertWithoutIntegrationsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutIntegrationsInput, UserUpdateWithoutIntegrationsInput>, UserUncheckedUpdateWithoutIntegrationsInput>
  }

  export type AutomationCreateNestedOneWithoutTriggerInput = {
    create?: XOR<AutomationCreateWithoutTriggerInput, AutomationUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutTriggerInput
    connect?: AutomationWhereUniqueInput
  }

  export type AutomationUpdateOneWithoutTriggerNestedInput = {
    create?: XOR<AutomationCreateWithoutTriggerInput, AutomationUncheckedCreateWithoutTriggerInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutTriggerInput
    upsert?: AutomationUpsertWithoutTriggerInput
    disconnect?: AutomationWhereInput | boolean
    delete?: AutomationWhereInput | boolean
    connect?: AutomationWhereUniqueInput
    update?: XOR<XOR<AutomationUpdateToOneWithWhereWithoutTriggerInput, AutomationUpdateWithoutTriggerInput>, AutomationUncheckedUpdateWithoutTriggerInput>
  }

  export type AutomationCreateNestedOneWithoutListenerInput = {
    create?: XOR<AutomationCreateWithoutListenerInput, AutomationUncheckedCreateWithoutListenerInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutListenerInput
    connect?: AutomationWhereUniqueInput
  }

  export type EnumLISTENERFieldUpdateOperationsInput = {
    set?: $Enums.LISTENER
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AutomationUpdateOneRequiredWithoutListenerNestedInput = {
    create?: XOR<AutomationCreateWithoutListenerInput, AutomationUncheckedCreateWithoutListenerInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutListenerInput
    upsert?: AutomationUpsertWithoutListenerInput
    connect?: AutomationWhereUniqueInput
    update?: XOR<XOR<AutomationUpdateToOneWithWhereWithoutListenerInput, AutomationUpdateWithoutListenerInput>, AutomationUncheckedUpdateWithoutListenerInput>
  }

  export type AutomationCreateNestedOneWithoutPostsInput = {
    create?: XOR<AutomationCreateWithoutPostsInput, AutomationUncheckedCreateWithoutPostsInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutPostsInput
    connect?: AutomationWhereUniqueInput
  }

  export type EnumMEDIA_TYPEFieldUpdateOperationsInput = {
    set?: $Enums.MEDIA_TYPE
  }

  export type AutomationUpdateOneWithoutPostsNestedInput = {
    create?: XOR<AutomationCreateWithoutPostsInput, AutomationUncheckedCreateWithoutPostsInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutPostsInput
    upsert?: AutomationUpsertWithoutPostsInput
    disconnect?: AutomationWhereInput | boolean
    delete?: AutomationWhereInput | boolean
    connect?: AutomationWhereUniqueInput
    update?: XOR<XOR<AutomationUpdateToOneWithWhereWithoutPostsInput, AutomationUpdateWithoutPostsInput>, AutomationUncheckedUpdateWithoutPostsInput>
  }

  export type AutomationCreateNestedOneWithoutDmsInput = {
    create?: XOR<AutomationCreateWithoutDmsInput, AutomationUncheckedCreateWithoutDmsInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutDmsInput
    connect?: AutomationWhereUniqueInput
  }

  export type AutomationUpdateOneWithoutDmsNestedInput = {
    create?: XOR<AutomationCreateWithoutDmsInput, AutomationUncheckedCreateWithoutDmsInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutDmsInput
    upsert?: AutomationUpsertWithoutDmsInput
    disconnect?: AutomationWhereInput | boolean
    delete?: AutomationWhereInput | boolean
    connect?: AutomationWhereUniqueInput
    update?: XOR<XOR<AutomationUpdateToOneWithWhereWithoutDmsInput, AutomationUpdateWithoutDmsInput>, AutomationUncheckedUpdateWithoutDmsInput>
  }

  export type AutomationCreateNestedOneWithoutKeywordsInput = {
    create?: XOR<AutomationCreateWithoutKeywordsInput, AutomationUncheckedCreateWithoutKeywordsInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutKeywordsInput
    connect?: AutomationWhereUniqueInput
  }

  export type AutomationUpdateOneWithoutKeywordsNestedInput = {
    create?: XOR<AutomationCreateWithoutKeywordsInput, AutomationUncheckedCreateWithoutKeywordsInput>
    connectOrCreate?: AutomationCreateOrConnectWithoutKeywordsInput
    upsert?: AutomationUpsertWithoutKeywordsInput
    disconnect?: AutomationWhereInput | boolean
    delete?: AutomationWhereInput | boolean
    connect?: AutomationWhereUniqueInput
    update?: XOR<XOR<AutomationUpdateToOneWithWhereWithoutKeywordsInput, AutomationUpdateWithoutKeywordsInput>, AutomationUncheckedUpdateWithoutKeywordsInput>
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

  export type NestedEnumPLANFilter<$PrismaModel = never> = {
    equals?: $Enums.PLAN | EnumPLANFieldRefInput<$PrismaModel>
    in?: $Enums.PLAN[]
    notIn?: $Enums.PLAN[]
    not?: NestedEnumPLANFilter<$PrismaModel> | $Enums.PLAN
  }

  export type NestedEnumPLANWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PLAN | EnumPLANFieldRefInput<$PrismaModel>
    in?: $Enums.PLAN[]
    notIn?: $Enums.PLAN[]
    not?: NestedEnumPLANWithAggregatesFilter<$PrismaModel> | $Enums.PLAN
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPLANFilter<$PrismaModel>
    _max?: NestedEnumPLANFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumINTERGRATIONFilter<$PrismaModel = never> = {
    equals?: $Enums.INTERGRATION | EnumINTERGRATIONFieldRefInput<$PrismaModel>
    in?: $Enums.INTERGRATION[]
    notIn?: $Enums.INTERGRATION[]
    not?: NestedEnumINTERGRATIONFilter<$PrismaModel> | $Enums.INTERGRATION
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

  export type NestedEnumINTERGRATIONWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.INTERGRATION | EnumINTERGRATIONFieldRefInput<$PrismaModel>
    in?: $Enums.INTERGRATION[]
    notIn?: $Enums.INTERGRATION[]
    not?: NestedEnumINTERGRATIONWithAggregatesFilter<$PrismaModel> | $Enums.INTERGRATION
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumINTERGRATIONFilter<$PrismaModel>
    _max?: NestedEnumINTERGRATIONFilter<$PrismaModel>
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

  export type NestedEnumLISTENERFilter<$PrismaModel = never> = {
    equals?: $Enums.LISTENER | EnumLISTENERFieldRefInput<$PrismaModel>
    in?: $Enums.LISTENER[]
    notIn?: $Enums.LISTENER[]
    not?: NestedEnumLISTENERFilter<$PrismaModel> | $Enums.LISTENER
  }

  export type NestedEnumLISTENERWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LISTENER | EnumLISTENERFieldRefInput<$PrismaModel>
    in?: $Enums.LISTENER[]
    notIn?: $Enums.LISTENER[]
    not?: NestedEnumLISTENERWithAggregatesFilter<$PrismaModel> | $Enums.LISTENER
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLISTENERFilter<$PrismaModel>
    _max?: NestedEnumLISTENERFilter<$PrismaModel>
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

  export type NestedEnumMEDIA_TYPEFilter<$PrismaModel = never> = {
    equals?: $Enums.MEDIA_TYPE | EnumMEDIA_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.MEDIA_TYPE[]
    notIn?: $Enums.MEDIA_TYPE[]
    not?: NestedEnumMEDIA_TYPEFilter<$PrismaModel> | $Enums.MEDIA_TYPE
  }

  export type NestedEnumMEDIA_TYPEWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MEDIA_TYPE | EnumMEDIA_TYPEFieldRefInput<$PrismaModel>
    in?: $Enums.MEDIA_TYPE[]
    notIn?: $Enums.MEDIA_TYPE[]
    not?: NestedEnumMEDIA_TYPEWithAggregatesFilter<$PrismaModel> | $Enums.MEDIA_TYPE
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMEDIA_TYPEFilter<$PrismaModel>
    _max?: NestedEnumMEDIA_TYPEFilter<$PrismaModel>
  }

  export type SubcriptionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: $Enums.PLAN
    customerId?: string | null
  }

  export type SubcriptionUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    plan?: $Enums.PLAN
    customerId?: string | null
  }

  export type SubcriptionCreateOrConnectWithoutUserInput = {
    where: SubcriptionWhereUniqueInput
    create: XOR<SubcriptionCreateWithoutUserInput, SubcriptionUncheckedCreateWithoutUserInput>
  }

  export type AutomationCreateWithoutUserInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    trigger?: TriggerCreateNestedManyWithoutAutomationInput
    listener?: ListenerCreateNestedOneWithoutAutomationInput
    posts?: PostCreateNestedManyWithoutAutomationInput
    dms?: DmsCreateNestedManyWithoutAutomationInput
    keywords?: KeywordCreateNestedManyWithoutAutomationInput
  }

  export type AutomationUncheckedCreateWithoutUserInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    trigger?: TriggerUncheckedCreateNestedManyWithoutAutomationInput
    listener?: ListenerUncheckedCreateNestedOneWithoutAutomationInput
    posts?: PostUncheckedCreateNestedManyWithoutAutomationInput
    dms?: DmsUncheckedCreateNestedManyWithoutAutomationInput
    keywords?: KeywordUncheckedCreateNestedManyWithoutAutomationInput
  }

  export type AutomationCreateOrConnectWithoutUserInput = {
    where: AutomationWhereUniqueInput
    create: XOR<AutomationCreateWithoutUserInput, AutomationUncheckedCreateWithoutUserInput>
  }

  export type AutomationCreateManyUserInputEnvelope = {
    data: AutomationCreateManyUserInput | AutomationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IntegrationsCreateWithoutUserInput = {
    id?: string
    name?: $Enums.INTERGRATION
    createdAt?: Date | string
    token: string
    expireAt?: Date | string | null
    instagramId?: string | null
  }

  export type IntegrationsUncheckedCreateWithoutUserInput = {
    id?: string
    name?: $Enums.INTERGRATION
    createdAt?: Date | string
    token: string
    expireAt?: Date | string | null
    instagramId?: string | null
  }

  export type IntegrationsCreateOrConnectWithoutUserInput = {
    where: IntegrationsWhereUniqueInput
    create: XOR<IntegrationsCreateWithoutUserInput, IntegrationsUncheckedCreateWithoutUserInput>
  }

  export type IntegrationsCreateManyUserInputEnvelope = {
    data: IntegrationsCreateManyUserInput | IntegrationsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubcriptionUpsertWithoutUserInput = {
    update: XOR<SubcriptionUpdateWithoutUserInput, SubcriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubcriptionCreateWithoutUserInput, SubcriptionUncheckedCreateWithoutUserInput>
    where?: SubcriptionWhereInput
  }

  export type SubcriptionUpdateToOneWithWhereWithoutUserInput = {
    where?: SubcriptionWhereInput
    data: XOR<SubcriptionUpdateWithoutUserInput, SubcriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubcriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumPLANFieldUpdateOperationsInput | $Enums.PLAN
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubcriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: EnumPLANFieldUpdateOperationsInput | $Enums.PLAN
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AutomationUpsertWithWhereUniqueWithoutUserInput = {
    where: AutomationWhereUniqueInput
    update: XOR<AutomationUpdateWithoutUserInput, AutomationUncheckedUpdateWithoutUserInput>
    create: XOR<AutomationCreateWithoutUserInput, AutomationUncheckedCreateWithoutUserInput>
  }

  export type AutomationUpdateWithWhereUniqueWithoutUserInput = {
    where: AutomationWhereUniqueInput
    data: XOR<AutomationUpdateWithoutUserInput, AutomationUncheckedUpdateWithoutUserInput>
  }

  export type AutomationUpdateManyWithWhereWithoutUserInput = {
    where: AutomationScalarWhereInput
    data: XOR<AutomationUpdateManyMutationInput, AutomationUncheckedUpdateManyWithoutUserInput>
  }

  export type AutomationScalarWhereInput = {
    AND?: AutomationScalarWhereInput | AutomationScalarWhereInput[]
    OR?: AutomationScalarWhereInput[]
    NOT?: AutomationScalarWhereInput | AutomationScalarWhereInput[]
    id?: StringFilter<"Automation"> | string
    name?: StringFilter<"Automation"> | string
    createdAt?: DateTimeFilter<"Automation"> | Date | string
    active?: BoolFilter<"Automation"> | boolean
    userId?: StringNullableFilter<"Automation"> | string | null
  }

  export type IntegrationsUpsertWithWhereUniqueWithoutUserInput = {
    where: IntegrationsWhereUniqueInput
    update: XOR<IntegrationsUpdateWithoutUserInput, IntegrationsUncheckedUpdateWithoutUserInput>
    create: XOR<IntegrationsCreateWithoutUserInput, IntegrationsUncheckedCreateWithoutUserInput>
  }

  export type IntegrationsUpdateWithWhereUniqueWithoutUserInput = {
    where: IntegrationsWhereUniqueInput
    data: XOR<IntegrationsUpdateWithoutUserInput, IntegrationsUncheckedUpdateWithoutUserInput>
  }

  export type IntegrationsUpdateManyWithWhereWithoutUserInput = {
    where: IntegrationsScalarWhereInput
    data: XOR<IntegrationsUpdateManyMutationInput, IntegrationsUncheckedUpdateManyWithoutUserInput>
  }

  export type IntegrationsScalarWhereInput = {
    AND?: IntegrationsScalarWhereInput | IntegrationsScalarWhereInput[]
    OR?: IntegrationsScalarWhereInput[]
    NOT?: IntegrationsScalarWhereInput | IntegrationsScalarWhereInput[]
    id?: StringFilter<"Integrations"> | string
    name?: EnumINTERGRATIONFilter<"Integrations"> | $Enums.INTERGRATION
    createdAt?: DateTimeFilter<"Integrations"> | Date | string
    userId?: StringNullableFilter<"Integrations"> | string | null
    token?: StringFilter<"Integrations"> | string
    expireAt?: DateTimeNullableFilter<"Integrations"> | Date | string | null
    instagramId?: StringNullableFilter<"Integrations"> | string | null
  }

  export type UserCreateWithoutSubcriptionInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    email: string
    createdAt?: Date | string
    clerkId: string
    automations?: AutomationCreateNestedManyWithoutUserInput
    integrations?: IntegrationsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubcriptionInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    email: string
    createdAt?: Date | string
    clerkId: string
    automations?: AutomationUncheckedCreateNestedManyWithoutUserInput
    integrations?: IntegrationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubcriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubcriptionInput, UserUncheckedCreateWithoutSubcriptionInput>
  }

  export type UserUpsertWithoutSubcriptionInput = {
    update: XOR<UserUpdateWithoutSubcriptionInput, UserUncheckedUpdateWithoutSubcriptionInput>
    create: XOR<UserCreateWithoutSubcriptionInput, UserUncheckedCreateWithoutSubcriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubcriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubcriptionInput, UserUncheckedUpdateWithoutSubcriptionInput>
  }

  export type UserUpdateWithoutSubcriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
    automations?: AutomationUpdateManyWithoutUserNestedInput
    integrations?: IntegrationsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubcriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
    automations?: AutomationUncheckedUpdateManyWithoutUserNestedInput
    integrations?: IntegrationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAutomationsInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    email: string
    createdAt?: Date | string
    clerkId: string
    subcription?: SubcriptionCreateNestedOneWithoutUserInput
    integrations?: IntegrationsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAutomationsInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    email: string
    createdAt?: Date | string
    clerkId: string
    subcription?: SubcriptionUncheckedCreateNestedOneWithoutUserInput
    integrations?: IntegrationsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAutomationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAutomationsInput, UserUncheckedCreateWithoutAutomationsInput>
  }

  export type TriggerCreateWithoutAutomationInput = {
    id?: string
    type: string
  }

  export type TriggerUncheckedCreateWithoutAutomationInput = {
    id?: string
    type: string
  }

  export type TriggerCreateOrConnectWithoutAutomationInput = {
    where: TriggerWhereUniqueInput
    create: XOR<TriggerCreateWithoutAutomationInput, TriggerUncheckedCreateWithoutAutomationInput>
  }

  export type TriggerCreateManyAutomationInputEnvelope = {
    data: TriggerCreateManyAutomationInput | TriggerCreateManyAutomationInput[]
    skipDuplicates?: boolean
  }

  export type ListenerCreateWithoutAutomationInput = {
    id?: string
    listener?: $Enums.LISTENER
    prompt: string
    commentReply?: string | null
    dmCount?: number
    commentCount?: number
  }

  export type ListenerUncheckedCreateWithoutAutomationInput = {
    id?: string
    listener?: $Enums.LISTENER
    prompt: string
    commentReply?: string | null
    dmCount?: number
    commentCount?: number
  }

  export type ListenerCreateOrConnectWithoutAutomationInput = {
    where: ListenerWhereUniqueInput
    create: XOR<ListenerCreateWithoutAutomationInput, ListenerUncheckedCreateWithoutAutomationInput>
  }

  export type PostCreateWithoutAutomationInput = {
    id?: string
    postid: string
    caption?: string | null
    media: string
    mediaType?: $Enums.MEDIA_TYPE
  }

  export type PostUncheckedCreateWithoutAutomationInput = {
    id?: string
    postid: string
    caption?: string | null
    media: string
    mediaType?: $Enums.MEDIA_TYPE
  }

  export type PostCreateOrConnectWithoutAutomationInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAutomationInput, PostUncheckedCreateWithoutAutomationInput>
  }

  export type PostCreateManyAutomationInputEnvelope = {
    data: PostCreateManyAutomationInput | PostCreateManyAutomationInput[]
    skipDuplicates?: boolean
  }

  export type DmsCreateWithoutAutomationInput = {
    id?: string
    createdAt?: Date | string
    senderId?: string | null
    receiverId?: string | null
    message?: string | null
  }

  export type DmsUncheckedCreateWithoutAutomationInput = {
    id?: string
    createdAt?: Date | string
    senderId?: string | null
    receiverId?: string | null
    message?: string | null
  }

  export type DmsCreateOrConnectWithoutAutomationInput = {
    where: DmsWhereUniqueInput
    create: XOR<DmsCreateWithoutAutomationInput, DmsUncheckedCreateWithoutAutomationInput>
  }

  export type DmsCreateManyAutomationInputEnvelope = {
    data: DmsCreateManyAutomationInput | DmsCreateManyAutomationInput[]
    skipDuplicates?: boolean
  }

  export type KeywordCreateWithoutAutomationInput = {
    id?: string
    word: string
  }

  export type KeywordUncheckedCreateWithoutAutomationInput = {
    id?: string
    word: string
  }

  export type KeywordCreateOrConnectWithoutAutomationInput = {
    where: KeywordWhereUniqueInput
    create: XOR<KeywordCreateWithoutAutomationInput, KeywordUncheckedCreateWithoutAutomationInput>
  }

  export type KeywordCreateManyAutomationInputEnvelope = {
    data: KeywordCreateManyAutomationInput | KeywordCreateManyAutomationInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAutomationsInput = {
    update: XOR<UserUpdateWithoutAutomationsInput, UserUncheckedUpdateWithoutAutomationsInput>
    create: XOR<UserCreateWithoutAutomationsInput, UserUncheckedCreateWithoutAutomationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAutomationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAutomationsInput, UserUncheckedUpdateWithoutAutomationsInput>
  }

  export type UserUpdateWithoutAutomationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
    subcription?: SubcriptionUpdateOneWithoutUserNestedInput
    integrations?: IntegrationsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAutomationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
    subcription?: SubcriptionUncheckedUpdateOneWithoutUserNestedInput
    integrations?: IntegrationsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TriggerUpsertWithWhereUniqueWithoutAutomationInput = {
    where: TriggerWhereUniqueInput
    update: XOR<TriggerUpdateWithoutAutomationInput, TriggerUncheckedUpdateWithoutAutomationInput>
    create: XOR<TriggerCreateWithoutAutomationInput, TriggerUncheckedCreateWithoutAutomationInput>
  }

  export type TriggerUpdateWithWhereUniqueWithoutAutomationInput = {
    where: TriggerWhereUniqueInput
    data: XOR<TriggerUpdateWithoutAutomationInput, TriggerUncheckedUpdateWithoutAutomationInput>
  }

  export type TriggerUpdateManyWithWhereWithoutAutomationInput = {
    where: TriggerScalarWhereInput
    data: XOR<TriggerUpdateManyMutationInput, TriggerUncheckedUpdateManyWithoutAutomationInput>
  }

  export type TriggerScalarWhereInput = {
    AND?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    OR?: TriggerScalarWhereInput[]
    NOT?: TriggerScalarWhereInput | TriggerScalarWhereInput[]
    id?: StringFilter<"Trigger"> | string
    type?: StringFilter<"Trigger"> | string
    automateId?: StringNullableFilter<"Trigger"> | string | null
  }

  export type ListenerUpsertWithoutAutomationInput = {
    update: XOR<ListenerUpdateWithoutAutomationInput, ListenerUncheckedUpdateWithoutAutomationInput>
    create: XOR<ListenerCreateWithoutAutomationInput, ListenerUncheckedCreateWithoutAutomationInput>
    where?: ListenerWhereInput
  }

  export type ListenerUpdateToOneWithWhereWithoutAutomationInput = {
    where?: ListenerWhereInput
    data: XOR<ListenerUpdateWithoutAutomationInput, ListenerUncheckedUpdateWithoutAutomationInput>
  }

  export type ListenerUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    listener?: EnumLISTENERFieldUpdateOperationsInput | $Enums.LISTENER
    prompt?: StringFieldUpdateOperationsInput | string
    commentReply?: NullableStringFieldUpdateOperationsInput | string | null
    dmCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
  }

  export type ListenerUncheckedUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    listener?: EnumLISTENERFieldUpdateOperationsInput | $Enums.LISTENER
    prompt?: StringFieldUpdateOperationsInput | string
    commentReply?: NullableStringFieldUpdateOperationsInput | string | null
    dmCount?: IntFieldUpdateOperationsInput | number
    commentCount?: IntFieldUpdateOperationsInput | number
  }

  export type PostUpsertWithWhereUniqueWithoutAutomationInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAutomationInput, PostUncheckedUpdateWithoutAutomationInput>
    create: XOR<PostCreateWithoutAutomationInput, PostUncheckedCreateWithoutAutomationInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAutomationInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAutomationInput, PostUncheckedUpdateWithoutAutomationInput>
  }

  export type PostUpdateManyWithWhereWithoutAutomationInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAutomationInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: StringFilter<"Post"> | string
    postid?: StringFilter<"Post"> | string
    caption?: StringNullableFilter<"Post"> | string | null
    media?: StringFilter<"Post"> | string
    mediaType?: EnumMEDIA_TYPEFilter<"Post"> | $Enums.MEDIA_TYPE
    automateId?: StringNullableFilter<"Post"> | string | null
  }

  export type DmsUpsertWithWhereUniqueWithoutAutomationInput = {
    where: DmsWhereUniqueInput
    update: XOR<DmsUpdateWithoutAutomationInput, DmsUncheckedUpdateWithoutAutomationInput>
    create: XOR<DmsCreateWithoutAutomationInput, DmsUncheckedCreateWithoutAutomationInput>
  }

  export type DmsUpdateWithWhereUniqueWithoutAutomationInput = {
    where: DmsWhereUniqueInput
    data: XOR<DmsUpdateWithoutAutomationInput, DmsUncheckedUpdateWithoutAutomationInput>
  }

  export type DmsUpdateManyWithWhereWithoutAutomationInput = {
    where: DmsScalarWhereInput
    data: XOR<DmsUpdateManyMutationInput, DmsUncheckedUpdateManyWithoutAutomationInput>
  }

  export type DmsScalarWhereInput = {
    AND?: DmsScalarWhereInput | DmsScalarWhereInput[]
    OR?: DmsScalarWhereInput[]
    NOT?: DmsScalarWhereInput | DmsScalarWhereInput[]
    id?: StringFilter<"Dms"> | string
    automateId?: StringNullableFilter<"Dms"> | string | null
    createdAt?: DateTimeFilter<"Dms"> | Date | string
    senderId?: StringNullableFilter<"Dms"> | string | null
    receiverId?: StringNullableFilter<"Dms"> | string | null
    message?: StringNullableFilter<"Dms"> | string | null
  }

  export type KeywordUpsertWithWhereUniqueWithoutAutomationInput = {
    where: KeywordWhereUniqueInput
    update: XOR<KeywordUpdateWithoutAutomationInput, KeywordUncheckedUpdateWithoutAutomationInput>
    create: XOR<KeywordCreateWithoutAutomationInput, KeywordUncheckedCreateWithoutAutomationInput>
  }

  export type KeywordUpdateWithWhereUniqueWithoutAutomationInput = {
    where: KeywordWhereUniqueInput
    data: XOR<KeywordUpdateWithoutAutomationInput, KeywordUncheckedUpdateWithoutAutomationInput>
  }

  export type KeywordUpdateManyWithWhereWithoutAutomationInput = {
    where: KeywordScalarWhereInput
    data: XOR<KeywordUpdateManyMutationInput, KeywordUncheckedUpdateManyWithoutAutomationInput>
  }

  export type KeywordScalarWhereInput = {
    AND?: KeywordScalarWhereInput | KeywordScalarWhereInput[]
    OR?: KeywordScalarWhereInput[]
    NOT?: KeywordScalarWhereInput | KeywordScalarWhereInput[]
    id?: StringFilter<"Keyword"> | string
    word?: StringFilter<"Keyword"> | string
    automateId?: StringNullableFilter<"Keyword"> | string | null
  }

  export type UserCreateWithoutIntegrationsInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    email: string
    createdAt?: Date | string
    clerkId: string
    subcription?: SubcriptionCreateNestedOneWithoutUserInput
    automations?: AutomationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutIntegrationsInput = {
    id?: string
    firstname?: string | null
    lastname?: string | null
    email: string
    createdAt?: Date | string
    clerkId: string
    subcription?: SubcriptionUncheckedCreateNestedOneWithoutUserInput
    automations?: AutomationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutIntegrationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutIntegrationsInput, UserUncheckedCreateWithoutIntegrationsInput>
  }

  export type UserUpsertWithoutIntegrationsInput = {
    update: XOR<UserUpdateWithoutIntegrationsInput, UserUncheckedUpdateWithoutIntegrationsInput>
    create: XOR<UserCreateWithoutIntegrationsInput, UserUncheckedCreateWithoutIntegrationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutIntegrationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutIntegrationsInput, UserUncheckedUpdateWithoutIntegrationsInput>
  }

  export type UserUpdateWithoutIntegrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
    subcription?: SubcriptionUpdateOneWithoutUserNestedInput
    automations?: AutomationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutIntegrationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstname?: NullableStringFieldUpdateOperationsInput | string | null
    lastname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    clerkId?: StringFieldUpdateOperationsInput | string
    subcription?: SubcriptionUncheckedUpdateOneWithoutUserNestedInput
    automations?: AutomationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AutomationCreateWithoutTriggerInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    User?: UserCreateNestedOneWithoutAutomationsInput
    listener?: ListenerCreateNestedOneWithoutAutomationInput
    posts?: PostCreateNestedManyWithoutAutomationInput
    dms?: DmsCreateNestedManyWithoutAutomationInput
    keywords?: KeywordCreateNestedManyWithoutAutomationInput
  }

  export type AutomationUncheckedCreateWithoutTriggerInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    userId?: string | null
    listener?: ListenerUncheckedCreateNestedOneWithoutAutomationInput
    posts?: PostUncheckedCreateNestedManyWithoutAutomationInput
    dms?: DmsUncheckedCreateNestedManyWithoutAutomationInput
    keywords?: KeywordUncheckedCreateNestedManyWithoutAutomationInput
  }

  export type AutomationCreateOrConnectWithoutTriggerInput = {
    where: AutomationWhereUniqueInput
    create: XOR<AutomationCreateWithoutTriggerInput, AutomationUncheckedCreateWithoutTriggerInput>
  }

  export type AutomationUpsertWithoutTriggerInput = {
    update: XOR<AutomationUpdateWithoutTriggerInput, AutomationUncheckedUpdateWithoutTriggerInput>
    create: XOR<AutomationCreateWithoutTriggerInput, AutomationUncheckedCreateWithoutTriggerInput>
    where?: AutomationWhereInput
  }

  export type AutomationUpdateToOneWithWhereWithoutTriggerInput = {
    where?: AutomationWhereInput
    data: XOR<AutomationUpdateWithoutTriggerInput, AutomationUncheckedUpdateWithoutTriggerInput>
  }

  export type AutomationUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneWithoutAutomationsNestedInput
    listener?: ListenerUpdateOneWithoutAutomationNestedInput
    posts?: PostUpdateManyWithoutAutomationNestedInput
    dms?: DmsUpdateManyWithoutAutomationNestedInput
    keywords?: KeywordUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationUncheckedUpdateWithoutTriggerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    listener?: ListenerUncheckedUpdateOneWithoutAutomationNestedInput
    posts?: PostUncheckedUpdateManyWithoutAutomationNestedInput
    dms?: DmsUncheckedUpdateManyWithoutAutomationNestedInput
    keywords?: KeywordUncheckedUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationCreateWithoutListenerInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    User?: UserCreateNestedOneWithoutAutomationsInput
    trigger?: TriggerCreateNestedManyWithoutAutomationInput
    posts?: PostCreateNestedManyWithoutAutomationInput
    dms?: DmsCreateNestedManyWithoutAutomationInput
    keywords?: KeywordCreateNestedManyWithoutAutomationInput
  }

  export type AutomationUncheckedCreateWithoutListenerInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    userId?: string | null
    trigger?: TriggerUncheckedCreateNestedManyWithoutAutomationInput
    posts?: PostUncheckedCreateNestedManyWithoutAutomationInput
    dms?: DmsUncheckedCreateNestedManyWithoutAutomationInput
    keywords?: KeywordUncheckedCreateNestedManyWithoutAutomationInput
  }

  export type AutomationCreateOrConnectWithoutListenerInput = {
    where: AutomationWhereUniqueInput
    create: XOR<AutomationCreateWithoutListenerInput, AutomationUncheckedCreateWithoutListenerInput>
  }

  export type AutomationUpsertWithoutListenerInput = {
    update: XOR<AutomationUpdateWithoutListenerInput, AutomationUncheckedUpdateWithoutListenerInput>
    create: XOR<AutomationCreateWithoutListenerInput, AutomationUncheckedCreateWithoutListenerInput>
    where?: AutomationWhereInput
  }

  export type AutomationUpdateToOneWithWhereWithoutListenerInput = {
    where?: AutomationWhereInput
    data: XOR<AutomationUpdateWithoutListenerInput, AutomationUncheckedUpdateWithoutListenerInput>
  }

  export type AutomationUpdateWithoutListenerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneWithoutAutomationsNestedInput
    trigger?: TriggerUpdateManyWithoutAutomationNestedInput
    posts?: PostUpdateManyWithoutAutomationNestedInput
    dms?: DmsUpdateManyWithoutAutomationNestedInput
    keywords?: KeywordUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationUncheckedUpdateWithoutListenerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: TriggerUncheckedUpdateManyWithoutAutomationNestedInput
    posts?: PostUncheckedUpdateManyWithoutAutomationNestedInput
    dms?: DmsUncheckedUpdateManyWithoutAutomationNestedInput
    keywords?: KeywordUncheckedUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationCreateWithoutPostsInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    User?: UserCreateNestedOneWithoutAutomationsInput
    trigger?: TriggerCreateNestedManyWithoutAutomationInput
    listener?: ListenerCreateNestedOneWithoutAutomationInput
    dms?: DmsCreateNestedManyWithoutAutomationInput
    keywords?: KeywordCreateNestedManyWithoutAutomationInput
  }

  export type AutomationUncheckedCreateWithoutPostsInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    userId?: string | null
    trigger?: TriggerUncheckedCreateNestedManyWithoutAutomationInput
    listener?: ListenerUncheckedCreateNestedOneWithoutAutomationInput
    dms?: DmsUncheckedCreateNestedManyWithoutAutomationInput
    keywords?: KeywordUncheckedCreateNestedManyWithoutAutomationInput
  }

  export type AutomationCreateOrConnectWithoutPostsInput = {
    where: AutomationWhereUniqueInput
    create: XOR<AutomationCreateWithoutPostsInput, AutomationUncheckedCreateWithoutPostsInput>
  }

  export type AutomationUpsertWithoutPostsInput = {
    update: XOR<AutomationUpdateWithoutPostsInput, AutomationUncheckedUpdateWithoutPostsInput>
    create: XOR<AutomationCreateWithoutPostsInput, AutomationUncheckedCreateWithoutPostsInput>
    where?: AutomationWhereInput
  }

  export type AutomationUpdateToOneWithWhereWithoutPostsInput = {
    where?: AutomationWhereInput
    data: XOR<AutomationUpdateWithoutPostsInput, AutomationUncheckedUpdateWithoutPostsInput>
  }

  export type AutomationUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneWithoutAutomationsNestedInput
    trigger?: TriggerUpdateManyWithoutAutomationNestedInput
    listener?: ListenerUpdateOneWithoutAutomationNestedInput
    dms?: DmsUpdateManyWithoutAutomationNestedInput
    keywords?: KeywordUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: TriggerUncheckedUpdateManyWithoutAutomationNestedInput
    listener?: ListenerUncheckedUpdateOneWithoutAutomationNestedInput
    dms?: DmsUncheckedUpdateManyWithoutAutomationNestedInput
    keywords?: KeywordUncheckedUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationCreateWithoutDmsInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    User?: UserCreateNestedOneWithoutAutomationsInput
    trigger?: TriggerCreateNestedManyWithoutAutomationInput
    listener?: ListenerCreateNestedOneWithoutAutomationInput
    posts?: PostCreateNestedManyWithoutAutomationInput
    keywords?: KeywordCreateNestedManyWithoutAutomationInput
  }

  export type AutomationUncheckedCreateWithoutDmsInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    userId?: string | null
    trigger?: TriggerUncheckedCreateNestedManyWithoutAutomationInput
    listener?: ListenerUncheckedCreateNestedOneWithoutAutomationInput
    posts?: PostUncheckedCreateNestedManyWithoutAutomationInput
    keywords?: KeywordUncheckedCreateNestedManyWithoutAutomationInput
  }

  export type AutomationCreateOrConnectWithoutDmsInput = {
    where: AutomationWhereUniqueInput
    create: XOR<AutomationCreateWithoutDmsInput, AutomationUncheckedCreateWithoutDmsInput>
  }

  export type AutomationUpsertWithoutDmsInput = {
    update: XOR<AutomationUpdateWithoutDmsInput, AutomationUncheckedUpdateWithoutDmsInput>
    create: XOR<AutomationCreateWithoutDmsInput, AutomationUncheckedCreateWithoutDmsInput>
    where?: AutomationWhereInput
  }

  export type AutomationUpdateToOneWithWhereWithoutDmsInput = {
    where?: AutomationWhereInput
    data: XOR<AutomationUpdateWithoutDmsInput, AutomationUncheckedUpdateWithoutDmsInput>
  }

  export type AutomationUpdateWithoutDmsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneWithoutAutomationsNestedInput
    trigger?: TriggerUpdateManyWithoutAutomationNestedInput
    listener?: ListenerUpdateOneWithoutAutomationNestedInput
    posts?: PostUpdateManyWithoutAutomationNestedInput
    keywords?: KeywordUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationUncheckedUpdateWithoutDmsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: TriggerUncheckedUpdateManyWithoutAutomationNestedInput
    listener?: ListenerUncheckedUpdateOneWithoutAutomationNestedInput
    posts?: PostUncheckedUpdateManyWithoutAutomationNestedInput
    keywords?: KeywordUncheckedUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationCreateWithoutKeywordsInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    User?: UserCreateNestedOneWithoutAutomationsInput
    trigger?: TriggerCreateNestedManyWithoutAutomationInput
    listener?: ListenerCreateNestedOneWithoutAutomationInput
    posts?: PostCreateNestedManyWithoutAutomationInput
    dms?: DmsCreateNestedManyWithoutAutomationInput
  }

  export type AutomationUncheckedCreateWithoutKeywordsInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
    userId?: string | null
    trigger?: TriggerUncheckedCreateNestedManyWithoutAutomationInput
    listener?: ListenerUncheckedCreateNestedOneWithoutAutomationInput
    posts?: PostUncheckedCreateNestedManyWithoutAutomationInput
    dms?: DmsUncheckedCreateNestedManyWithoutAutomationInput
  }

  export type AutomationCreateOrConnectWithoutKeywordsInput = {
    where: AutomationWhereUniqueInput
    create: XOR<AutomationCreateWithoutKeywordsInput, AutomationUncheckedCreateWithoutKeywordsInput>
  }

  export type AutomationUpsertWithoutKeywordsInput = {
    update: XOR<AutomationUpdateWithoutKeywordsInput, AutomationUncheckedUpdateWithoutKeywordsInput>
    create: XOR<AutomationCreateWithoutKeywordsInput, AutomationUncheckedCreateWithoutKeywordsInput>
    where?: AutomationWhereInput
  }

  export type AutomationUpdateToOneWithWhereWithoutKeywordsInput = {
    where?: AutomationWhereInput
    data: XOR<AutomationUpdateWithoutKeywordsInput, AutomationUncheckedUpdateWithoutKeywordsInput>
  }

  export type AutomationUpdateWithoutKeywordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneWithoutAutomationsNestedInput
    trigger?: TriggerUpdateManyWithoutAutomationNestedInput
    listener?: ListenerUpdateOneWithoutAutomationNestedInput
    posts?: PostUpdateManyWithoutAutomationNestedInput
    dms?: DmsUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationUncheckedUpdateWithoutKeywordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    trigger?: TriggerUncheckedUpdateManyWithoutAutomationNestedInput
    listener?: ListenerUncheckedUpdateOneWithoutAutomationNestedInput
    posts?: PostUncheckedUpdateManyWithoutAutomationNestedInput
    dms?: DmsUncheckedUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationCreateManyUserInput = {
    id?: string
    name?: string
    createdAt?: Date | string
    active?: boolean
  }

  export type IntegrationsCreateManyUserInput = {
    id?: string
    name?: $Enums.INTERGRATION
    createdAt?: Date | string
    token: string
    expireAt?: Date | string | null
    instagramId?: string | null
  }

  export type AutomationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    trigger?: TriggerUpdateManyWithoutAutomationNestedInput
    listener?: ListenerUpdateOneWithoutAutomationNestedInput
    posts?: PostUpdateManyWithoutAutomationNestedInput
    dms?: DmsUpdateManyWithoutAutomationNestedInput
    keywords?: KeywordUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    trigger?: TriggerUncheckedUpdateManyWithoutAutomationNestedInput
    listener?: ListenerUncheckedUpdateOneWithoutAutomationNestedInput
    posts?: PostUncheckedUpdateManyWithoutAutomationNestedInput
    dms?: DmsUncheckedUpdateManyWithoutAutomationNestedInput
    keywords?: KeywordUncheckedUpdateManyWithoutAutomationNestedInput
  }

  export type AutomationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntegrationsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumINTERGRATIONFieldUpdateOperationsInput | $Enums.INTERGRATION
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instagramId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntegrationsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumINTERGRATIONFieldUpdateOperationsInput | $Enums.INTERGRATION
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instagramId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntegrationsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: EnumINTERGRATIONFieldUpdateOperationsInput | $Enums.INTERGRATION
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    token?: StringFieldUpdateOperationsInput | string
    expireAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    instagramId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TriggerCreateManyAutomationInput = {
    id?: string
    type: string
  }

  export type PostCreateManyAutomationInput = {
    id?: string
    postid: string
    caption?: string | null
    media: string
    mediaType?: $Enums.MEDIA_TYPE
  }

  export type DmsCreateManyAutomationInput = {
    id?: string
    createdAt?: Date | string
    senderId?: string | null
    receiverId?: string | null
    message?: string | null
  }

  export type KeywordCreateManyAutomationInput = {
    id?: string
    word: string
  }

  export type TriggerUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerUncheckedUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type TriggerUncheckedUpdateManyWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PostUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    postid?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    media?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMEDIA_TYPEFieldUpdateOperationsInput | $Enums.MEDIA_TYPE
  }

  export type PostUncheckedUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    postid?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    media?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMEDIA_TYPEFieldUpdateOperationsInput | $Enums.MEDIA_TYPE
  }

  export type PostUncheckedUpdateManyWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    postid?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    media?: StringFieldUpdateOperationsInput | string
    mediaType?: EnumMEDIA_TYPEFieldUpdateOperationsInput | $Enums.MEDIA_TYPE
  }

  export type DmsUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DmsUncheckedUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DmsUncheckedUpdateManyWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    senderId?: NullableStringFieldUpdateOperationsInput | string | null
    receiverId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KeywordUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
  }

  export type KeywordUncheckedUpdateWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
  }

  export type KeywordUncheckedUpdateManyWithoutAutomationInput = {
    id?: StringFieldUpdateOperationsInput | string
    word?: StringFieldUpdateOperationsInput | string
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