
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
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Landlord
 * 
 */
export type Landlord = $Result.DefaultSelection<Prisma.$LandlordPayload>
/**
 * Model Property
 * 
 */
export type Property = $Result.DefaultSelection<Prisma.$PropertyPayload>
/**
 * Model PropertyImage
 * 
 */
export type PropertyImage = $Result.DefaultSelection<Prisma.$PropertyImagePayload>
/**
 * Model Amenity
 * 
 */
export type Amenity = $Result.DefaultSelection<Prisma.$AmenityPayload>
/**
 * Model PropertyAmenity
 * 
 */
export type PropertyAmenity = $Result.DefaultSelection<Prisma.$PropertyAmenityPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PropertyType: {
  APARTMENT: 'APARTMENT',
  HOUSE: 'HOUSE',
  ROOM: 'ROOM'
};

export type PropertyType = (typeof PropertyType)[keyof typeof PropertyType]

}

export type PropertyType = $Enums.PropertyType

export const PropertyType: typeof $Enums.PropertyType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Students
 * const students = await prisma.student.findMany()
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
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
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
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.landlord`: Exposes CRUD operations for the **Landlord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Landlords
    * const landlords = await prisma.landlord.findMany()
    * ```
    */
  get landlord(): Prisma.LandlordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.property`: Exposes CRUD operations for the **Property** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.property.findMany()
    * ```
    */
  get property(): Prisma.PropertyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertyImage`: Exposes CRUD operations for the **PropertyImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyImages
    * const propertyImages = await prisma.propertyImage.findMany()
    * ```
    */
  get propertyImage(): Prisma.PropertyImageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.amenity`: Exposes CRUD operations for the **Amenity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Amenities
    * const amenities = await prisma.amenity.findMany()
    * ```
    */
  get amenity(): Prisma.AmenityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.propertyAmenity`: Exposes CRUD operations for the **PropertyAmenity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PropertyAmenities
    * const propertyAmenities = await prisma.propertyAmenity.findMany()
    * ```
    */
  get propertyAmenity(): Prisma.PropertyAmenityDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
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
    Student: 'Student',
    Landlord: 'Landlord',
    Property: 'Property',
    PropertyImage: 'PropertyImage',
    Amenity: 'Amenity',
    PropertyAmenity: 'PropertyAmenity'
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
      modelProps: "student" | "landlord" | "property" | "propertyImage" | "amenity" | "propertyAmenity"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Landlord: {
        payload: Prisma.$LandlordPayload<ExtArgs>
        fields: Prisma.LandlordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LandlordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandlordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LandlordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandlordPayload>
          }
          findFirst: {
            args: Prisma.LandlordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandlordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LandlordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandlordPayload>
          }
          findMany: {
            args: Prisma.LandlordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandlordPayload>[]
          }
          create: {
            args: Prisma.LandlordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandlordPayload>
          }
          createMany: {
            args: Prisma.LandlordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LandlordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandlordPayload>
          }
          update: {
            args: Prisma.LandlordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandlordPayload>
          }
          deleteMany: {
            args: Prisma.LandlordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LandlordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LandlordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandlordPayload>
          }
          aggregate: {
            args: Prisma.LandlordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLandlord>
          }
          groupBy: {
            args: Prisma.LandlordGroupByArgs<ExtArgs>
            result: $Utils.Optional<LandlordGroupByOutputType>[]
          }
          count: {
            args: Prisma.LandlordCountArgs<ExtArgs>
            result: $Utils.Optional<LandlordCountAggregateOutputType> | number
          }
        }
      }
      Property: {
        payload: Prisma.$PropertyPayload<ExtArgs>
        fields: Prisma.PropertyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findFirst: {
            args: Prisma.PropertyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          findMany: {
            args: Prisma.PropertyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>[]
          }
          create: {
            args: Prisma.PropertyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          createMany: {
            args: Prisma.PropertyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PropertyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          update: {
            args: Prisma.PropertyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          deleteMany: {
            args: Prisma.PropertyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyPayload>
          }
          aggregate: {
            args: Prisma.PropertyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty>
          }
          groupBy: {
            args: Prisma.PropertyGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyCountAggregateOutputType> | number
          }
        }
      }
      PropertyImage: {
        payload: Prisma.$PropertyImagePayload<ExtArgs>
        fields: Prisma.PropertyImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          findFirst: {
            args: Prisma.PropertyImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          findMany: {
            args: Prisma.PropertyImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>[]
          }
          create: {
            args: Prisma.PropertyImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          createMany: {
            args: Prisma.PropertyImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PropertyImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          update: {
            args: Prisma.PropertyImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          deleteMany: {
            args: Prisma.PropertyImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyImagePayload>
          }
          aggregate: {
            args: Prisma.PropertyImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyImage>
          }
          groupBy: {
            args: Prisma.PropertyImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyImageCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyImageCountAggregateOutputType> | number
          }
        }
      }
      Amenity: {
        payload: Prisma.$AmenityPayload<ExtArgs>
        fields: Prisma.AmenityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AmenityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AmenityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          findFirst: {
            args: Prisma.AmenityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AmenityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          findMany: {
            args: Prisma.AmenityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>[]
          }
          create: {
            args: Prisma.AmenityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          createMany: {
            args: Prisma.AmenityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AmenityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          update: {
            args: Prisma.AmenityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          deleteMany: {
            args: Prisma.AmenityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AmenityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AmenityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AmenityPayload>
          }
          aggregate: {
            args: Prisma.AmenityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAmenity>
          }
          groupBy: {
            args: Prisma.AmenityGroupByArgs<ExtArgs>
            result: $Utils.Optional<AmenityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AmenityCountArgs<ExtArgs>
            result: $Utils.Optional<AmenityCountAggregateOutputType> | number
          }
        }
      }
      PropertyAmenity: {
        payload: Prisma.$PropertyAmenityPayload<ExtArgs>
        fields: Prisma.PropertyAmenityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertyAmenityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertyAmenityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenityPayload>
          }
          findFirst: {
            args: Prisma.PropertyAmenityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertyAmenityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenityPayload>
          }
          findMany: {
            args: Prisma.PropertyAmenityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenityPayload>[]
          }
          create: {
            args: Prisma.PropertyAmenityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenityPayload>
          }
          createMany: {
            args: Prisma.PropertyAmenityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PropertyAmenityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenityPayload>
          }
          update: {
            args: Prisma.PropertyAmenityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenityPayload>
          }
          deleteMany: {
            args: Prisma.PropertyAmenityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertyAmenityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PropertyAmenityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertyAmenityPayload>
          }
          aggregate: {
            args: Prisma.PropertyAmenityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePropertyAmenity>
          }
          groupBy: {
            args: Prisma.PropertyAmenityGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertyAmenityGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertyAmenityCountArgs<ExtArgs>
            result: $Utils.Optional<PropertyAmenityCountAggregateOutputType> | number
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
    student?: StudentOmit
    landlord?: LandlordOmit
    property?: PropertyOmit
    propertyImage?: PropertyImageOmit
    amenity?: AmenityOmit
    propertyAmenity?: PropertyAmenityOmit
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
   * Count Type LandlordCountOutputType
   */

  export type LandlordCountOutputType = {
    properties: number
  }

  export type LandlordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | LandlordCountOutputTypeCountPropertiesArgs
  }

  // Custom InputTypes
  /**
   * LandlordCountOutputType without action
   */
  export type LandlordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LandlordCountOutputType
     */
    select?: LandlordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LandlordCountOutputType without action
   */
  export type LandlordCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
  }


  /**
   * Count Type PropertyCountOutputType
   */

  export type PropertyCountOutputType = {
    propertyImages: number
    propertyAmenities: number
  }

  export type PropertyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propertyImages?: boolean | PropertyCountOutputTypeCountPropertyImagesArgs
    propertyAmenities?: boolean | PropertyCountOutputTypeCountPropertyAmenitiesArgs
  }

  // Custom InputTypes
  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyCountOutputType
     */
    select?: PropertyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountPropertyImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyImageWhereInput
  }

  /**
   * PropertyCountOutputType without action
   */
  export type PropertyCountOutputTypeCountPropertyAmenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyAmenityWhereInput
  }


  /**
   * Count Type AmenityCountOutputType
   */

  export type AmenityCountOutputType = {
    propertyAmenities: number
  }

  export type AmenityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propertyAmenities?: boolean | AmenityCountOutputTypeCountPropertyAmenitiesArgs
  }

  // Custom InputTypes
  /**
   * AmenityCountOutputType without action
   */
  export type AmenityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmenityCountOutputType
     */
    select?: AmenityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AmenityCountOutputType without action
   */
  export type AmenityCountOutputTypeCountPropertyAmenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyAmenityWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    id: number | null
  }

  export type StudentSumAggregateOutputType = {
    id: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: number | null
    studentRut: string | null
    studentEmail: string | null
    studentName: string | null
    password: string | null
    studentCollege: string | null
    studentCertificateUrl: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentMaxAggregateOutputType = {
    id: number | null
    studentRut: string | null
    studentEmail: string | null
    studentName: string | null
    password: string | null
    studentCollege: string | null
    studentCertificateUrl: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    studentRut: number
    studentEmail: number
    studentName: number
    password: number
    studentCollege: number
    studentCertificateUrl: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    id?: true
  }

  export type StudentSumAggregateInputType = {
    id?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    studentRut?: true
    studentEmail?: true
    studentName?: true
    password?: true
    studentCollege?: true
    studentCertificateUrl?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    studentRut?: true
    studentEmail?: true
    studentName?: true
    password?: true
    studentCollege?: true
    studentCertificateUrl?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    studentRut?: true
    studentEmail?: true
    studentName?: true
    password?: true
    studentCollege?: true
    studentCertificateUrl?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: number
    studentRut: string
    studentEmail: string
    studentName: string
    password: string
    studentCollege: string
    studentCertificateUrl: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentRut?: boolean
    studentEmail?: boolean
    studentName?: boolean
    password?: boolean
    studentCollege?: boolean
    studentCertificateUrl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["student"]>



  export type StudentSelectScalar = {
    id?: boolean
    studentRut?: boolean
    studentEmail?: boolean
    studentName?: boolean
    password?: boolean
    studentCollege?: boolean
    studentCertificateUrl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type StudentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentRut" | "studentEmail" | "studentName" | "password" | "studentCollege" | "studentCertificateUrl" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["student"]>

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      studentRut: string
      studentEmail: string
      studentName: string
      password: string
      studentCollege: string
      studentCertificateUrl: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Student model
   */
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'Int'>
    readonly studentRut: FieldRef<"Student", 'String'>
    readonly studentEmail: FieldRef<"Student", 'String'>
    readonly studentName: FieldRef<"Student", 'String'>
    readonly password: FieldRef<"Student", 'String'>
    readonly studentCollege: FieldRef<"Student", 'String'>
    readonly studentCertificateUrl: FieldRef<"Student", 'String'>
    readonly role: FieldRef<"Student", 'String'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Student
     */
    omit?: StudentOmit<ExtArgs> | null
  }


  /**
   * Model Landlord
   */

  export type AggregateLandlord = {
    _count: LandlordCountAggregateOutputType | null
    _avg: LandlordAvgAggregateOutputType | null
    _sum: LandlordSumAggregateOutputType | null
    _min: LandlordMinAggregateOutputType | null
    _max: LandlordMaxAggregateOutputType | null
  }

  export type LandlordAvgAggregateOutputType = {
    id: number | null
  }

  export type LandlordSumAggregateOutputType = {
    id: number | null
  }

  export type LandlordMinAggregateOutputType = {
    id: number | null
    landlordRut: string | null
    landlordEmail: string | null
    landlordName: string | null
    password: string | null
    landlordCarnetUrl: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LandlordMaxAggregateOutputType = {
    id: number | null
    landlordRut: string | null
    landlordEmail: string | null
    landlordName: string | null
    password: string | null
    landlordCarnetUrl: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LandlordCountAggregateOutputType = {
    id: number
    landlordRut: number
    landlordEmail: number
    landlordName: number
    password: number
    landlordCarnetUrl: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LandlordAvgAggregateInputType = {
    id?: true
  }

  export type LandlordSumAggregateInputType = {
    id?: true
  }

  export type LandlordMinAggregateInputType = {
    id?: true
    landlordRut?: true
    landlordEmail?: true
    landlordName?: true
    password?: true
    landlordCarnetUrl?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LandlordMaxAggregateInputType = {
    id?: true
    landlordRut?: true
    landlordEmail?: true
    landlordName?: true
    password?: true
    landlordCarnetUrl?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LandlordCountAggregateInputType = {
    id?: true
    landlordRut?: true
    landlordEmail?: true
    landlordName?: true
    password?: true
    landlordCarnetUrl?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LandlordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Landlord to aggregate.
     */
    where?: LandlordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Landlords to fetch.
     */
    orderBy?: LandlordOrderByWithRelationInput | LandlordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LandlordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Landlords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Landlords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Landlords
    **/
    _count?: true | LandlordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LandlordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LandlordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LandlordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LandlordMaxAggregateInputType
  }

  export type GetLandlordAggregateType<T extends LandlordAggregateArgs> = {
        [P in keyof T & keyof AggregateLandlord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLandlord[P]>
      : GetScalarType<T[P], AggregateLandlord[P]>
  }




  export type LandlordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LandlordWhereInput
    orderBy?: LandlordOrderByWithAggregationInput | LandlordOrderByWithAggregationInput[]
    by: LandlordScalarFieldEnum[] | LandlordScalarFieldEnum
    having?: LandlordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LandlordCountAggregateInputType | true
    _avg?: LandlordAvgAggregateInputType
    _sum?: LandlordSumAggregateInputType
    _min?: LandlordMinAggregateInputType
    _max?: LandlordMaxAggregateInputType
  }

  export type LandlordGroupByOutputType = {
    id: number
    landlordRut: string
    landlordEmail: string
    landlordName: string
    password: string
    landlordCarnetUrl: string
    role: string
    createdAt: Date
    updatedAt: Date
    _count: LandlordCountAggregateOutputType | null
    _avg: LandlordAvgAggregateOutputType | null
    _sum: LandlordSumAggregateOutputType | null
    _min: LandlordMinAggregateOutputType | null
    _max: LandlordMaxAggregateOutputType | null
  }

  type GetLandlordGroupByPayload<T extends LandlordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LandlordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LandlordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LandlordGroupByOutputType[P]>
            : GetScalarType<T[P], LandlordGroupByOutputType[P]>
        }
      >
    >


  export type LandlordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    landlordRut?: boolean
    landlordEmail?: boolean
    landlordName?: boolean
    password?: boolean
    landlordCarnetUrl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    properties?: boolean | Landlord$propertiesArgs<ExtArgs>
    _count?: boolean | LandlordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["landlord"]>



  export type LandlordSelectScalar = {
    id?: boolean
    landlordRut?: boolean
    landlordEmail?: boolean
    landlordName?: boolean
    password?: boolean
    landlordCarnetUrl?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LandlordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "landlordRut" | "landlordEmail" | "landlordName" | "password" | "landlordCarnetUrl" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["landlord"]>
  export type LandlordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | Landlord$propertiesArgs<ExtArgs>
    _count?: boolean | LandlordCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LandlordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Landlord"
    objects: {
      properties: Prisma.$PropertyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      landlordRut: string
      landlordEmail: string
      landlordName: string
      password: string
      landlordCarnetUrl: string
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["landlord"]>
    composites: {}
  }

  type LandlordGetPayload<S extends boolean | null | undefined | LandlordDefaultArgs> = $Result.GetResult<Prisma.$LandlordPayload, S>

  type LandlordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LandlordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LandlordCountAggregateInputType | true
    }

  export interface LandlordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Landlord'], meta: { name: 'Landlord' } }
    /**
     * Find zero or one Landlord that matches the filter.
     * @param {LandlordFindUniqueArgs} args - Arguments to find a Landlord
     * @example
     * // Get one Landlord
     * const landlord = await prisma.landlord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LandlordFindUniqueArgs>(args: SelectSubset<T, LandlordFindUniqueArgs<ExtArgs>>): Prisma__LandlordClient<$Result.GetResult<Prisma.$LandlordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Landlord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LandlordFindUniqueOrThrowArgs} args - Arguments to find a Landlord
     * @example
     * // Get one Landlord
     * const landlord = await prisma.landlord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LandlordFindUniqueOrThrowArgs>(args: SelectSubset<T, LandlordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LandlordClient<$Result.GetResult<Prisma.$LandlordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Landlord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandlordFindFirstArgs} args - Arguments to find a Landlord
     * @example
     * // Get one Landlord
     * const landlord = await prisma.landlord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LandlordFindFirstArgs>(args?: SelectSubset<T, LandlordFindFirstArgs<ExtArgs>>): Prisma__LandlordClient<$Result.GetResult<Prisma.$LandlordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Landlord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandlordFindFirstOrThrowArgs} args - Arguments to find a Landlord
     * @example
     * // Get one Landlord
     * const landlord = await prisma.landlord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LandlordFindFirstOrThrowArgs>(args?: SelectSubset<T, LandlordFindFirstOrThrowArgs<ExtArgs>>): Prisma__LandlordClient<$Result.GetResult<Prisma.$LandlordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Landlords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandlordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Landlords
     * const landlords = await prisma.landlord.findMany()
     * 
     * // Get first 10 Landlords
     * const landlords = await prisma.landlord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const landlordWithIdOnly = await prisma.landlord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LandlordFindManyArgs>(args?: SelectSubset<T, LandlordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandlordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Landlord.
     * @param {LandlordCreateArgs} args - Arguments to create a Landlord.
     * @example
     * // Create one Landlord
     * const Landlord = await prisma.landlord.create({
     *   data: {
     *     // ... data to create a Landlord
     *   }
     * })
     * 
     */
    create<T extends LandlordCreateArgs>(args: SelectSubset<T, LandlordCreateArgs<ExtArgs>>): Prisma__LandlordClient<$Result.GetResult<Prisma.$LandlordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Landlords.
     * @param {LandlordCreateManyArgs} args - Arguments to create many Landlords.
     * @example
     * // Create many Landlords
     * const landlord = await prisma.landlord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LandlordCreateManyArgs>(args?: SelectSubset<T, LandlordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Landlord.
     * @param {LandlordDeleteArgs} args - Arguments to delete one Landlord.
     * @example
     * // Delete one Landlord
     * const Landlord = await prisma.landlord.delete({
     *   where: {
     *     // ... filter to delete one Landlord
     *   }
     * })
     * 
     */
    delete<T extends LandlordDeleteArgs>(args: SelectSubset<T, LandlordDeleteArgs<ExtArgs>>): Prisma__LandlordClient<$Result.GetResult<Prisma.$LandlordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Landlord.
     * @param {LandlordUpdateArgs} args - Arguments to update one Landlord.
     * @example
     * // Update one Landlord
     * const landlord = await prisma.landlord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LandlordUpdateArgs>(args: SelectSubset<T, LandlordUpdateArgs<ExtArgs>>): Prisma__LandlordClient<$Result.GetResult<Prisma.$LandlordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Landlords.
     * @param {LandlordDeleteManyArgs} args - Arguments to filter Landlords to delete.
     * @example
     * // Delete a few Landlords
     * const { count } = await prisma.landlord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LandlordDeleteManyArgs>(args?: SelectSubset<T, LandlordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Landlords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandlordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Landlords
     * const landlord = await prisma.landlord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LandlordUpdateManyArgs>(args: SelectSubset<T, LandlordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Landlord.
     * @param {LandlordUpsertArgs} args - Arguments to update or create a Landlord.
     * @example
     * // Update or create a Landlord
     * const landlord = await prisma.landlord.upsert({
     *   create: {
     *     // ... data to create a Landlord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Landlord we want to update
     *   }
     * })
     */
    upsert<T extends LandlordUpsertArgs>(args: SelectSubset<T, LandlordUpsertArgs<ExtArgs>>): Prisma__LandlordClient<$Result.GetResult<Prisma.$LandlordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Landlords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandlordCountArgs} args - Arguments to filter Landlords to count.
     * @example
     * // Count the number of Landlords
     * const count = await prisma.landlord.count({
     *   where: {
     *     // ... the filter for the Landlords we want to count
     *   }
     * })
    **/
    count<T extends LandlordCountArgs>(
      args?: Subset<T, LandlordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LandlordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Landlord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandlordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LandlordAggregateArgs>(args: Subset<T, LandlordAggregateArgs>): Prisma.PrismaPromise<GetLandlordAggregateType<T>>

    /**
     * Group by Landlord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandlordGroupByArgs} args - Group by arguments.
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
      T extends LandlordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LandlordGroupByArgs['orderBy'] }
        : { orderBy?: LandlordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LandlordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLandlordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Landlord model
   */
  readonly fields: LandlordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Landlord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LandlordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    properties<T extends Landlord$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, Landlord$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Landlord model
   */
  interface LandlordFieldRefs {
    readonly id: FieldRef<"Landlord", 'Int'>
    readonly landlordRut: FieldRef<"Landlord", 'String'>
    readonly landlordEmail: FieldRef<"Landlord", 'String'>
    readonly landlordName: FieldRef<"Landlord", 'String'>
    readonly password: FieldRef<"Landlord", 'String'>
    readonly landlordCarnetUrl: FieldRef<"Landlord", 'String'>
    readonly role: FieldRef<"Landlord", 'String'>
    readonly createdAt: FieldRef<"Landlord", 'DateTime'>
    readonly updatedAt: FieldRef<"Landlord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Landlord findUnique
   */
  export type LandlordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landlord
     */
    select?: LandlordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landlord
     */
    omit?: LandlordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandlordInclude<ExtArgs> | null
    /**
     * Filter, which Landlord to fetch.
     */
    where: LandlordWhereUniqueInput
  }

  /**
   * Landlord findUniqueOrThrow
   */
  export type LandlordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landlord
     */
    select?: LandlordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landlord
     */
    omit?: LandlordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandlordInclude<ExtArgs> | null
    /**
     * Filter, which Landlord to fetch.
     */
    where: LandlordWhereUniqueInput
  }

  /**
   * Landlord findFirst
   */
  export type LandlordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landlord
     */
    select?: LandlordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landlord
     */
    omit?: LandlordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandlordInclude<ExtArgs> | null
    /**
     * Filter, which Landlord to fetch.
     */
    where?: LandlordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Landlords to fetch.
     */
    orderBy?: LandlordOrderByWithRelationInput | LandlordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Landlords.
     */
    cursor?: LandlordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Landlords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Landlords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Landlords.
     */
    distinct?: LandlordScalarFieldEnum | LandlordScalarFieldEnum[]
  }

  /**
   * Landlord findFirstOrThrow
   */
  export type LandlordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landlord
     */
    select?: LandlordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landlord
     */
    omit?: LandlordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandlordInclude<ExtArgs> | null
    /**
     * Filter, which Landlord to fetch.
     */
    where?: LandlordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Landlords to fetch.
     */
    orderBy?: LandlordOrderByWithRelationInput | LandlordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Landlords.
     */
    cursor?: LandlordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Landlords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Landlords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Landlords.
     */
    distinct?: LandlordScalarFieldEnum | LandlordScalarFieldEnum[]
  }

  /**
   * Landlord findMany
   */
  export type LandlordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landlord
     */
    select?: LandlordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landlord
     */
    omit?: LandlordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandlordInclude<ExtArgs> | null
    /**
     * Filter, which Landlords to fetch.
     */
    where?: LandlordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Landlords to fetch.
     */
    orderBy?: LandlordOrderByWithRelationInput | LandlordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Landlords.
     */
    cursor?: LandlordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Landlords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Landlords.
     */
    skip?: number
    distinct?: LandlordScalarFieldEnum | LandlordScalarFieldEnum[]
  }

  /**
   * Landlord create
   */
  export type LandlordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landlord
     */
    select?: LandlordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landlord
     */
    omit?: LandlordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandlordInclude<ExtArgs> | null
    /**
     * The data needed to create a Landlord.
     */
    data: XOR<LandlordCreateInput, LandlordUncheckedCreateInput>
  }

  /**
   * Landlord createMany
   */
  export type LandlordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Landlords.
     */
    data: LandlordCreateManyInput | LandlordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Landlord update
   */
  export type LandlordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landlord
     */
    select?: LandlordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landlord
     */
    omit?: LandlordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandlordInclude<ExtArgs> | null
    /**
     * The data needed to update a Landlord.
     */
    data: XOR<LandlordUpdateInput, LandlordUncheckedUpdateInput>
    /**
     * Choose, which Landlord to update.
     */
    where: LandlordWhereUniqueInput
  }

  /**
   * Landlord updateMany
   */
  export type LandlordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Landlords.
     */
    data: XOR<LandlordUpdateManyMutationInput, LandlordUncheckedUpdateManyInput>
    /**
     * Filter which Landlords to update
     */
    where?: LandlordWhereInput
    /**
     * Limit how many Landlords to update.
     */
    limit?: number
  }

  /**
   * Landlord upsert
   */
  export type LandlordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landlord
     */
    select?: LandlordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landlord
     */
    omit?: LandlordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandlordInclude<ExtArgs> | null
    /**
     * The filter to search for the Landlord to update in case it exists.
     */
    where: LandlordWhereUniqueInput
    /**
     * In case the Landlord found by the `where` argument doesn't exist, create a new Landlord with this data.
     */
    create: XOR<LandlordCreateInput, LandlordUncheckedCreateInput>
    /**
     * In case the Landlord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LandlordUpdateInput, LandlordUncheckedUpdateInput>
  }

  /**
   * Landlord delete
   */
  export type LandlordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landlord
     */
    select?: LandlordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landlord
     */
    omit?: LandlordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandlordInclude<ExtArgs> | null
    /**
     * Filter which Landlord to delete.
     */
    where: LandlordWhereUniqueInput
  }

  /**
   * Landlord deleteMany
   */
  export type LandlordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Landlords to delete
     */
    where?: LandlordWhereInput
    /**
     * Limit how many Landlords to delete.
     */
    limit?: number
  }

  /**
   * Landlord.properties
   */
  export type Landlord$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    cursor?: PropertyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Landlord without action
   */
  export type LandlordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landlord
     */
    select?: LandlordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landlord
     */
    omit?: LandlordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LandlordInclude<ExtArgs> | null
  }


  /**
   * Model Property
   */

  export type AggregateProperty = {
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  export type PropertyAvgAggregateOutputType = {
    id: number | null
    landlordId: number | null
    bedrooms: number | null
    bathrooms: number | null
    squareMeters: number | null
    monthlyRent: Decimal | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type PropertySumAggregateOutputType = {
    id: number | null
    landlordId: number | null
    bedrooms: number | null
    bathrooms: number | null
    squareMeters: number | null
    monthlyRent: Decimal | null
    latitude: Decimal | null
    longitude: Decimal | null
  }

  export type PropertyMinAggregateOutputType = {
    id: number | null
    landlordId: number | null
    title: string | null
    description: string | null
    address: string | null
    comuna: string | null
    region: string | null
    zipCode: string | null
    propertyType: $Enums.PropertyType | null
    bedrooms: number | null
    bathrooms: number | null
    squareMeters: number | null
    monthlyRent: Decimal | null
    isAvailable: boolean | null
    utilityBillUrl: string | null
    utilityBillValidated: boolean | null
    rules: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyMaxAggregateOutputType = {
    id: number | null
    landlordId: number | null
    title: string | null
    description: string | null
    address: string | null
    comuna: string | null
    region: string | null
    zipCode: string | null
    propertyType: $Enums.PropertyType | null
    bedrooms: number | null
    bathrooms: number | null
    squareMeters: number | null
    monthlyRent: Decimal | null
    isAvailable: boolean | null
    utilityBillUrl: string | null
    utilityBillValidated: boolean | null
    rules: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyCountAggregateOutputType = {
    id: number
    landlordId: number
    title: number
    description: number
    address: number
    comuna: number
    region: number
    zipCode: number
    propertyType: number
    bedrooms: number
    bathrooms: number
    squareMeters: number
    monthlyRent: number
    isAvailable: number
    utilityBillUrl: number
    utilityBillValidated: number
    rules: number
    latitude: number
    longitude: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyAvgAggregateInputType = {
    id?: true
    landlordId?: true
    bedrooms?: true
    bathrooms?: true
    squareMeters?: true
    monthlyRent?: true
    latitude?: true
    longitude?: true
  }

  export type PropertySumAggregateInputType = {
    id?: true
    landlordId?: true
    bedrooms?: true
    bathrooms?: true
    squareMeters?: true
    monthlyRent?: true
    latitude?: true
    longitude?: true
  }

  export type PropertyMinAggregateInputType = {
    id?: true
    landlordId?: true
    title?: true
    description?: true
    address?: true
    comuna?: true
    region?: true
    zipCode?: true
    propertyType?: true
    bedrooms?: true
    bathrooms?: true
    squareMeters?: true
    monthlyRent?: true
    isAvailable?: true
    utilityBillUrl?: true
    utilityBillValidated?: true
    rules?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyMaxAggregateInputType = {
    id?: true
    landlordId?: true
    title?: true
    description?: true
    address?: true
    comuna?: true
    region?: true
    zipCode?: true
    propertyType?: true
    bedrooms?: true
    bathrooms?: true
    squareMeters?: true
    monthlyRent?: true
    isAvailable?: true
    utilityBillUrl?: true
    utilityBillValidated?: true
    rules?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyCountAggregateInputType = {
    id?: true
    landlordId?: true
    title?: true
    description?: true
    address?: true
    comuna?: true
    region?: true
    zipCode?: true
    propertyType?: true
    bedrooms?: true
    bathrooms?: true
    squareMeters?: true
    monthlyRent?: true
    isAvailable?: true
    utilityBillUrl?: true
    utilityBillValidated?: true
    rules?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property to aggregate.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyMaxAggregateInputType
  }

  export type GetPropertyAggregateType<T extends PropertyAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty[P]>
      : GetScalarType<T[P], AggregateProperty[P]>
  }




  export type PropertyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyWhereInput
    orderBy?: PropertyOrderByWithAggregationInput | PropertyOrderByWithAggregationInput[]
    by: PropertyScalarFieldEnum[] | PropertyScalarFieldEnum
    having?: PropertyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyCountAggregateInputType | true
    _avg?: PropertyAvgAggregateInputType
    _sum?: PropertySumAggregateInputType
    _min?: PropertyMinAggregateInputType
    _max?: PropertyMaxAggregateInputType
  }

  export type PropertyGroupByOutputType = {
    id: number
    landlordId: number
    title: string
    description: string | null
    address: string
    comuna: string
    region: string
    zipCode: string | null
    propertyType: $Enums.PropertyType
    bedrooms: number
    bathrooms: number
    squareMeters: number | null
    monthlyRent: Decimal
    isAvailable: boolean
    utilityBillUrl: string
    utilityBillValidated: boolean
    rules: string | null
    latitude: Decimal | null
    longitude: Decimal | null
    createdAt: Date
    updatedAt: Date
    _count: PropertyCountAggregateOutputType | null
    _avg: PropertyAvgAggregateOutputType | null
    _sum: PropertySumAggregateOutputType | null
    _min: PropertyMinAggregateOutputType | null
    _max: PropertyMaxAggregateOutputType | null
  }

  type GetPropertyGroupByPayload<T extends PropertyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyGroupByOutputType[P]>
        }
      >
    >


  export type PropertySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    landlordId?: boolean
    title?: boolean
    description?: boolean
    address?: boolean
    comuna?: boolean
    region?: boolean
    zipCode?: boolean
    propertyType?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    squareMeters?: boolean
    monthlyRent?: boolean
    isAvailable?: boolean
    utilityBillUrl?: boolean
    utilityBillValidated?: boolean
    rules?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    landlord?: boolean | LandlordDefaultArgs<ExtArgs>
    propertyImages?: boolean | Property$propertyImagesArgs<ExtArgs>
    propertyAmenities?: boolean | Property$propertyAmenitiesArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property"]>



  export type PropertySelectScalar = {
    id?: boolean
    landlordId?: boolean
    title?: boolean
    description?: boolean
    address?: boolean
    comuna?: boolean
    region?: boolean
    zipCode?: boolean
    propertyType?: boolean
    bedrooms?: boolean
    bathrooms?: boolean
    squareMeters?: boolean
    monthlyRent?: boolean
    isAvailable?: boolean
    utilityBillUrl?: boolean
    utilityBillValidated?: boolean
    rules?: boolean
    latitude?: boolean
    longitude?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "landlordId" | "title" | "description" | "address" | "comuna" | "region" | "zipCode" | "propertyType" | "bedrooms" | "bathrooms" | "squareMeters" | "monthlyRent" | "isAvailable" | "utilityBillUrl" | "utilityBillValidated" | "rules" | "latitude" | "longitude" | "createdAt" | "updatedAt", ExtArgs["result"]["property"]>
  export type PropertyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    landlord?: boolean | LandlordDefaultArgs<ExtArgs>
    propertyImages?: boolean | Property$propertyImagesArgs<ExtArgs>
    propertyAmenities?: boolean | Property$propertyAmenitiesArgs<ExtArgs>
    _count?: boolean | PropertyCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PropertyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property"
    objects: {
      landlord: Prisma.$LandlordPayload<ExtArgs>
      propertyImages: Prisma.$PropertyImagePayload<ExtArgs>[]
      propertyAmenities: Prisma.$PropertyAmenityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      landlordId: number
      title: string
      description: string | null
      address: string
      comuna: string
      region: string
      zipCode: string | null
      propertyType: $Enums.PropertyType
      bedrooms: number
      bathrooms: number
      squareMeters: number | null
      monthlyRent: Prisma.Decimal
      isAvailable: boolean
      utilityBillUrl: string
      utilityBillValidated: boolean
      rules: string | null
      latitude: Prisma.Decimal | null
      longitude: Prisma.Decimal | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["property"]>
    composites: {}
  }

  type PropertyGetPayload<S extends boolean | null | undefined | PropertyDefaultArgs> = $Result.GetResult<Prisma.$PropertyPayload, S>

  type PropertyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyCountAggregateInputType | true
    }

  export interface PropertyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property'], meta: { name: 'Property' } }
    /**
     * Find zero or one Property that matches the filter.
     * @param {PropertyFindUniqueArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyFindUniqueArgs>(args: SelectSubset<T, PropertyFindUniqueArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyFindUniqueOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyFindFirstArgs>(args?: SelectSubset<T, PropertyFindFirstArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindFirstOrThrowArgs} args - Arguments to find a Property
     * @example
     * // Get one Property
     * const property = await prisma.property.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.property.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.property.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyWithIdOnly = await prisma.property.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyFindManyArgs>(args?: SelectSubset<T, PropertyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property.
     * @param {PropertyCreateArgs} args - Arguments to create a Property.
     * @example
     * // Create one Property
     * const Property = await prisma.property.create({
     *   data: {
     *     // ... data to create a Property
     *   }
     * })
     * 
     */
    create<T extends PropertyCreateArgs>(args: SelectSubset<T, PropertyCreateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {PropertyCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const property = await prisma.property.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyCreateManyArgs>(args?: SelectSubset<T, PropertyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Property.
     * @param {PropertyDeleteArgs} args - Arguments to delete one Property.
     * @example
     * // Delete one Property
     * const Property = await prisma.property.delete({
     *   where: {
     *     // ... filter to delete one Property
     *   }
     * })
     * 
     */
    delete<T extends PropertyDeleteArgs>(args: SelectSubset<T, PropertyDeleteArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property.
     * @param {PropertyUpdateArgs} args - Arguments to update one Property.
     * @example
     * // Update one Property
     * const property = await prisma.property.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyUpdateArgs>(args: SelectSubset<T, PropertyUpdateArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertyDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.property.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyDeleteManyArgs>(args?: SelectSubset<T, PropertyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const property = await prisma.property.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyUpdateManyArgs>(args: SelectSubset<T, PropertyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Property.
     * @param {PropertyUpsertArgs} args - Arguments to update or create a Property.
     * @example
     * // Update or create a Property
     * const property = await prisma.property.upsert({
     *   create: {
     *     // ... data to create a Property
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property we want to update
     *   }
     * })
     */
    upsert<T extends PropertyUpsertArgs>(args: SelectSubset<T, PropertyUpsertArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.property.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertyCountArgs>(
      args?: Subset<T, PropertyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyAggregateArgs>(args: Subset<T, PropertyAggregateArgs>): Prisma.PrismaPromise<GetPropertyAggregateType<T>>

    /**
     * Group by Property.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyGroupByArgs} args - Group by arguments.
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
      T extends PropertyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyGroupByArgs['orderBy'] }
        : { orderBy?: PropertyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property model
   */
  readonly fields: PropertyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    landlord<T extends LandlordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LandlordDefaultArgs<ExtArgs>>): Prisma__LandlordClient<$Result.GetResult<Prisma.$LandlordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    propertyImages<T extends Property$propertyImagesArgs<ExtArgs> = {}>(args?: Subset<T, Property$propertyImagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    propertyAmenities<T extends Property$propertyAmenitiesArgs<ExtArgs> = {}>(args?: Subset<T, Property$propertyAmenitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyAmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Property model
   */
  interface PropertyFieldRefs {
    readonly id: FieldRef<"Property", 'Int'>
    readonly landlordId: FieldRef<"Property", 'Int'>
    readonly title: FieldRef<"Property", 'String'>
    readonly description: FieldRef<"Property", 'String'>
    readonly address: FieldRef<"Property", 'String'>
    readonly comuna: FieldRef<"Property", 'String'>
    readonly region: FieldRef<"Property", 'String'>
    readonly zipCode: FieldRef<"Property", 'String'>
    readonly propertyType: FieldRef<"Property", 'PropertyType'>
    readonly bedrooms: FieldRef<"Property", 'Int'>
    readonly bathrooms: FieldRef<"Property", 'Int'>
    readonly squareMeters: FieldRef<"Property", 'Float'>
    readonly monthlyRent: FieldRef<"Property", 'Decimal'>
    readonly isAvailable: FieldRef<"Property", 'Boolean'>
    readonly utilityBillUrl: FieldRef<"Property", 'String'>
    readonly utilityBillValidated: FieldRef<"Property", 'Boolean'>
    readonly rules: FieldRef<"Property", 'String'>
    readonly latitude: FieldRef<"Property", 'Decimal'>
    readonly longitude: FieldRef<"Property", 'Decimal'>
    readonly createdAt: FieldRef<"Property", 'DateTime'>
    readonly updatedAt: FieldRef<"Property", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Property findUnique
   */
  export type PropertyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findUniqueOrThrow
   */
  export type PropertyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property findFirst
   */
  export type PropertyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findFirstOrThrow
   */
  export type PropertyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Property to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property findMany
   */
  export type PropertyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertyOrderByWithRelationInput | PropertyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertyScalarFieldEnum | PropertyScalarFieldEnum[]
  }

  /**
   * Property create
   */
  export type PropertyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to create a Property.
     */
    data: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
  }

  /**
   * Property createMany
   */
  export type PropertyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertyCreateManyInput | PropertyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property update
   */
  export type PropertyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The data needed to update a Property.
     */
    data: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
    /**
     * Choose, which Property to update.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property updateMany
   */
  export type PropertyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Property upsert
   */
  export type PropertyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * The filter to search for the Property to update in case it exists.
     */
    where: PropertyWhereUniqueInput
    /**
     * In case the Property found by the `where` argument doesn't exist, create a new Property with this data.
     */
    create: XOR<PropertyCreateInput, PropertyUncheckedCreateInput>
    /**
     * In case the Property was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyUpdateInput, PropertyUncheckedUpdateInput>
  }

  /**
   * Property delete
   */
  export type PropertyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
    /**
     * Filter which Property to delete.
     */
    where: PropertyWhereUniqueInput
  }

  /**
   * Property deleteMany
   */
  export type PropertyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertyWhereInput
    /**
     * Limit how many Properties to delete.
     */
    limit?: number
  }

  /**
   * Property.propertyImages
   */
  export type Property$propertyImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    where?: PropertyImageWhereInput
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    cursor?: PropertyImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * Property.propertyAmenities
   */
  export type Property$propertyAmenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenity
     */
    select?: PropertyAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenity
     */
    omit?: PropertyAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenityInclude<ExtArgs> | null
    where?: PropertyAmenityWhereInput
    orderBy?: PropertyAmenityOrderByWithRelationInput | PropertyAmenityOrderByWithRelationInput[]
    cursor?: PropertyAmenityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyAmenityScalarFieldEnum | PropertyAmenityScalarFieldEnum[]
  }

  /**
   * Property without action
   */
  export type PropertyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property
     */
    select?: PropertySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property
     */
    omit?: PropertyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyInclude<ExtArgs> | null
  }


  /**
   * Model PropertyImage
   */

  export type AggregatePropertyImage = {
    _count: PropertyImageCountAggregateOutputType | null
    _avg: PropertyImageAvgAggregateOutputType | null
    _sum: PropertyImageSumAggregateOutputType | null
    _min: PropertyImageMinAggregateOutputType | null
    _max: PropertyImageMaxAggregateOutputType | null
  }

  export type PropertyImageAvgAggregateOutputType = {
    id: number | null
    propertyId: number | null
    displayOrder: number | null
  }

  export type PropertyImageSumAggregateOutputType = {
    id: number | null
    propertyId: number | null
    displayOrder: number | null
  }

  export type PropertyImageMinAggregateOutputType = {
    id: number | null
    propertyId: number | null
    imageUrl: string | null
    displayOrder: number | null
    altText: string | null
    isPrimary: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyImageMaxAggregateOutputType = {
    id: number | null
    propertyId: number | null
    imageUrl: string | null
    displayOrder: number | null
    altText: string | null
    isPrimary: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PropertyImageCountAggregateOutputType = {
    id: number
    propertyId: number
    imageUrl: number
    displayOrder: number
    altText: number
    isPrimary: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PropertyImageAvgAggregateInputType = {
    id?: true
    propertyId?: true
    displayOrder?: true
  }

  export type PropertyImageSumAggregateInputType = {
    id?: true
    propertyId?: true
    displayOrder?: true
  }

  export type PropertyImageMinAggregateInputType = {
    id?: true
    propertyId?: true
    imageUrl?: true
    displayOrder?: true
    altText?: true
    isPrimary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyImageMaxAggregateInputType = {
    id?: true
    propertyId?: true
    imageUrl?: true
    displayOrder?: true
    altText?: true
    isPrimary?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PropertyImageCountAggregateInputType = {
    id?: true
    propertyId?: true
    imageUrl?: true
    displayOrder?: true
    altText?: true
    isPrimary?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PropertyImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyImage to aggregate.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyImages
    **/
    _count?: true | PropertyImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyImageMaxAggregateInputType
  }

  export type GetPropertyImageAggregateType<T extends PropertyImageAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyImage[P]>
      : GetScalarType<T[P], AggregatePropertyImage[P]>
  }




  export type PropertyImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyImageWhereInput
    orderBy?: PropertyImageOrderByWithAggregationInput | PropertyImageOrderByWithAggregationInput[]
    by: PropertyImageScalarFieldEnum[] | PropertyImageScalarFieldEnum
    having?: PropertyImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyImageCountAggregateInputType | true
    _avg?: PropertyImageAvgAggregateInputType
    _sum?: PropertyImageSumAggregateInputType
    _min?: PropertyImageMinAggregateInputType
    _max?: PropertyImageMaxAggregateInputType
  }

  export type PropertyImageGroupByOutputType = {
    id: number
    propertyId: number
    imageUrl: string
    displayOrder: number
    altText: string | null
    isPrimary: boolean
    createdAt: Date
    updatedAt: Date
    _count: PropertyImageCountAggregateOutputType | null
    _avg: PropertyImageAvgAggregateOutputType | null
    _sum: PropertyImageSumAggregateOutputType | null
    _min: PropertyImageMinAggregateOutputType | null
    _max: PropertyImageMaxAggregateOutputType | null
  }

  type GetPropertyImageGroupByPayload<T extends PropertyImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyImageGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyImageGroupByOutputType[P]>
        }
      >
    >


  export type PropertyImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    imageUrl?: boolean
    displayOrder?: boolean
    altText?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyImage"]>



  export type PropertyImageSelectScalar = {
    id?: boolean
    propertyId?: boolean
    imageUrl?: boolean
    displayOrder?: boolean
    altText?: boolean
    isPrimary?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PropertyImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "imageUrl" | "displayOrder" | "altText" | "isPrimary" | "createdAt" | "updatedAt", ExtArgs["result"]["propertyImage"]>
  export type PropertyImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
  }

  export type $PropertyImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyImage"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      propertyId: number
      imageUrl: string
      displayOrder: number
      altText: string | null
      isPrimary: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["propertyImage"]>
    composites: {}
  }

  type PropertyImageGetPayload<S extends boolean | null | undefined | PropertyImageDefaultArgs> = $Result.GetResult<Prisma.$PropertyImagePayload, S>

  type PropertyImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyImageCountAggregateInputType | true
    }

  export interface PropertyImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyImage'], meta: { name: 'PropertyImage' } }
    /**
     * Find zero or one PropertyImage that matches the filter.
     * @param {PropertyImageFindUniqueArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyImageFindUniqueArgs>(args: SelectSubset<T, PropertyImageFindUniqueArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropertyImage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyImageFindUniqueOrThrowArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyImageFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindFirstArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyImageFindFirstArgs>(args?: SelectSubset<T, PropertyImageFindFirstArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyImage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindFirstOrThrowArgs} args - Arguments to find a PropertyImage
     * @example
     * // Get one PropertyImage
     * const propertyImage = await prisma.propertyImage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyImageFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropertyImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyImages
     * const propertyImages = await prisma.propertyImage.findMany()
     * 
     * // Get first 10 PropertyImages
     * const propertyImages = await prisma.propertyImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyImageWithIdOnly = await prisma.propertyImage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyImageFindManyArgs>(args?: SelectSubset<T, PropertyImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropertyImage.
     * @param {PropertyImageCreateArgs} args - Arguments to create a PropertyImage.
     * @example
     * // Create one PropertyImage
     * const PropertyImage = await prisma.propertyImage.create({
     *   data: {
     *     // ... data to create a PropertyImage
     *   }
     * })
     * 
     */
    create<T extends PropertyImageCreateArgs>(args: SelectSubset<T, PropertyImageCreateArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropertyImages.
     * @param {PropertyImageCreateManyArgs} args - Arguments to create many PropertyImages.
     * @example
     * // Create many PropertyImages
     * const propertyImage = await prisma.propertyImage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyImageCreateManyArgs>(args?: SelectSubset<T, PropertyImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PropertyImage.
     * @param {PropertyImageDeleteArgs} args - Arguments to delete one PropertyImage.
     * @example
     * // Delete one PropertyImage
     * const PropertyImage = await prisma.propertyImage.delete({
     *   where: {
     *     // ... filter to delete one PropertyImage
     *   }
     * })
     * 
     */
    delete<T extends PropertyImageDeleteArgs>(args: SelectSubset<T, PropertyImageDeleteArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropertyImage.
     * @param {PropertyImageUpdateArgs} args - Arguments to update one PropertyImage.
     * @example
     * // Update one PropertyImage
     * const propertyImage = await prisma.propertyImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyImageUpdateArgs>(args: SelectSubset<T, PropertyImageUpdateArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropertyImages.
     * @param {PropertyImageDeleteManyArgs} args - Arguments to filter PropertyImages to delete.
     * @example
     * // Delete a few PropertyImages
     * const { count } = await prisma.propertyImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyImageDeleteManyArgs>(args?: SelectSubset<T, PropertyImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyImages
     * const propertyImage = await prisma.propertyImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyImageUpdateManyArgs>(args: SelectSubset<T, PropertyImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PropertyImage.
     * @param {PropertyImageUpsertArgs} args - Arguments to update or create a PropertyImage.
     * @example
     * // Update or create a PropertyImage
     * const propertyImage = await prisma.propertyImage.upsert({
     *   create: {
     *     // ... data to create a PropertyImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyImage we want to update
     *   }
     * })
     */
    upsert<T extends PropertyImageUpsertArgs>(args: SelectSubset<T, PropertyImageUpsertArgs<ExtArgs>>): Prisma__PropertyImageClient<$Result.GetResult<Prisma.$PropertyImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropertyImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageCountArgs} args - Arguments to filter PropertyImages to count.
     * @example
     * // Count the number of PropertyImages
     * const count = await prisma.propertyImage.count({
     *   where: {
     *     // ... the filter for the PropertyImages we want to count
     *   }
     * })
    **/
    count<T extends PropertyImageCountArgs>(
      args?: Subset<T, PropertyImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyImageAggregateArgs>(args: Subset<T, PropertyImageAggregateArgs>): Prisma.PrismaPromise<GetPropertyImageAggregateType<T>>

    /**
     * Group by PropertyImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyImageGroupByArgs} args - Group by arguments.
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
      T extends PropertyImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyImageGroupByArgs['orderBy'] }
        : { orderBy?: PropertyImageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyImage model
   */
  readonly fields: PropertyImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PropertyImage model
   */
  interface PropertyImageFieldRefs {
    readonly id: FieldRef<"PropertyImage", 'Int'>
    readonly propertyId: FieldRef<"PropertyImage", 'Int'>
    readonly imageUrl: FieldRef<"PropertyImage", 'String'>
    readonly displayOrder: FieldRef<"PropertyImage", 'Int'>
    readonly altText: FieldRef<"PropertyImage", 'String'>
    readonly isPrimary: FieldRef<"PropertyImage", 'Boolean'>
    readonly createdAt: FieldRef<"PropertyImage", 'DateTime'>
    readonly updatedAt: FieldRef<"PropertyImage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropertyImage findUnique
   */
  export type PropertyImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage findUniqueOrThrow
   */
  export type PropertyImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage findFirst
   */
  export type PropertyImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyImages.
     */
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage findFirstOrThrow
   */
  export type PropertyImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImage to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyImages.
     */
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage findMany
   */
  export type PropertyImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter, which PropertyImages to fetch.
     */
    where?: PropertyImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyImages to fetch.
     */
    orderBy?: PropertyImageOrderByWithRelationInput | PropertyImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyImages.
     */
    cursor?: PropertyImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyImages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyImages.
     */
    skip?: number
    distinct?: PropertyImageScalarFieldEnum | PropertyImageScalarFieldEnum[]
  }

  /**
   * PropertyImage create
   */
  export type PropertyImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyImage.
     */
    data: XOR<PropertyImageCreateInput, PropertyImageUncheckedCreateInput>
  }

  /**
   * PropertyImage createMany
   */
  export type PropertyImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyImages.
     */
    data: PropertyImageCreateManyInput | PropertyImageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyImage update
   */
  export type PropertyImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyImage.
     */
    data: XOR<PropertyImageUpdateInput, PropertyImageUncheckedUpdateInput>
    /**
     * Choose, which PropertyImage to update.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage updateMany
   */
  export type PropertyImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyImages.
     */
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyInput>
    /**
     * Filter which PropertyImages to update
     */
    where?: PropertyImageWhereInput
    /**
     * Limit how many PropertyImages to update.
     */
    limit?: number
  }

  /**
   * PropertyImage upsert
   */
  export type PropertyImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyImage to update in case it exists.
     */
    where: PropertyImageWhereUniqueInput
    /**
     * In case the PropertyImage found by the `where` argument doesn't exist, create a new PropertyImage with this data.
     */
    create: XOR<PropertyImageCreateInput, PropertyImageUncheckedCreateInput>
    /**
     * In case the PropertyImage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyImageUpdateInput, PropertyImageUncheckedUpdateInput>
  }

  /**
   * PropertyImage delete
   */
  export type PropertyImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
    /**
     * Filter which PropertyImage to delete.
     */
    where: PropertyImageWhereUniqueInput
  }

  /**
   * PropertyImage deleteMany
   */
  export type PropertyImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyImages to delete
     */
    where?: PropertyImageWhereInput
    /**
     * Limit how many PropertyImages to delete.
     */
    limit?: number
  }

  /**
   * PropertyImage without action
   */
  export type PropertyImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyImage
     */
    select?: PropertyImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyImage
     */
    omit?: PropertyImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyImageInclude<ExtArgs> | null
  }


  /**
   * Model Amenity
   */

  export type AggregateAmenity = {
    _count: AmenityCountAggregateOutputType | null
    _avg: AmenityAvgAggregateOutputType | null
    _sum: AmenitySumAggregateOutputType | null
    _min: AmenityMinAggregateOutputType | null
    _max: AmenityMaxAggregateOutputType | null
  }

  export type AmenityAvgAggregateOutputType = {
    id: number | null
  }

  export type AmenitySumAggregateOutputType = {
    id: number | null
  }

  export type AmenityMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    icon: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AmenityMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    icon: string | null
    category: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AmenityCountAggregateOutputType = {
    id: number
    name: number
    description: number
    icon: number
    category: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AmenityAvgAggregateInputType = {
    id?: true
  }

  export type AmenitySumAggregateInputType = {
    id?: true
  }

  export type AmenityMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AmenityMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    category?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AmenityCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    icon?: true
    category?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AmenityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amenity to aggregate.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Amenities
    **/
    _count?: true | AmenityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AmenityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AmenitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AmenityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AmenityMaxAggregateInputType
  }

  export type GetAmenityAggregateType<T extends AmenityAggregateArgs> = {
        [P in keyof T & keyof AggregateAmenity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAmenity[P]>
      : GetScalarType<T[P], AggregateAmenity[P]>
  }




  export type AmenityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AmenityWhereInput
    orderBy?: AmenityOrderByWithAggregationInput | AmenityOrderByWithAggregationInput[]
    by: AmenityScalarFieldEnum[] | AmenityScalarFieldEnum
    having?: AmenityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AmenityCountAggregateInputType | true
    _avg?: AmenityAvgAggregateInputType
    _sum?: AmenitySumAggregateInputType
    _min?: AmenityMinAggregateInputType
    _max?: AmenityMaxAggregateInputType
  }

  export type AmenityGroupByOutputType = {
    id: number
    name: string
    description: string | null
    icon: string | null
    category: string | null
    createdAt: Date
    updatedAt: Date
    _count: AmenityCountAggregateOutputType | null
    _avg: AmenityAvgAggregateOutputType | null
    _sum: AmenitySumAggregateOutputType | null
    _min: AmenityMinAggregateOutputType | null
    _max: AmenityMaxAggregateOutputType | null
  }

  type GetAmenityGroupByPayload<T extends AmenityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AmenityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AmenityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AmenityGroupByOutputType[P]>
            : GetScalarType<T[P], AmenityGroupByOutputType[P]>
        }
      >
    >


  export type AmenitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    propertyAmenities?: boolean | Amenity$propertyAmenitiesArgs<ExtArgs>
    _count?: boolean | AmenityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["amenity"]>



  export type AmenitySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    icon?: boolean
    category?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AmenityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "icon" | "category" | "createdAt" | "updatedAt", ExtArgs["result"]["amenity"]>
  export type AmenityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    propertyAmenities?: boolean | Amenity$propertyAmenitiesArgs<ExtArgs>
    _count?: boolean | AmenityCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AmenityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Amenity"
    objects: {
      propertyAmenities: Prisma.$PropertyAmenityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      icon: string | null
      category: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["amenity"]>
    composites: {}
  }

  type AmenityGetPayload<S extends boolean | null | undefined | AmenityDefaultArgs> = $Result.GetResult<Prisma.$AmenityPayload, S>

  type AmenityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AmenityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AmenityCountAggregateInputType | true
    }

  export interface AmenityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Amenity'], meta: { name: 'Amenity' } }
    /**
     * Find zero or one Amenity that matches the filter.
     * @param {AmenityFindUniqueArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmenityFindUniqueArgs>(args: SelectSubset<T, AmenityFindUniqueArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Amenity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AmenityFindUniqueOrThrowArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmenityFindUniqueOrThrowArgs>(args: SelectSubset<T, AmenityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amenity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindFirstArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmenityFindFirstArgs>(args?: SelectSubset<T, AmenityFindFirstArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Amenity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindFirstOrThrowArgs} args - Arguments to find a Amenity
     * @example
     * // Get one Amenity
     * const amenity = await prisma.amenity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmenityFindFirstOrThrowArgs>(args?: SelectSubset<T, AmenityFindFirstOrThrowArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Amenities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Amenities
     * const amenities = await prisma.amenity.findMany()
     * 
     * // Get first 10 Amenities
     * const amenities = await prisma.amenity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const amenityWithIdOnly = await prisma.amenity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AmenityFindManyArgs>(args?: SelectSubset<T, AmenityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Amenity.
     * @param {AmenityCreateArgs} args - Arguments to create a Amenity.
     * @example
     * // Create one Amenity
     * const Amenity = await prisma.amenity.create({
     *   data: {
     *     // ... data to create a Amenity
     *   }
     * })
     * 
     */
    create<T extends AmenityCreateArgs>(args: SelectSubset<T, AmenityCreateArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Amenities.
     * @param {AmenityCreateManyArgs} args - Arguments to create many Amenities.
     * @example
     * // Create many Amenities
     * const amenity = await prisma.amenity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AmenityCreateManyArgs>(args?: SelectSubset<T, AmenityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Amenity.
     * @param {AmenityDeleteArgs} args - Arguments to delete one Amenity.
     * @example
     * // Delete one Amenity
     * const Amenity = await prisma.amenity.delete({
     *   where: {
     *     // ... filter to delete one Amenity
     *   }
     * })
     * 
     */
    delete<T extends AmenityDeleteArgs>(args: SelectSubset<T, AmenityDeleteArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Amenity.
     * @param {AmenityUpdateArgs} args - Arguments to update one Amenity.
     * @example
     * // Update one Amenity
     * const amenity = await prisma.amenity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AmenityUpdateArgs>(args: SelectSubset<T, AmenityUpdateArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Amenities.
     * @param {AmenityDeleteManyArgs} args - Arguments to filter Amenities to delete.
     * @example
     * // Delete a few Amenities
     * const { count } = await prisma.amenity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AmenityDeleteManyArgs>(args?: SelectSubset<T, AmenityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Amenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Amenities
     * const amenity = await prisma.amenity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AmenityUpdateManyArgs>(args: SelectSubset<T, AmenityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Amenity.
     * @param {AmenityUpsertArgs} args - Arguments to update or create a Amenity.
     * @example
     * // Update or create a Amenity
     * const amenity = await prisma.amenity.upsert({
     *   create: {
     *     // ... data to create a Amenity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Amenity we want to update
     *   }
     * })
     */
    upsert<T extends AmenityUpsertArgs>(args: SelectSubset<T, AmenityUpsertArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Amenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityCountArgs} args - Arguments to filter Amenities to count.
     * @example
     * // Count the number of Amenities
     * const count = await prisma.amenity.count({
     *   where: {
     *     // ... the filter for the Amenities we want to count
     *   }
     * })
    **/
    count<T extends AmenityCountArgs>(
      args?: Subset<T, AmenityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AmenityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Amenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AmenityAggregateArgs>(args: Subset<T, AmenityAggregateArgs>): Prisma.PrismaPromise<GetAmenityAggregateType<T>>

    /**
     * Group by Amenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmenityGroupByArgs} args - Group by arguments.
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
      T extends AmenityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AmenityGroupByArgs['orderBy'] }
        : { orderBy?: AmenityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AmenityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmenityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Amenity model
   */
  readonly fields: AmenityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Amenity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AmenityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    propertyAmenities<T extends Amenity$propertyAmenitiesArgs<ExtArgs> = {}>(args?: Subset<T, Amenity$propertyAmenitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyAmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Amenity model
   */
  interface AmenityFieldRefs {
    readonly id: FieldRef<"Amenity", 'Int'>
    readonly name: FieldRef<"Amenity", 'String'>
    readonly description: FieldRef<"Amenity", 'String'>
    readonly icon: FieldRef<"Amenity", 'String'>
    readonly category: FieldRef<"Amenity", 'String'>
    readonly createdAt: FieldRef<"Amenity", 'DateTime'>
    readonly updatedAt: FieldRef<"Amenity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Amenity findUnique
   */
  export type AmenityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity findUniqueOrThrow
   */
  export type AmenityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity findFirst
   */
  export type AmenityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amenities.
     */
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity findFirstOrThrow
   */
  export type AmenityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenity to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Amenities.
     */
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity findMany
   */
  export type AmenityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter, which Amenities to fetch.
     */
    where?: AmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Amenities to fetch.
     */
    orderBy?: AmenityOrderByWithRelationInput | AmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Amenities.
     */
    cursor?: AmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Amenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Amenities.
     */
    skip?: number
    distinct?: AmenityScalarFieldEnum | AmenityScalarFieldEnum[]
  }

  /**
   * Amenity create
   */
  export type AmenityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The data needed to create a Amenity.
     */
    data: XOR<AmenityCreateInput, AmenityUncheckedCreateInput>
  }

  /**
   * Amenity createMany
   */
  export type AmenityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Amenities.
     */
    data: AmenityCreateManyInput | AmenityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Amenity update
   */
  export type AmenityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The data needed to update a Amenity.
     */
    data: XOR<AmenityUpdateInput, AmenityUncheckedUpdateInput>
    /**
     * Choose, which Amenity to update.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity updateMany
   */
  export type AmenityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Amenities.
     */
    data: XOR<AmenityUpdateManyMutationInput, AmenityUncheckedUpdateManyInput>
    /**
     * Filter which Amenities to update
     */
    where?: AmenityWhereInput
    /**
     * Limit how many Amenities to update.
     */
    limit?: number
  }

  /**
   * Amenity upsert
   */
  export type AmenityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * The filter to search for the Amenity to update in case it exists.
     */
    where: AmenityWhereUniqueInput
    /**
     * In case the Amenity found by the `where` argument doesn't exist, create a new Amenity with this data.
     */
    create: XOR<AmenityCreateInput, AmenityUncheckedCreateInput>
    /**
     * In case the Amenity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AmenityUpdateInput, AmenityUncheckedUpdateInput>
  }

  /**
   * Amenity delete
   */
  export type AmenityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
    /**
     * Filter which Amenity to delete.
     */
    where: AmenityWhereUniqueInput
  }

  /**
   * Amenity deleteMany
   */
  export type AmenityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Amenities to delete
     */
    where?: AmenityWhereInput
    /**
     * Limit how many Amenities to delete.
     */
    limit?: number
  }

  /**
   * Amenity.propertyAmenities
   */
  export type Amenity$propertyAmenitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenity
     */
    select?: PropertyAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenity
     */
    omit?: PropertyAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenityInclude<ExtArgs> | null
    where?: PropertyAmenityWhereInput
    orderBy?: PropertyAmenityOrderByWithRelationInput | PropertyAmenityOrderByWithRelationInput[]
    cursor?: PropertyAmenityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertyAmenityScalarFieldEnum | PropertyAmenityScalarFieldEnum[]
  }

  /**
   * Amenity without action
   */
  export type AmenityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Amenity
     */
    select?: AmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Amenity
     */
    omit?: AmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AmenityInclude<ExtArgs> | null
  }


  /**
   * Model PropertyAmenity
   */

  export type AggregatePropertyAmenity = {
    _count: PropertyAmenityCountAggregateOutputType | null
    _avg: PropertyAmenityAvgAggregateOutputType | null
    _sum: PropertyAmenitySumAggregateOutputType | null
    _min: PropertyAmenityMinAggregateOutputType | null
    _max: PropertyAmenityMaxAggregateOutputType | null
  }

  export type PropertyAmenityAvgAggregateOutputType = {
    id: number | null
    propertyId: number | null
    amenityId: number | null
  }

  export type PropertyAmenitySumAggregateOutputType = {
    id: number | null
    propertyId: number | null
    amenityId: number | null
  }

  export type PropertyAmenityMinAggregateOutputType = {
    id: number | null
    propertyId: number | null
    amenityId: number | null
    createdAt: Date | null
  }

  export type PropertyAmenityMaxAggregateOutputType = {
    id: number | null
    propertyId: number | null
    amenityId: number | null
    createdAt: Date | null
  }

  export type PropertyAmenityCountAggregateOutputType = {
    id: number
    propertyId: number
    amenityId: number
    createdAt: number
    _all: number
  }


  export type PropertyAmenityAvgAggregateInputType = {
    id?: true
    propertyId?: true
    amenityId?: true
  }

  export type PropertyAmenitySumAggregateInputType = {
    id?: true
    propertyId?: true
    amenityId?: true
  }

  export type PropertyAmenityMinAggregateInputType = {
    id?: true
    propertyId?: true
    amenityId?: true
    createdAt?: true
  }

  export type PropertyAmenityMaxAggregateInputType = {
    id?: true
    propertyId?: true
    amenityId?: true
    createdAt?: true
  }

  export type PropertyAmenityCountAggregateInputType = {
    id?: true
    propertyId?: true
    amenityId?: true
    createdAt?: true
    _all?: true
  }

  export type PropertyAmenityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyAmenity to aggregate.
     */
    where?: PropertyAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyAmenities to fetch.
     */
    orderBy?: PropertyAmenityOrderByWithRelationInput | PropertyAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertyAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PropertyAmenities
    **/
    _count?: true | PropertyAmenityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PropertyAmenityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PropertyAmenitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertyAmenityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertyAmenityMaxAggregateInputType
  }

  export type GetPropertyAmenityAggregateType<T extends PropertyAmenityAggregateArgs> = {
        [P in keyof T & keyof AggregatePropertyAmenity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropertyAmenity[P]>
      : GetScalarType<T[P], AggregatePropertyAmenity[P]>
  }




  export type PropertyAmenityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertyAmenityWhereInput
    orderBy?: PropertyAmenityOrderByWithAggregationInput | PropertyAmenityOrderByWithAggregationInput[]
    by: PropertyAmenityScalarFieldEnum[] | PropertyAmenityScalarFieldEnum
    having?: PropertyAmenityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertyAmenityCountAggregateInputType | true
    _avg?: PropertyAmenityAvgAggregateInputType
    _sum?: PropertyAmenitySumAggregateInputType
    _min?: PropertyAmenityMinAggregateInputType
    _max?: PropertyAmenityMaxAggregateInputType
  }

  export type PropertyAmenityGroupByOutputType = {
    id: number
    propertyId: number
    amenityId: number
    createdAt: Date
    _count: PropertyAmenityCountAggregateOutputType | null
    _avg: PropertyAmenityAvgAggregateOutputType | null
    _sum: PropertyAmenitySumAggregateOutputType | null
    _min: PropertyAmenityMinAggregateOutputType | null
    _max: PropertyAmenityMaxAggregateOutputType | null
  }

  type GetPropertyAmenityGroupByPayload<T extends PropertyAmenityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertyAmenityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertyAmenityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertyAmenityGroupByOutputType[P]>
            : GetScalarType<T[P], PropertyAmenityGroupByOutputType[P]>
        }
      >
    >


  export type PropertyAmenitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propertyId?: boolean
    amenityId?: boolean
    createdAt?: boolean
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["propertyAmenity"]>



  export type PropertyAmenitySelectScalar = {
    id?: boolean
    propertyId?: boolean
    amenityId?: boolean
    createdAt?: boolean
  }

  export type PropertyAmenityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propertyId" | "amenityId" | "createdAt", ExtArgs["result"]["propertyAmenity"]>
  export type PropertyAmenityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertyDefaultArgs<ExtArgs>
    amenity?: boolean | AmenityDefaultArgs<ExtArgs>
  }

  export type $PropertyAmenityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PropertyAmenity"
    objects: {
      property: Prisma.$PropertyPayload<ExtArgs>
      amenity: Prisma.$AmenityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      propertyId: number
      amenityId: number
      createdAt: Date
    }, ExtArgs["result"]["propertyAmenity"]>
    composites: {}
  }

  type PropertyAmenityGetPayload<S extends boolean | null | undefined | PropertyAmenityDefaultArgs> = $Result.GetResult<Prisma.$PropertyAmenityPayload, S>

  type PropertyAmenityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertyAmenityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertyAmenityCountAggregateInputType | true
    }

  export interface PropertyAmenityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PropertyAmenity'], meta: { name: 'PropertyAmenity' } }
    /**
     * Find zero or one PropertyAmenity that matches the filter.
     * @param {PropertyAmenityFindUniqueArgs} args - Arguments to find a PropertyAmenity
     * @example
     * // Get one PropertyAmenity
     * const propertyAmenity = await prisma.propertyAmenity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertyAmenityFindUniqueArgs>(args: SelectSubset<T, PropertyAmenityFindUniqueArgs<ExtArgs>>): Prisma__PropertyAmenityClient<$Result.GetResult<Prisma.$PropertyAmenityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PropertyAmenity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertyAmenityFindUniqueOrThrowArgs} args - Arguments to find a PropertyAmenity
     * @example
     * // Get one PropertyAmenity
     * const propertyAmenity = await prisma.propertyAmenity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertyAmenityFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertyAmenityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertyAmenityClient<$Result.GetResult<Prisma.$PropertyAmenityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyAmenity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAmenityFindFirstArgs} args - Arguments to find a PropertyAmenity
     * @example
     * // Get one PropertyAmenity
     * const propertyAmenity = await prisma.propertyAmenity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertyAmenityFindFirstArgs>(args?: SelectSubset<T, PropertyAmenityFindFirstArgs<ExtArgs>>): Prisma__PropertyAmenityClient<$Result.GetResult<Prisma.$PropertyAmenityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PropertyAmenity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAmenityFindFirstOrThrowArgs} args - Arguments to find a PropertyAmenity
     * @example
     * // Get one PropertyAmenity
     * const propertyAmenity = await prisma.propertyAmenity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertyAmenityFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertyAmenityFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertyAmenityClient<$Result.GetResult<Prisma.$PropertyAmenityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PropertyAmenities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAmenityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PropertyAmenities
     * const propertyAmenities = await prisma.propertyAmenity.findMany()
     * 
     * // Get first 10 PropertyAmenities
     * const propertyAmenities = await prisma.propertyAmenity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertyAmenityWithIdOnly = await prisma.propertyAmenity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertyAmenityFindManyArgs>(args?: SelectSubset<T, PropertyAmenityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertyAmenityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PropertyAmenity.
     * @param {PropertyAmenityCreateArgs} args - Arguments to create a PropertyAmenity.
     * @example
     * // Create one PropertyAmenity
     * const PropertyAmenity = await prisma.propertyAmenity.create({
     *   data: {
     *     // ... data to create a PropertyAmenity
     *   }
     * })
     * 
     */
    create<T extends PropertyAmenityCreateArgs>(args: SelectSubset<T, PropertyAmenityCreateArgs<ExtArgs>>): Prisma__PropertyAmenityClient<$Result.GetResult<Prisma.$PropertyAmenityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PropertyAmenities.
     * @param {PropertyAmenityCreateManyArgs} args - Arguments to create many PropertyAmenities.
     * @example
     * // Create many PropertyAmenities
     * const propertyAmenity = await prisma.propertyAmenity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertyAmenityCreateManyArgs>(args?: SelectSubset<T, PropertyAmenityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PropertyAmenity.
     * @param {PropertyAmenityDeleteArgs} args - Arguments to delete one PropertyAmenity.
     * @example
     * // Delete one PropertyAmenity
     * const PropertyAmenity = await prisma.propertyAmenity.delete({
     *   where: {
     *     // ... filter to delete one PropertyAmenity
     *   }
     * })
     * 
     */
    delete<T extends PropertyAmenityDeleteArgs>(args: SelectSubset<T, PropertyAmenityDeleteArgs<ExtArgs>>): Prisma__PropertyAmenityClient<$Result.GetResult<Prisma.$PropertyAmenityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PropertyAmenity.
     * @param {PropertyAmenityUpdateArgs} args - Arguments to update one PropertyAmenity.
     * @example
     * // Update one PropertyAmenity
     * const propertyAmenity = await prisma.propertyAmenity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertyAmenityUpdateArgs>(args: SelectSubset<T, PropertyAmenityUpdateArgs<ExtArgs>>): Prisma__PropertyAmenityClient<$Result.GetResult<Prisma.$PropertyAmenityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PropertyAmenities.
     * @param {PropertyAmenityDeleteManyArgs} args - Arguments to filter PropertyAmenities to delete.
     * @example
     * // Delete a few PropertyAmenities
     * const { count } = await prisma.propertyAmenity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertyAmenityDeleteManyArgs>(args?: SelectSubset<T, PropertyAmenityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PropertyAmenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAmenityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PropertyAmenities
     * const propertyAmenity = await prisma.propertyAmenity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertyAmenityUpdateManyArgs>(args: SelectSubset<T, PropertyAmenityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PropertyAmenity.
     * @param {PropertyAmenityUpsertArgs} args - Arguments to update or create a PropertyAmenity.
     * @example
     * // Update or create a PropertyAmenity
     * const propertyAmenity = await prisma.propertyAmenity.upsert({
     *   create: {
     *     // ... data to create a PropertyAmenity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PropertyAmenity we want to update
     *   }
     * })
     */
    upsert<T extends PropertyAmenityUpsertArgs>(args: SelectSubset<T, PropertyAmenityUpsertArgs<ExtArgs>>): Prisma__PropertyAmenityClient<$Result.GetResult<Prisma.$PropertyAmenityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PropertyAmenities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAmenityCountArgs} args - Arguments to filter PropertyAmenities to count.
     * @example
     * // Count the number of PropertyAmenities
     * const count = await prisma.propertyAmenity.count({
     *   where: {
     *     // ... the filter for the PropertyAmenities we want to count
     *   }
     * })
    **/
    count<T extends PropertyAmenityCountArgs>(
      args?: Subset<T, PropertyAmenityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertyAmenityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PropertyAmenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAmenityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertyAmenityAggregateArgs>(args: Subset<T, PropertyAmenityAggregateArgs>): Prisma.PrismaPromise<GetPropertyAmenityAggregateType<T>>

    /**
     * Group by PropertyAmenity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertyAmenityGroupByArgs} args - Group by arguments.
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
      T extends PropertyAmenityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertyAmenityGroupByArgs['orderBy'] }
        : { orderBy?: PropertyAmenityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertyAmenityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertyAmenityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PropertyAmenity model
   */
  readonly fields: PropertyAmenityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PropertyAmenity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertyAmenityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertyDefaultArgs<ExtArgs>>): Prisma__PropertyClient<$Result.GetResult<Prisma.$PropertyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    amenity<T extends AmenityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AmenityDefaultArgs<ExtArgs>>): Prisma__AmenityClient<$Result.GetResult<Prisma.$AmenityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PropertyAmenity model
   */
  interface PropertyAmenityFieldRefs {
    readonly id: FieldRef<"PropertyAmenity", 'Int'>
    readonly propertyId: FieldRef<"PropertyAmenity", 'Int'>
    readonly amenityId: FieldRef<"PropertyAmenity", 'Int'>
    readonly createdAt: FieldRef<"PropertyAmenity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PropertyAmenity findUnique
   */
  export type PropertyAmenityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenity
     */
    select?: PropertyAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenity
     */
    omit?: PropertyAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenityInclude<ExtArgs> | null
    /**
     * Filter, which PropertyAmenity to fetch.
     */
    where: PropertyAmenityWhereUniqueInput
  }

  /**
   * PropertyAmenity findUniqueOrThrow
   */
  export type PropertyAmenityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenity
     */
    select?: PropertyAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenity
     */
    omit?: PropertyAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenityInclude<ExtArgs> | null
    /**
     * Filter, which PropertyAmenity to fetch.
     */
    where: PropertyAmenityWhereUniqueInput
  }

  /**
   * PropertyAmenity findFirst
   */
  export type PropertyAmenityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenity
     */
    select?: PropertyAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenity
     */
    omit?: PropertyAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenityInclude<ExtArgs> | null
    /**
     * Filter, which PropertyAmenity to fetch.
     */
    where?: PropertyAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyAmenities to fetch.
     */
    orderBy?: PropertyAmenityOrderByWithRelationInput | PropertyAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyAmenities.
     */
    cursor?: PropertyAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyAmenities.
     */
    distinct?: PropertyAmenityScalarFieldEnum | PropertyAmenityScalarFieldEnum[]
  }

  /**
   * PropertyAmenity findFirstOrThrow
   */
  export type PropertyAmenityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenity
     */
    select?: PropertyAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenity
     */
    omit?: PropertyAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenityInclude<ExtArgs> | null
    /**
     * Filter, which PropertyAmenity to fetch.
     */
    where?: PropertyAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyAmenities to fetch.
     */
    orderBy?: PropertyAmenityOrderByWithRelationInput | PropertyAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PropertyAmenities.
     */
    cursor?: PropertyAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyAmenities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PropertyAmenities.
     */
    distinct?: PropertyAmenityScalarFieldEnum | PropertyAmenityScalarFieldEnum[]
  }

  /**
   * PropertyAmenity findMany
   */
  export type PropertyAmenityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenity
     */
    select?: PropertyAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenity
     */
    omit?: PropertyAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenityInclude<ExtArgs> | null
    /**
     * Filter, which PropertyAmenities to fetch.
     */
    where?: PropertyAmenityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PropertyAmenities to fetch.
     */
    orderBy?: PropertyAmenityOrderByWithRelationInput | PropertyAmenityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PropertyAmenities.
     */
    cursor?: PropertyAmenityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PropertyAmenities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PropertyAmenities.
     */
    skip?: number
    distinct?: PropertyAmenityScalarFieldEnum | PropertyAmenityScalarFieldEnum[]
  }

  /**
   * PropertyAmenity create
   */
  export type PropertyAmenityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenity
     */
    select?: PropertyAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenity
     */
    omit?: PropertyAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenityInclude<ExtArgs> | null
    /**
     * The data needed to create a PropertyAmenity.
     */
    data: XOR<PropertyAmenityCreateInput, PropertyAmenityUncheckedCreateInput>
  }

  /**
   * PropertyAmenity createMany
   */
  export type PropertyAmenityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PropertyAmenities.
     */
    data: PropertyAmenityCreateManyInput | PropertyAmenityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PropertyAmenity update
   */
  export type PropertyAmenityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenity
     */
    select?: PropertyAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenity
     */
    omit?: PropertyAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenityInclude<ExtArgs> | null
    /**
     * The data needed to update a PropertyAmenity.
     */
    data: XOR<PropertyAmenityUpdateInput, PropertyAmenityUncheckedUpdateInput>
    /**
     * Choose, which PropertyAmenity to update.
     */
    where: PropertyAmenityWhereUniqueInput
  }

  /**
   * PropertyAmenity updateMany
   */
  export type PropertyAmenityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PropertyAmenities.
     */
    data: XOR<PropertyAmenityUpdateManyMutationInput, PropertyAmenityUncheckedUpdateManyInput>
    /**
     * Filter which PropertyAmenities to update
     */
    where?: PropertyAmenityWhereInput
    /**
     * Limit how many PropertyAmenities to update.
     */
    limit?: number
  }

  /**
   * PropertyAmenity upsert
   */
  export type PropertyAmenityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenity
     */
    select?: PropertyAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenity
     */
    omit?: PropertyAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenityInclude<ExtArgs> | null
    /**
     * The filter to search for the PropertyAmenity to update in case it exists.
     */
    where: PropertyAmenityWhereUniqueInput
    /**
     * In case the PropertyAmenity found by the `where` argument doesn't exist, create a new PropertyAmenity with this data.
     */
    create: XOR<PropertyAmenityCreateInput, PropertyAmenityUncheckedCreateInput>
    /**
     * In case the PropertyAmenity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertyAmenityUpdateInput, PropertyAmenityUncheckedUpdateInput>
  }

  /**
   * PropertyAmenity delete
   */
  export type PropertyAmenityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenity
     */
    select?: PropertyAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenity
     */
    omit?: PropertyAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenityInclude<ExtArgs> | null
    /**
     * Filter which PropertyAmenity to delete.
     */
    where: PropertyAmenityWhereUniqueInput
  }

  /**
   * PropertyAmenity deleteMany
   */
  export type PropertyAmenityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PropertyAmenities to delete
     */
    where?: PropertyAmenityWhereInput
    /**
     * Limit how many PropertyAmenities to delete.
     */
    limit?: number
  }

  /**
   * PropertyAmenity without action
   */
  export type PropertyAmenityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertyAmenity
     */
    select?: PropertyAmenitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the PropertyAmenity
     */
    omit?: PropertyAmenityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertyAmenityInclude<ExtArgs> | null
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


  export const StudentScalarFieldEnum: {
    id: 'id',
    studentRut: 'studentRut',
    studentEmail: 'studentEmail',
    studentName: 'studentName',
    password: 'password',
    studentCollege: 'studentCollege',
    studentCertificateUrl: 'studentCertificateUrl',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const LandlordScalarFieldEnum: {
    id: 'id',
    landlordRut: 'landlordRut',
    landlordEmail: 'landlordEmail',
    landlordName: 'landlordName',
    password: 'password',
    landlordCarnetUrl: 'landlordCarnetUrl',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LandlordScalarFieldEnum = (typeof LandlordScalarFieldEnum)[keyof typeof LandlordScalarFieldEnum]


  export const PropertyScalarFieldEnum: {
    id: 'id',
    landlordId: 'landlordId',
    title: 'title',
    description: 'description',
    address: 'address',
    comuna: 'comuna',
    region: 'region',
    zipCode: 'zipCode',
    propertyType: 'propertyType',
    bedrooms: 'bedrooms',
    bathrooms: 'bathrooms',
    squareMeters: 'squareMeters',
    monthlyRent: 'monthlyRent',
    isAvailable: 'isAvailable',
    utilityBillUrl: 'utilityBillUrl',
    utilityBillValidated: 'utilityBillValidated',
    rules: 'rules',
    latitude: 'latitude',
    longitude: 'longitude',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyScalarFieldEnum = (typeof PropertyScalarFieldEnum)[keyof typeof PropertyScalarFieldEnum]


  export const PropertyImageScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    imageUrl: 'imageUrl',
    displayOrder: 'displayOrder',
    altText: 'altText',
    isPrimary: 'isPrimary',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PropertyImageScalarFieldEnum = (typeof PropertyImageScalarFieldEnum)[keyof typeof PropertyImageScalarFieldEnum]


  export const AmenityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    icon: 'icon',
    category: 'category',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AmenityScalarFieldEnum = (typeof AmenityScalarFieldEnum)[keyof typeof AmenityScalarFieldEnum]


  export const PropertyAmenityScalarFieldEnum: {
    id: 'id',
    propertyId: 'propertyId',
    amenityId: 'amenityId',
    createdAt: 'createdAt'
  };

  export type PropertyAmenityScalarFieldEnum = (typeof PropertyAmenityScalarFieldEnum)[keyof typeof PropertyAmenityScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const StudentOrderByRelevanceFieldEnum: {
    studentRut: 'studentRut',
    studentEmail: 'studentEmail',
    studentName: 'studentName',
    password: 'password',
    studentCollege: 'studentCollege',
    studentCertificateUrl: 'studentCertificateUrl',
    role: 'role'
  };

  export type StudentOrderByRelevanceFieldEnum = (typeof StudentOrderByRelevanceFieldEnum)[keyof typeof StudentOrderByRelevanceFieldEnum]


  export const LandlordOrderByRelevanceFieldEnum: {
    landlordRut: 'landlordRut',
    landlordEmail: 'landlordEmail',
    landlordName: 'landlordName',
    password: 'password',
    landlordCarnetUrl: 'landlordCarnetUrl',
    role: 'role'
  };

  export type LandlordOrderByRelevanceFieldEnum = (typeof LandlordOrderByRelevanceFieldEnum)[keyof typeof LandlordOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const PropertyOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    address: 'address',
    comuna: 'comuna',
    region: 'region',
    zipCode: 'zipCode',
    utilityBillUrl: 'utilityBillUrl',
    rules: 'rules'
  };

  export type PropertyOrderByRelevanceFieldEnum = (typeof PropertyOrderByRelevanceFieldEnum)[keyof typeof PropertyOrderByRelevanceFieldEnum]


  export const PropertyImageOrderByRelevanceFieldEnum: {
    imageUrl: 'imageUrl',
    altText: 'altText'
  };

  export type PropertyImageOrderByRelevanceFieldEnum = (typeof PropertyImageOrderByRelevanceFieldEnum)[keyof typeof PropertyImageOrderByRelevanceFieldEnum]


  export const AmenityOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    icon: 'icon',
    category: 'category'
  };

  export type AmenityOrderByRelevanceFieldEnum = (typeof AmenityOrderByRelevanceFieldEnum)[keyof typeof AmenityOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'PropertyType'
   */
  export type EnumPropertyTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PropertyType'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: IntFilter<"Student"> | number
    studentRut?: StringFilter<"Student"> | string
    studentEmail?: StringFilter<"Student"> | string
    studentName?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    studentCollege?: StringFilter<"Student"> | string
    studentCertificateUrl?: StringFilter<"Student"> | string
    role?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    studentRut?: SortOrder
    studentEmail?: SortOrder
    studentName?: SortOrder
    password?: SortOrder
    studentCollege?: SortOrder
    studentCertificateUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: StudentOrderByRelevanceInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    studentRut?: string
    studentEmail?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    studentName?: StringFilter<"Student"> | string
    password?: StringFilter<"Student"> | string
    studentCollege?: StringFilter<"Student"> | string
    studentCertificateUrl?: StringFilter<"Student"> | string
    role?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedAt?: DateTimeFilter<"Student"> | Date | string
  }, "id" | "studentRut" | "studentEmail">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    studentRut?: SortOrder
    studentEmail?: SortOrder
    studentName?: SortOrder
    password?: SortOrder
    studentCollege?: SortOrder
    studentCertificateUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Student"> | number
    studentRut?: StringWithAggregatesFilter<"Student"> | string
    studentEmail?: StringWithAggregatesFilter<"Student"> | string
    studentName?: StringWithAggregatesFilter<"Student"> | string
    password?: StringWithAggregatesFilter<"Student"> | string
    studentCollege?: StringWithAggregatesFilter<"Student"> | string
    studentCertificateUrl?: StringWithAggregatesFilter<"Student"> | string
    role?: StringWithAggregatesFilter<"Student"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
  }

  export type LandlordWhereInput = {
    AND?: LandlordWhereInput | LandlordWhereInput[]
    OR?: LandlordWhereInput[]
    NOT?: LandlordWhereInput | LandlordWhereInput[]
    id?: IntFilter<"Landlord"> | number
    landlordRut?: StringFilter<"Landlord"> | string
    landlordEmail?: StringFilter<"Landlord"> | string
    landlordName?: StringFilter<"Landlord"> | string
    password?: StringFilter<"Landlord"> | string
    landlordCarnetUrl?: StringFilter<"Landlord"> | string
    role?: StringFilter<"Landlord"> | string
    createdAt?: DateTimeFilter<"Landlord"> | Date | string
    updatedAt?: DateTimeFilter<"Landlord"> | Date | string
    properties?: PropertyListRelationFilter
  }

  export type LandlordOrderByWithRelationInput = {
    id?: SortOrder
    landlordRut?: SortOrder
    landlordEmail?: SortOrder
    landlordName?: SortOrder
    password?: SortOrder
    landlordCarnetUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    properties?: PropertyOrderByRelationAggregateInput
    _relevance?: LandlordOrderByRelevanceInput
  }

  export type LandlordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    landlordRut?: string
    landlordEmail?: string
    AND?: LandlordWhereInput | LandlordWhereInput[]
    OR?: LandlordWhereInput[]
    NOT?: LandlordWhereInput | LandlordWhereInput[]
    landlordName?: StringFilter<"Landlord"> | string
    password?: StringFilter<"Landlord"> | string
    landlordCarnetUrl?: StringFilter<"Landlord"> | string
    role?: StringFilter<"Landlord"> | string
    createdAt?: DateTimeFilter<"Landlord"> | Date | string
    updatedAt?: DateTimeFilter<"Landlord"> | Date | string
    properties?: PropertyListRelationFilter
  }, "id" | "landlordRut" | "landlordEmail">

  export type LandlordOrderByWithAggregationInput = {
    id?: SortOrder
    landlordRut?: SortOrder
    landlordEmail?: SortOrder
    landlordName?: SortOrder
    password?: SortOrder
    landlordCarnetUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LandlordCountOrderByAggregateInput
    _avg?: LandlordAvgOrderByAggregateInput
    _max?: LandlordMaxOrderByAggregateInput
    _min?: LandlordMinOrderByAggregateInput
    _sum?: LandlordSumOrderByAggregateInput
  }

  export type LandlordScalarWhereWithAggregatesInput = {
    AND?: LandlordScalarWhereWithAggregatesInput | LandlordScalarWhereWithAggregatesInput[]
    OR?: LandlordScalarWhereWithAggregatesInput[]
    NOT?: LandlordScalarWhereWithAggregatesInput | LandlordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Landlord"> | number
    landlordRut?: StringWithAggregatesFilter<"Landlord"> | string
    landlordEmail?: StringWithAggregatesFilter<"Landlord"> | string
    landlordName?: StringWithAggregatesFilter<"Landlord"> | string
    password?: StringWithAggregatesFilter<"Landlord"> | string
    landlordCarnetUrl?: StringWithAggregatesFilter<"Landlord"> | string
    role?: StringWithAggregatesFilter<"Landlord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Landlord"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Landlord"> | Date | string
  }

  export type PropertyWhereInput = {
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    id?: IntFilter<"Property"> | number
    landlordId?: IntFilter<"Property"> | number
    title?: StringFilter<"Property"> | string
    description?: StringNullableFilter<"Property"> | string | null
    address?: StringFilter<"Property"> | string
    comuna?: StringFilter<"Property"> | string
    region?: StringFilter<"Property"> | string
    zipCode?: StringNullableFilter<"Property"> | string | null
    propertyType?: EnumPropertyTypeFilter<"Property"> | $Enums.PropertyType
    bedrooms?: IntFilter<"Property"> | number
    bathrooms?: IntFilter<"Property"> | number
    squareMeters?: FloatNullableFilter<"Property"> | number | null
    monthlyRent?: DecimalFilter<"Property"> | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFilter<"Property"> | boolean
    utilityBillUrl?: StringFilter<"Property"> | string
    utilityBillValidated?: BoolFilter<"Property"> | boolean
    rules?: StringNullableFilter<"Property"> | string | null
    latitude?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    landlord?: XOR<LandlordScalarRelationFilter, LandlordWhereInput>
    propertyImages?: PropertyImageListRelationFilter
    propertyAmenities?: PropertyAmenityListRelationFilter
  }

  export type PropertyOrderByWithRelationInput = {
    id?: SortOrder
    landlordId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrder
    comuna?: SortOrder
    region?: SortOrder
    zipCode?: SortOrderInput | SortOrder
    propertyType?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareMeters?: SortOrderInput | SortOrder
    monthlyRent?: SortOrder
    isAvailable?: SortOrder
    utilityBillUrl?: SortOrder
    utilityBillValidated?: SortOrder
    rules?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    landlord?: LandlordOrderByWithRelationInput
    propertyImages?: PropertyImageOrderByRelationAggregateInput
    propertyAmenities?: PropertyAmenityOrderByRelationAggregateInput
    _relevance?: PropertyOrderByRelevanceInput
  }

  export type PropertyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertyWhereInput | PropertyWhereInput[]
    OR?: PropertyWhereInput[]
    NOT?: PropertyWhereInput | PropertyWhereInput[]
    landlordId?: IntFilter<"Property"> | number
    title?: StringFilter<"Property"> | string
    description?: StringNullableFilter<"Property"> | string | null
    address?: StringFilter<"Property"> | string
    comuna?: StringFilter<"Property"> | string
    region?: StringFilter<"Property"> | string
    zipCode?: StringNullableFilter<"Property"> | string | null
    propertyType?: EnumPropertyTypeFilter<"Property"> | $Enums.PropertyType
    bedrooms?: IntFilter<"Property"> | number
    bathrooms?: IntFilter<"Property"> | number
    squareMeters?: FloatNullableFilter<"Property"> | number | null
    monthlyRent?: DecimalFilter<"Property"> | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFilter<"Property"> | boolean
    utilityBillUrl?: StringFilter<"Property"> | string
    utilityBillValidated?: BoolFilter<"Property"> | boolean
    rules?: StringNullableFilter<"Property"> | string | null
    latitude?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
    landlord?: XOR<LandlordScalarRelationFilter, LandlordWhereInput>
    propertyImages?: PropertyImageListRelationFilter
    propertyAmenities?: PropertyAmenityListRelationFilter
  }, "id">

  export type PropertyOrderByWithAggregationInput = {
    id?: SortOrder
    landlordId?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrder
    comuna?: SortOrder
    region?: SortOrder
    zipCode?: SortOrderInput | SortOrder
    propertyType?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareMeters?: SortOrderInput | SortOrder
    monthlyRent?: SortOrder
    isAvailable?: SortOrder
    utilityBillUrl?: SortOrder
    utilityBillValidated?: SortOrder
    rules?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyCountOrderByAggregateInput
    _avg?: PropertyAvgOrderByAggregateInput
    _max?: PropertyMaxOrderByAggregateInput
    _min?: PropertyMinOrderByAggregateInput
    _sum?: PropertySumOrderByAggregateInput
  }

  export type PropertyScalarWhereWithAggregatesInput = {
    AND?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    OR?: PropertyScalarWhereWithAggregatesInput[]
    NOT?: PropertyScalarWhereWithAggregatesInput | PropertyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Property"> | number
    landlordId?: IntWithAggregatesFilter<"Property"> | number
    title?: StringWithAggregatesFilter<"Property"> | string
    description?: StringNullableWithAggregatesFilter<"Property"> | string | null
    address?: StringWithAggregatesFilter<"Property"> | string
    comuna?: StringWithAggregatesFilter<"Property"> | string
    region?: StringWithAggregatesFilter<"Property"> | string
    zipCode?: StringNullableWithAggregatesFilter<"Property"> | string | null
    propertyType?: EnumPropertyTypeWithAggregatesFilter<"Property"> | $Enums.PropertyType
    bedrooms?: IntWithAggregatesFilter<"Property"> | number
    bathrooms?: IntWithAggregatesFilter<"Property"> | number
    squareMeters?: FloatNullableWithAggregatesFilter<"Property"> | number | null
    monthlyRent?: DecimalWithAggregatesFilter<"Property"> | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolWithAggregatesFilter<"Property"> | boolean
    utilityBillUrl?: StringWithAggregatesFilter<"Property"> | string
    utilityBillValidated?: BoolWithAggregatesFilter<"Property"> | boolean
    rules?: StringNullableWithAggregatesFilter<"Property"> | string | null
    latitude?: DecimalNullableWithAggregatesFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableWithAggregatesFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Property"> | Date | string
  }

  export type PropertyImageWhereInput = {
    AND?: PropertyImageWhereInput | PropertyImageWhereInput[]
    OR?: PropertyImageWhereInput[]
    NOT?: PropertyImageWhereInput | PropertyImageWhereInput[]
    id?: IntFilter<"PropertyImage"> | number
    propertyId?: IntFilter<"PropertyImage"> | number
    imageUrl?: StringFilter<"PropertyImage"> | string
    displayOrder?: IntFilter<"PropertyImage"> | number
    altText?: StringNullableFilter<"PropertyImage"> | string | null
    isPrimary?: BoolFilter<"PropertyImage"> | boolean
    createdAt?: DateTimeFilter<"PropertyImage"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyImage"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }

  export type PropertyImageOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    imageUrl?: SortOrder
    displayOrder?: SortOrder
    altText?: SortOrderInput | SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    _relevance?: PropertyImageOrderByRelevanceInput
  }

  export type PropertyImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PropertyImageWhereInput | PropertyImageWhereInput[]
    OR?: PropertyImageWhereInput[]
    NOT?: PropertyImageWhereInput | PropertyImageWhereInput[]
    propertyId?: IntFilter<"PropertyImage"> | number
    imageUrl?: StringFilter<"PropertyImage"> | string
    displayOrder?: IntFilter<"PropertyImage"> | number
    altText?: StringNullableFilter<"PropertyImage"> | string | null
    isPrimary?: BoolFilter<"PropertyImage"> | boolean
    createdAt?: DateTimeFilter<"PropertyImage"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyImage"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
  }, "id">

  export type PropertyImageOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    imageUrl?: SortOrder
    displayOrder?: SortOrder
    altText?: SortOrderInput | SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PropertyImageCountOrderByAggregateInput
    _avg?: PropertyImageAvgOrderByAggregateInput
    _max?: PropertyImageMaxOrderByAggregateInput
    _min?: PropertyImageMinOrderByAggregateInput
    _sum?: PropertyImageSumOrderByAggregateInput
  }

  export type PropertyImageScalarWhereWithAggregatesInput = {
    AND?: PropertyImageScalarWhereWithAggregatesInput | PropertyImageScalarWhereWithAggregatesInput[]
    OR?: PropertyImageScalarWhereWithAggregatesInput[]
    NOT?: PropertyImageScalarWhereWithAggregatesInput | PropertyImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PropertyImage"> | number
    propertyId?: IntWithAggregatesFilter<"PropertyImage"> | number
    imageUrl?: StringWithAggregatesFilter<"PropertyImage"> | string
    displayOrder?: IntWithAggregatesFilter<"PropertyImage"> | number
    altText?: StringNullableWithAggregatesFilter<"PropertyImage"> | string | null
    isPrimary?: BoolWithAggregatesFilter<"PropertyImage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PropertyImage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PropertyImage"> | Date | string
  }

  export type AmenityWhereInput = {
    AND?: AmenityWhereInput | AmenityWhereInput[]
    OR?: AmenityWhereInput[]
    NOT?: AmenityWhereInput | AmenityWhereInput[]
    id?: IntFilter<"Amenity"> | number
    name?: StringFilter<"Amenity"> | string
    description?: StringNullableFilter<"Amenity"> | string | null
    icon?: StringNullableFilter<"Amenity"> | string | null
    category?: StringNullableFilter<"Amenity"> | string | null
    createdAt?: DateTimeFilter<"Amenity"> | Date | string
    updatedAt?: DateTimeFilter<"Amenity"> | Date | string
    propertyAmenities?: PropertyAmenityListRelationFilter
  }

  export type AmenityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    propertyAmenities?: PropertyAmenityOrderByRelationAggregateInput
    _relevance?: AmenityOrderByRelevanceInput
  }

  export type AmenityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: AmenityWhereInput | AmenityWhereInput[]
    OR?: AmenityWhereInput[]
    NOT?: AmenityWhereInput | AmenityWhereInput[]
    description?: StringNullableFilter<"Amenity"> | string | null
    icon?: StringNullableFilter<"Amenity"> | string | null
    category?: StringNullableFilter<"Amenity"> | string | null
    createdAt?: DateTimeFilter<"Amenity"> | Date | string
    updatedAt?: DateTimeFilter<"Amenity"> | Date | string
    propertyAmenities?: PropertyAmenityListRelationFilter
  }, "id" | "name">

  export type AmenityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AmenityCountOrderByAggregateInput
    _avg?: AmenityAvgOrderByAggregateInput
    _max?: AmenityMaxOrderByAggregateInput
    _min?: AmenityMinOrderByAggregateInput
    _sum?: AmenitySumOrderByAggregateInput
  }

  export type AmenityScalarWhereWithAggregatesInput = {
    AND?: AmenityScalarWhereWithAggregatesInput | AmenityScalarWhereWithAggregatesInput[]
    OR?: AmenityScalarWhereWithAggregatesInput[]
    NOT?: AmenityScalarWhereWithAggregatesInput | AmenityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Amenity"> | number
    name?: StringWithAggregatesFilter<"Amenity"> | string
    description?: StringNullableWithAggregatesFilter<"Amenity"> | string | null
    icon?: StringNullableWithAggregatesFilter<"Amenity"> | string | null
    category?: StringNullableWithAggregatesFilter<"Amenity"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Amenity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Amenity"> | Date | string
  }

  export type PropertyAmenityWhereInput = {
    AND?: PropertyAmenityWhereInput | PropertyAmenityWhereInput[]
    OR?: PropertyAmenityWhereInput[]
    NOT?: PropertyAmenityWhereInput | PropertyAmenityWhereInput[]
    id?: IntFilter<"PropertyAmenity"> | number
    propertyId?: IntFilter<"PropertyAmenity"> | number
    amenityId?: IntFilter<"PropertyAmenity"> | number
    createdAt?: DateTimeFilter<"PropertyAmenity"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    amenity?: XOR<AmenityScalarRelationFilter, AmenityWhereInput>
  }

  export type PropertyAmenityOrderByWithRelationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    amenityId?: SortOrder
    createdAt?: SortOrder
    property?: PropertyOrderByWithRelationInput
    amenity?: AmenityOrderByWithRelationInput
  }

  export type PropertyAmenityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    propertyId_amenityId?: PropertyAmenityPropertyIdAmenityIdCompoundUniqueInput
    AND?: PropertyAmenityWhereInput | PropertyAmenityWhereInput[]
    OR?: PropertyAmenityWhereInput[]
    NOT?: PropertyAmenityWhereInput | PropertyAmenityWhereInput[]
    propertyId?: IntFilter<"PropertyAmenity"> | number
    amenityId?: IntFilter<"PropertyAmenity"> | number
    createdAt?: DateTimeFilter<"PropertyAmenity"> | Date | string
    property?: XOR<PropertyScalarRelationFilter, PropertyWhereInput>
    amenity?: XOR<AmenityScalarRelationFilter, AmenityWhereInput>
  }, "id" | "propertyId_amenityId">

  export type PropertyAmenityOrderByWithAggregationInput = {
    id?: SortOrder
    propertyId?: SortOrder
    amenityId?: SortOrder
    createdAt?: SortOrder
    _count?: PropertyAmenityCountOrderByAggregateInput
    _avg?: PropertyAmenityAvgOrderByAggregateInput
    _max?: PropertyAmenityMaxOrderByAggregateInput
    _min?: PropertyAmenityMinOrderByAggregateInput
    _sum?: PropertyAmenitySumOrderByAggregateInput
  }

  export type PropertyAmenityScalarWhereWithAggregatesInput = {
    AND?: PropertyAmenityScalarWhereWithAggregatesInput | PropertyAmenityScalarWhereWithAggregatesInput[]
    OR?: PropertyAmenityScalarWhereWithAggregatesInput[]
    NOT?: PropertyAmenityScalarWhereWithAggregatesInput | PropertyAmenityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PropertyAmenity"> | number
    propertyId?: IntWithAggregatesFilter<"PropertyAmenity"> | number
    amenityId?: IntWithAggregatesFilter<"PropertyAmenity"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PropertyAmenity"> | Date | string
  }

  export type StudentCreateInput = {
    studentRut: string
    studentEmail: string
    studentName: string
    password: string
    studentCollege: string
    studentCertificateUrl: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUncheckedCreateInput = {
    id?: number
    studentRut: string
    studentEmail: string
    studentName: string
    password: string
    studentCollege: string
    studentCertificateUrl: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateInput = {
    studentRut?: StringFieldUpdateOperationsInput | string
    studentEmail?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    studentCollege?: StringFieldUpdateOperationsInput | string
    studentCertificateUrl?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentRut?: StringFieldUpdateOperationsInput | string
    studentEmail?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    studentCollege?: StringFieldUpdateOperationsInput | string
    studentCertificateUrl?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateManyInput = {
    id?: number
    studentRut: string
    studentEmail: string
    studentName: string
    password: string
    studentCollege: string
    studentCertificateUrl: string
    role: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentUpdateManyMutationInput = {
    studentRut?: StringFieldUpdateOperationsInput | string
    studentEmail?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    studentCollege?: StringFieldUpdateOperationsInput | string
    studentCertificateUrl?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    studentRut?: StringFieldUpdateOperationsInput | string
    studentEmail?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    studentCollege?: StringFieldUpdateOperationsInput | string
    studentCertificateUrl?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LandlordCreateInput = {
    landlordRut: string
    landlordEmail: string
    landlordName: string
    password: string
    landlordCarnetUrl: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyCreateNestedManyWithoutLandlordInput
  }

  export type LandlordUncheckedCreateInput = {
    id?: number
    landlordRut: string
    landlordEmail: string
    landlordName: string
    password: string
    landlordCarnetUrl: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    properties?: PropertyUncheckedCreateNestedManyWithoutLandlordInput
  }

  export type LandlordUpdateInput = {
    landlordRut?: StringFieldUpdateOperationsInput | string
    landlordEmail?: StringFieldUpdateOperationsInput | string
    landlordName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    landlordCarnetUrl?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUpdateManyWithoutLandlordNestedInput
  }

  export type LandlordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    landlordRut?: StringFieldUpdateOperationsInput | string
    landlordEmail?: StringFieldUpdateOperationsInput | string
    landlordName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    landlordCarnetUrl?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertyUncheckedUpdateManyWithoutLandlordNestedInput
  }

  export type LandlordCreateManyInput = {
    id?: number
    landlordRut: string
    landlordEmail: string
    landlordName: string
    password: string
    landlordCarnetUrl: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LandlordUpdateManyMutationInput = {
    landlordRut?: StringFieldUpdateOperationsInput | string
    landlordEmail?: StringFieldUpdateOperationsInput | string
    landlordName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    landlordCarnetUrl?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LandlordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    landlordRut?: StringFieldUpdateOperationsInput | string
    landlordEmail?: StringFieldUpdateOperationsInput | string
    landlordName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    landlordCarnetUrl?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateInput = {
    title: string
    description?: string | null
    address: string
    comuna: string
    region: string
    zipCode?: string | null
    propertyType: $Enums.PropertyType
    bedrooms: number
    bathrooms: number
    squareMeters?: number | null
    monthlyRent: Decimal | DecimalJsLike | number | string
    isAvailable?: boolean
    utilityBillUrl: string
    utilityBillValidated?: boolean
    rules?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    landlord: LandlordCreateNestedOneWithoutPropertiesInput
    propertyImages?: PropertyImageCreateNestedManyWithoutPropertyInput
    propertyAmenities?: PropertyAmenityCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateInput = {
    id?: number
    landlordId: number
    title: string
    description?: string | null
    address: string
    comuna: string
    region: string
    zipCode?: string | null
    propertyType: $Enums.PropertyType
    bedrooms: number
    bathrooms: number
    squareMeters?: number | null
    monthlyRent: Decimal | DecimalJsLike | number | string
    isAvailable?: boolean
    utilityBillUrl: string
    utilityBillValidated?: boolean
    rules?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    propertyImages?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    propertyAmenities?: PropertyAmenityUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    comuna?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    utilityBillUrl?: StringFieldUpdateOperationsInput | string
    utilityBillValidated?: BoolFieldUpdateOperationsInput | boolean
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    landlord?: LandlordUpdateOneRequiredWithoutPropertiesNestedInput
    propertyImages?: PropertyImageUpdateManyWithoutPropertyNestedInput
    propertyAmenities?: PropertyAmenityUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    landlordId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    comuna?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    utilityBillUrl?: StringFieldUpdateOperationsInput | string
    utilityBillValidated?: BoolFieldUpdateOperationsInput | boolean
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyImages?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    propertyAmenities?: PropertyAmenityUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyCreateManyInput = {
    id?: number
    landlordId: number
    title: string
    description?: string | null
    address: string
    comuna: string
    region: string
    zipCode?: string | null
    propertyType: $Enums.PropertyType
    bedrooms: number
    bathrooms: number
    squareMeters?: number | null
    monthlyRent: Decimal | DecimalJsLike | number | string
    isAvailable?: boolean
    utilityBillUrl: string
    utilityBillValidated?: boolean
    rules?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    comuna?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    utilityBillUrl?: StringFieldUpdateOperationsInput | string
    utilityBillValidated?: BoolFieldUpdateOperationsInput | boolean
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    landlordId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    comuna?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    utilityBillUrl?: StringFieldUpdateOperationsInput | string
    utilityBillValidated?: BoolFieldUpdateOperationsInput | boolean
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageCreateInput = {
    imageUrl: string
    displayOrder?: number
    altText?: string | null
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    property: PropertyCreateNestedOneWithoutPropertyImagesInput
  }

  export type PropertyImageUncheckedCreateInput = {
    id?: number
    propertyId: number
    imageUrl: string
    displayOrder?: number
    altText?: string | null
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyImageUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutPropertyImagesNestedInput
  }

  export type PropertyImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageCreateManyInput = {
    id?: number
    propertyId: number
    imageUrl: string
    displayOrder?: number
    altText?: string | null
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyImageUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmenityCreateInput = {
    name: string
    description?: string | null
    icon?: string | null
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    propertyAmenities?: PropertyAmenityCreateNestedManyWithoutAmenityInput
  }

  export type AmenityUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    icon?: string | null
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    propertyAmenities?: PropertyAmenityUncheckedCreateNestedManyWithoutAmenityInput
  }

  export type AmenityUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyAmenities?: PropertyAmenityUpdateManyWithoutAmenityNestedInput
  }

  export type AmenityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyAmenities?: PropertyAmenityUncheckedUpdateManyWithoutAmenityNestedInput
  }

  export type AmenityCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    icon?: string | null
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AmenityUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmenityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyAmenityCreateInput = {
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutPropertyAmenitiesInput
    amenity: AmenityCreateNestedOneWithoutPropertyAmenitiesInput
  }

  export type PropertyAmenityUncheckedCreateInput = {
    id?: number
    propertyId: number
    amenityId: number
    createdAt?: Date | string
  }

  export type PropertyAmenityUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutPropertyAmenitiesNestedInput
    amenity?: AmenityUpdateOneRequiredWithoutPropertyAmenitiesNestedInput
  }

  export type PropertyAmenityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    amenityId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyAmenityCreateManyInput = {
    id?: number
    propertyId: number
    amenityId: number
    createdAt?: Date | string
  }

  export type PropertyAmenityUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyAmenityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    amenityId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StudentOrderByRelevanceInput = {
    fields: StudentOrderByRelevanceFieldEnum | StudentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    studentRut?: SortOrder
    studentEmail?: SortOrder
    studentName?: SortOrder
    password?: SortOrder
    studentCollege?: SortOrder
    studentCertificateUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    studentRut?: SortOrder
    studentEmail?: SortOrder
    studentName?: SortOrder
    password?: SortOrder
    studentCollege?: SortOrder
    studentCertificateUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    studentRut?: SortOrder
    studentEmail?: SortOrder
    studentName?: SortOrder
    password?: SortOrder
    studentCollege?: SortOrder
    studentCertificateUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
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

  export type PropertyListRelationFilter = {
    every?: PropertyWhereInput
    some?: PropertyWhereInput
    none?: PropertyWhereInput
  }

  export type PropertyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LandlordOrderByRelevanceInput = {
    fields: LandlordOrderByRelevanceFieldEnum | LandlordOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LandlordCountOrderByAggregateInput = {
    id?: SortOrder
    landlordRut?: SortOrder
    landlordEmail?: SortOrder
    landlordName?: SortOrder
    password?: SortOrder
    landlordCarnetUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LandlordAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LandlordMaxOrderByAggregateInput = {
    id?: SortOrder
    landlordRut?: SortOrder
    landlordEmail?: SortOrder
    landlordName?: SortOrder
    password?: SortOrder
    landlordCarnetUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LandlordMinOrderByAggregateInput = {
    id?: SortOrder
    landlordRut?: SortOrder
    landlordEmail?: SortOrder
    landlordName?: SortOrder
    password?: SortOrder
    landlordCarnetUrl?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LandlordSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type EnumPropertyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[]
    notIn?: $Enums.PropertyType[]
    not?: NestedEnumPropertyTypeFilter<$PrismaModel> | $Enums.PropertyType
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type LandlordScalarRelationFilter = {
    is?: LandlordWhereInput
    isNot?: LandlordWhereInput
  }

  export type PropertyImageListRelationFilter = {
    every?: PropertyImageWhereInput
    some?: PropertyImageWhereInput
    none?: PropertyImageWhereInput
  }

  export type PropertyAmenityListRelationFilter = {
    every?: PropertyAmenityWhereInput
    some?: PropertyAmenityWhereInput
    none?: PropertyAmenityWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PropertyImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyAmenityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PropertyOrderByRelevanceInput = {
    fields: PropertyOrderByRelevanceFieldEnum | PropertyOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PropertyCountOrderByAggregateInput = {
    id?: SortOrder
    landlordId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    address?: SortOrder
    comuna?: SortOrder
    region?: SortOrder
    zipCode?: SortOrder
    propertyType?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareMeters?: SortOrder
    monthlyRent?: SortOrder
    isAvailable?: SortOrder
    utilityBillUrl?: SortOrder
    utilityBillValidated?: SortOrder
    rules?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyAvgOrderByAggregateInput = {
    id?: SortOrder
    landlordId?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareMeters?: SortOrder
    monthlyRent?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type PropertyMaxOrderByAggregateInput = {
    id?: SortOrder
    landlordId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    address?: SortOrder
    comuna?: SortOrder
    region?: SortOrder
    zipCode?: SortOrder
    propertyType?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareMeters?: SortOrder
    monthlyRent?: SortOrder
    isAvailable?: SortOrder
    utilityBillUrl?: SortOrder
    utilityBillValidated?: SortOrder
    rules?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyMinOrderByAggregateInput = {
    id?: SortOrder
    landlordId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    address?: SortOrder
    comuna?: SortOrder
    region?: SortOrder
    zipCode?: SortOrder
    propertyType?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareMeters?: SortOrder
    monthlyRent?: SortOrder
    isAvailable?: SortOrder
    utilityBillUrl?: SortOrder
    utilityBillValidated?: SortOrder
    rules?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertySumOrderByAggregateInput = {
    id?: SortOrder
    landlordId?: SortOrder
    bedrooms?: SortOrder
    bathrooms?: SortOrder
    squareMeters?: SortOrder
    monthlyRent?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
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

  export type EnumPropertyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[]
    notIn?: $Enums.PropertyType[]
    not?: NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel> | $Enums.PropertyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyTypeFilter<$PrismaModel>
    _max?: NestedEnumPropertyTypeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type PropertyScalarRelationFilter = {
    is?: PropertyWhereInput
    isNot?: PropertyWhereInput
  }

  export type PropertyImageOrderByRelevanceInput = {
    fields: PropertyImageOrderByRelevanceFieldEnum | PropertyImageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PropertyImageCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    imageUrl?: SortOrder
    displayOrder?: SortOrder
    altText?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyImageAvgOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    displayOrder?: SortOrder
  }

  export type PropertyImageMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    imageUrl?: SortOrder
    displayOrder?: SortOrder
    altText?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyImageMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    imageUrl?: SortOrder
    displayOrder?: SortOrder
    altText?: SortOrder
    isPrimary?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PropertyImageSumOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    displayOrder?: SortOrder
  }

  export type AmenityOrderByRelevanceInput = {
    fields: AmenityOrderByRelevanceFieldEnum | AmenityOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AmenityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AmenityAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AmenityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AmenityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    category?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AmenitySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AmenityScalarRelationFilter = {
    is?: AmenityWhereInput
    isNot?: AmenityWhereInput
  }

  export type PropertyAmenityPropertyIdAmenityIdCompoundUniqueInput = {
    propertyId: number
    amenityId: number
  }

  export type PropertyAmenityCountOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    amenityId?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyAmenityAvgOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    amenityId?: SortOrder
  }

  export type PropertyAmenityMaxOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    amenityId?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyAmenityMinOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    amenityId?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertyAmenitySumOrderByAggregateInput = {
    id?: SortOrder
    propertyId?: SortOrder
    amenityId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PropertyCreateNestedManyWithoutLandlordInput = {
    create?: XOR<PropertyCreateWithoutLandlordInput, PropertyUncheckedCreateWithoutLandlordInput> | PropertyCreateWithoutLandlordInput[] | PropertyUncheckedCreateWithoutLandlordInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutLandlordInput | PropertyCreateOrConnectWithoutLandlordInput[]
    createMany?: PropertyCreateManyLandlordInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUncheckedCreateNestedManyWithoutLandlordInput = {
    create?: XOR<PropertyCreateWithoutLandlordInput, PropertyUncheckedCreateWithoutLandlordInput> | PropertyCreateWithoutLandlordInput[] | PropertyUncheckedCreateWithoutLandlordInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutLandlordInput | PropertyCreateOrConnectWithoutLandlordInput[]
    createMany?: PropertyCreateManyLandlordInputEnvelope
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
  }

  export type PropertyUpdateManyWithoutLandlordNestedInput = {
    create?: XOR<PropertyCreateWithoutLandlordInput, PropertyUncheckedCreateWithoutLandlordInput> | PropertyCreateWithoutLandlordInput[] | PropertyUncheckedCreateWithoutLandlordInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutLandlordInput | PropertyCreateOrConnectWithoutLandlordInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutLandlordInput | PropertyUpsertWithWhereUniqueWithoutLandlordInput[]
    createMany?: PropertyCreateManyLandlordInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutLandlordInput | PropertyUpdateWithWhereUniqueWithoutLandlordInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutLandlordInput | PropertyUpdateManyWithWhereWithoutLandlordInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type PropertyUncheckedUpdateManyWithoutLandlordNestedInput = {
    create?: XOR<PropertyCreateWithoutLandlordInput, PropertyUncheckedCreateWithoutLandlordInput> | PropertyCreateWithoutLandlordInput[] | PropertyUncheckedCreateWithoutLandlordInput[]
    connectOrCreate?: PropertyCreateOrConnectWithoutLandlordInput | PropertyCreateOrConnectWithoutLandlordInput[]
    upsert?: PropertyUpsertWithWhereUniqueWithoutLandlordInput | PropertyUpsertWithWhereUniqueWithoutLandlordInput[]
    createMany?: PropertyCreateManyLandlordInputEnvelope
    set?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    disconnect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    delete?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    connect?: PropertyWhereUniqueInput | PropertyWhereUniqueInput[]
    update?: PropertyUpdateWithWhereUniqueWithoutLandlordInput | PropertyUpdateWithWhereUniqueWithoutLandlordInput[]
    updateMany?: PropertyUpdateManyWithWhereWithoutLandlordInput | PropertyUpdateManyWithWhereWithoutLandlordInput[]
    deleteMany?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
  }

  export type LandlordCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<LandlordCreateWithoutPropertiesInput, LandlordUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: LandlordCreateOrConnectWithoutPropertiesInput
    connect?: LandlordWhereUniqueInput
  }

  export type PropertyImageCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
  }

  export type PropertyAmenityCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyAmenityCreateWithoutPropertyInput, PropertyAmenityUncheckedCreateWithoutPropertyInput> | PropertyAmenityCreateWithoutPropertyInput[] | PropertyAmenityUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyAmenityCreateOrConnectWithoutPropertyInput | PropertyAmenityCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyAmenityCreateManyPropertyInputEnvelope
    connect?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
  }

  export type PropertyImageUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
  }

  export type PropertyAmenityUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<PropertyAmenityCreateWithoutPropertyInput, PropertyAmenityUncheckedCreateWithoutPropertyInput> | PropertyAmenityCreateWithoutPropertyInput[] | PropertyAmenityUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyAmenityCreateOrConnectWithoutPropertyInput | PropertyAmenityCreateOrConnectWithoutPropertyInput[]
    createMany?: PropertyAmenityCreateManyPropertyInputEnvelope
    connect?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumPropertyTypeFieldUpdateOperationsInput = {
    set?: $Enums.PropertyType
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type LandlordUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<LandlordCreateWithoutPropertiesInput, LandlordUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: LandlordCreateOrConnectWithoutPropertiesInput
    upsert?: LandlordUpsertWithoutPropertiesInput
    connect?: LandlordWhereUniqueInput
    update?: XOR<XOR<LandlordUpdateToOneWithWhereWithoutPropertiesInput, LandlordUpdateWithoutPropertiesInput>, LandlordUncheckedUpdateWithoutPropertiesInput>
  }

  export type PropertyImageUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyImageUpsertWithWhereUniqueWithoutPropertyInput | PropertyImageUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    set?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    disconnect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    delete?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    update?: PropertyImageUpdateWithWhereUniqueWithoutPropertyInput | PropertyImageUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyImageUpdateManyWithWhereWithoutPropertyInput | PropertyImageUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
  }

  export type PropertyAmenityUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyAmenityCreateWithoutPropertyInput, PropertyAmenityUncheckedCreateWithoutPropertyInput> | PropertyAmenityCreateWithoutPropertyInput[] | PropertyAmenityUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyAmenityCreateOrConnectWithoutPropertyInput | PropertyAmenityCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyAmenityUpsertWithWhereUniqueWithoutPropertyInput | PropertyAmenityUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyAmenityCreateManyPropertyInputEnvelope
    set?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
    disconnect?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
    delete?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
    connect?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
    update?: PropertyAmenityUpdateWithWhereUniqueWithoutPropertyInput | PropertyAmenityUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyAmenityUpdateManyWithWhereWithoutPropertyInput | PropertyAmenityUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyAmenityScalarWhereInput | PropertyAmenityScalarWhereInput[]
  }

  export type PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput> | PropertyImageCreateWithoutPropertyInput[] | PropertyImageUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyImageCreateOrConnectWithoutPropertyInput | PropertyImageCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyImageUpsertWithWhereUniqueWithoutPropertyInput | PropertyImageUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyImageCreateManyPropertyInputEnvelope
    set?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    disconnect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    delete?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    connect?: PropertyImageWhereUniqueInput | PropertyImageWhereUniqueInput[]
    update?: PropertyImageUpdateWithWhereUniqueWithoutPropertyInput | PropertyImageUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyImageUpdateManyWithWhereWithoutPropertyInput | PropertyImageUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
  }

  export type PropertyAmenityUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<PropertyAmenityCreateWithoutPropertyInput, PropertyAmenityUncheckedCreateWithoutPropertyInput> | PropertyAmenityCreateWithoutPropertyInput[] | PropertyAmenityUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: PropertyAmenityCreateOrConnectWithoutPropertyInput | PropertyAmenityCreateOrConnectWithoutPropertyInput[]
    upsert?: PropertyAmenityUpsertWithWhereUniqueWithoutPropertyInput | PropertyAmenityUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: PropertyAmenityCreateManyPropertyInputEnvelope
    set?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
    disconnect?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
    delete?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
    connect?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
    update?: PropertyAmenityUpdateWithWhereUniqueWithoutPropertyInput | PropertyAmenityUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: PropertyAmenityUpdateManyWithWhereWithoutPropertyInput | PropertyAmenityUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: PropertyAmenityScalarWhereInput | PropertyAmenityScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutPropertyImagesInput = {
    create?: XOR<PropertyCreateWithoutPropertyImagesInput, PropertyUncheckedCreateWithoutPropertyImagesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPropertyImagesInput
    connect?: PropertyWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutPropertyImagesNestedInput = {
    create?: XOR<PropertyCreateWithoutPropertyImagesInput, PropertyUncheckedCreateWithoutPropertyImagesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPropertyImagesInput
    upsert?: PropertyUpsertWithoutPropertyImagesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutPropertyImagesInput, PropertyUpdateWithoutPropertyImagesInput>, PropertyUncheckedUpdateWithoutPropertyImagesInput>
  }

  export type PropertyAmenityCreateNestedManyWithoutAmenityInput = {
    create?: XOR<PropertyAmenityCreateWithoutAmenityInput, PropertyAmenityUncheckedCreateWithoutAmenityInput> | PropertyAmenityCreateWithoutAmenityInput[] | PropertyAmenityUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: PropertyAmenityCreateOrConnectWithoutAmenityInput | PropertyAmenityCreateOrConnectWithoutAmenityInput[]
    createMany?: PropertyAmenityCreateManyAmenityInputEnvelope
    connect?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
  }

  export type PropertyAmenityUncheckedCreateNestedManyWithoutAmenityInput = {
    create?: XOR<PropertyAmenityCreateWithoutAmenityInput, PropertyAmenityUncheckedCreateWithoutAmenityInput> | PropertyAmenityCreateWithoutAmenityInput[] | PropertyAmenityUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: PropertyAmenityCreateOrConnectWithoutAmenityInput | PropertyAmenityCreateOrConnectWithoutAmenityInput[]
    createMany?: PropertyAmenityCreateManyAmenityInputEnvelope
    connect?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
  }

  export type PropertyAmenityUpdateManyWithoutAmenityNestedInput = {
    create?: XOR<PropertyAmenityCreateWithoutAmenityInput, PropertyAmenityUncheckedCreateWithoutAmenityInput> | PropertyAmenityCreateWithoutAmenityInput[] | PropertyAmenityUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: PropertyAmenityCreateOrConnectWithoutAmenityInput | PropertyAmenityCreateOrConnectWithoutAmenityInput[]
    upsert?: PropertyAmenityUpsertWithWhereUniqueWithoutAmenityInput | PropertyAmenityUpsertWithWhereUniqueWithoutAmenityInput[]
    createMany?: PropertyAmenityCreateManyAmenityInputEnvelope
    set?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
    disconnect?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
    delete?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
    connect?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
    update?: PropertyAmenityUpdateWithWhereUniqueWithoutAmenityInput | PropertyAmenityUpdateWithWhereUniqueWithoutAmenityInput[]
    updateMany?: PropertyAmenityUpdateManyWithWhereWithoutAmenityInput | PropertyAmenityUpdateManyWithWhereWithoutAmenityInput[]
    deleteMany?: PropertyAmenityScalarWhereInput | PropertyAmenityScalarWhereInput[]
  }

  export type PropertyAmenityUncheckedUpdateManyWithoutAmenityNestedInput = {
    create?: XOR<PropertyAmenityCreateWithoutAmenityInput, PropertyAmenityUncheckedCreateWithoutAmenityInput> | PropertyAmenityCreateWithoutAmenityInput[] | PropertyAmenityUncheckedCreateWithoutAmenityInput[]
    connectOrCreate?: PropertyAmenityCreateOrConnectWithoutAmenityInput | PropertyAmenityCreateOrConnectWithoutAmenityInput[]
    upsert?: PropertyAmenityUpsertWithWhereUniqueWithoutAmenityInput | PropertyAmenityUpsertWithWhereUniqueWithoutAmenityInput[]
    createMany?: PropertyAmenityCreateManyAmenityInputEnvelope
    set?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
    disconnect?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
    delete?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
    connect?: PropertyAmenityWhereUniqueInput | PropertyAmenityWhereUniqueInput[]
    update?: PropertyAmenityUpdateWithWhereUniqueWithoutAmenityInput | PropertyAmenityUpdateWithWhereUniqueWithoutAmenityInput[]
    updateMany?: PropertyAmenityUpdateManyWithWhereWithoutAmenityInput | PropertyAmenityUpdateManyWithWhereWithoutAmenityInput[]
    deleteMany?: PropertyAmenityScalarWhereInput | PropertyAmenityScalarWhereInput[]
  }

  export type PropertyCreateNestedOneWithoutPropertyAmenitiesInput = {
    create?: XOR<PropertyCreateWithoutPropertyAmenitiesInput, PropertyUncheckedCreateWithoutPropertyAmenitiesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPropertyAmenitiesInput
    connect?: PropertyWhereUniqueInput
  }

  export type AmenityCreateNestedOneWithoutPropertyAmenitiesInput = {
    create?: XOR<AmenityCreateWithoutPropertyAmenitiesInput, AmenityUncheckedCreateWithoutPropertyAmenitiesInput>
    connectOrCreate?: AmenityCreateOrConnectWithoutPropertyAmenitiesInput
    connect?: AmenityWhereUniqueInput
  }

  export type PropertyUpdateOneRequiredWithoutPropertyAmenitiesNestedInput = {
    create?: XOR<PropertyCreateWithoutPropertyAmenitiesInput, PropertyUncheckedCreateWithoutPropertyAmenitiesInput>
    connectOrCreate?: PropertyCreateOrConnectWithoutPropertyAmenitiesInput
    upsert?: PropertyUpsertWithoutPropertyAmenitiesInput
    connect?: PropertyWhereUniqueInput
    update?: XOR<XOR<PropertyUpdateToOneWithWhereWithoutPropertyAmenitiesInput, PropertyUpdateWithoutPropertyAmenitiesInput>, PropertyUncheckedUpdateWithoutPropertyAmenitiesInput>
  }

  export type AmenityUpdateOneRequiredWithoutPropertyAmenitiesNestedInput = {
    create?: XOR<AmenityCreateWithoutPropertyAmenitiesInput, AmenityUncheckedCreateWithoutPropertyAmenitiesInput>
    connectOrCreate?: AmenityCreateOrConnectWithoutPropertyAmenitiesInput
    upsert?: AmenityUpsertWithoutPropertyAmenitiesInput
    connect?: AmenityWhereUniqueInput
    update?: XOR<XOR<AmenityUpdateToOneWithWhereWithoutPropertyAmenitiesInput, AmenityUpdateWithoutPropertyAmenitiesInput>, AmenityUncheckedUpdateWithoutPropertyAmenitiesInput>
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

  export type NestedEnumPropertyTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[]
    notIn?: $Enums.PropertyType[]
    not?: NestedEnumPropertyTypeFilter<$PrismaModel> | $Enums.PropertyType
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
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

  export type NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PropertyType | EnumPropertyTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PropertyType[]
    notIn?: $Enums.PropertyType[]
    not?: NestedEnumPropertyTypeWithAggregatesFilter<$PrismaModel> | $Enums.PropertyType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPropertyTypeFilter<$PrismaModel>
    _max?: NestedEnumPropertyTypeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type PropertyCreateWithoutLandlordInput = {
    title: string
    description?: string | null
    address: string
    comuna: string
    region: string
    zipCode?: string | null
    propertyType: $Enums.PropertyType
    bedrooms: number
    bathrooms: number
    squareMeters?: number | null
    monthlyRent: Decimal | DecimalJsLike | number | string
    isAvailable?: boolean
    utilityBillUrl: string
    utilityBillValidated?: boolean
    rules?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    propertyImages?: PropertyImageCreateNestedManyWithoutPropertyInput
    propertyAmenities?: PropertyAmenityCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutLandlordInput = {
    id?: number
    title: string
    description?: string | null
    address: string
    comuna: string
    region: string
    zipCode?: string | null
    propertyType: $Enums.PropertyType
    bedrooms: number
    bathrooms: number
    squareMeters?: number | null
    monthlyRent: Decimal | DecimalJsLike | number | string
    isAvailable?: boolean
    utilityBillUrl: string
    utilityBillValidated?: boolean
    rules?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    propertyImages?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
    propertyAmenities?: PropertyAmenityUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutLandlordInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutLandlordInput, PropertyUncheckedCreateWithoutLandlordInput>
  }

  export type PropertyCreateManyLandlordInputEnvelope = {
    data: PropertyCreateManyLandlordInput | PropertyCreateManyLandlordInput[]
    skipDuplicates?: boolean
  }

  export type PropertyUpsertWithWhereUniqueWithoutLandlordInput = {
    where: PropertyWhereUniqueInput
    update: XOR<PropertyUpdateWithoutLandlordInput, PropertyUncheckedUpdateWithoutLandlordInput>
    create: XOR<PropertyCreateWithoutLandlordInput, PropertyUncheckedCreateWithoutLandlordInput>
  }

  export type PropertyUpdateWithWhereUniqueWithoutLandlordInput = {
    where: PropertyWhereUniqueInput
    data: XOR<PropertyUpdateWithoutLandlordInput, PropertyUncheckedUpdateWithoutLandlordInput>
  }

  export type PropertyUpdateManyWithWhereWithoutLandlordInput = {
    where: PropertyScalarWhereInput
    data: XOR<PropertyUpdateManyMutationInput, PropertyUncheckedUpdateManyWithoutLandlordInput>
  }

  export type PropertyScalarWhereInput = {
    AND?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    OR?: PropertyScalarWhereInput[]
    NOT?: PropertyScalarWhereInput | PropertyScalarWhereInput[]
    id?: IntFilter<"Property"> | number
    landlordId?: IntFilter<"Property"> | number
    title?: StringFilter<"Property"> | string
    description?: StringNullableFilter<"Property"> | string | null
    address?: StringFilter<"Property"> | string
    comuna?: StringFilter<"Property"> | string
    region?: StringFilter<"Property"> | string
    zipCode?: StringNullableFilter<"Property"> | string | null
    propertyType?: EnumPropertyTypeFilter<"Property"> | $Enums.PropertyType
    bedrooms?: IntFilter<"Property"> | number
    bathrooms?: IntFilter<"Property"> | number
    squareMeters?: FloatNullableFilter<"Property"> | number | null
    monthlyRent?: DecimalFilter<"Property"> | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFilter<"Property"> | boolean
    utilityBillUrl?: StringFilter<"Property"> | string
    utilityBillValidated?: BoolFilter<"Property"> | boolean
    rules?: StringNullableFilter<"Property"> | string | null
    latitude?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    longitude?: DecimalNullableFilter<"Property"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Property"> | Date | string
    updatedAt?: DateTimeFilter<"Property"> | Date | string
  }

  export type LandlordCreateWithoutPropertiesInput = {
    landlordRut: string
    landlordEmail: string
    landlordName: string
    password: string
    landlordCarnetUrl: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LandlordUncheckedCreateWithoutPropertiesInput = {
    id?: number
    landlordRut: string
    landlordEmail: string
    landlordName: string
    password: string
    landlordCarnetUrl: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LandlordCreateOrConnectWithoutPropertiesInput = {
    where: LandlordWhereUniqueInput
    create: XOR<LandlordCreateWithoutPropertiesInput, LandlordUncheckedCreateWithoutPropertiesInput>
  }

  export type PropertyImageCreateWithoutPropertyInput = {
    imageUrl: string
    displayOrder?: number
    altText?: string | null
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyImageUncheckedCreateWithoutPropertyInput = {
    id?: number
    imageUrl: string
    displayOrder?: number
    altText?: string | null
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyImageCreateOrConnectWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    create: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyImageCreateManyPropertyInputEnvelope = {
    data: PropertyImageCreateManyPropertyInput | PropertyImageCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type PropertyAmenityCreateWithoutPropertyInput = {
    createdAt?: Date | string
    amenity: AmenityCreateNestedOneWithoutPropertyAmenitiesInput
  }

  export type PropertyAmenityUncheckedCreateWithoutPropertyInput = {
    id?: number
    amenityId: number
    createdAt?: Date | string
  }

  export type PropertyAmenityCreateOrConnectWithoutPropertyInput = {
    where: PropertyAmenityWhereUniqueInput
    create: XOR<PropertyAmenityCreateWithoutPropertyInput, PropertyAmenityUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyAmenityCreateManyPropertyInputEnvelope = {
    data: PropertyAmenityCreateManyPropertyInput | PropertyAmenityCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type LandlordUpsertWithoutPropertiesInput = {
    update: XOR<LandlordUpdateWithoutPropertiesInput, LandlordUncheckedUpdateWithoutPropertiesInput>
    create: XOR<LandlordCreateWithoutPropertiesInput, LandlordUncheckedCreateWithoutPropertiesInput>
    where?: LandlordWhereInput
  }

  export type LandlordUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: LandlordWhereInput
    data: XOR<LandlordUpdateWithoutPropertiesInput, LandlordUncheckedUpdateWithoutPropertiesInput>
  }

  export type LandlordUpdateWithoutPropertiesInput = {
    landlordRut?: StringFieldUpdateOperationsInput | string
    landlordEmail?: StringFieldUpdateOperationsInput | string
    landlordName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    landlordCarnetUrl?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LandlordUncheckedUpdateWithoutPropertiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    landlordRut?: StringFieldUpdateOperationsInput | string
    landlordEmail?: StringFieldUpdateOperationsInput | string
    landlordName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    landlordCarnetUrl?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageUpsertWithWhereUniqueWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    update: XOR<PropertyImageUpdateWithoutPropertyInput, PropertyImageUncheckedUpdateWithoutPropertyInput>
    create: XOR<PropertyImageCreateWithoutPropertyInput, PropertyImageUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyImageUpdateWithWhereUniqueWithoutPropertyInput = {
    where: PropertyImageWhereUniqueInput
    data: XOR<PropertyImageUpdateWithoutPropertyInput, PropertyImageUncheckedUpdateWithoutPropertyInput>
  }

  export type PropertyImageUpdateManyWithWhereWithoutPropertyInput = {
    where: PropertyImageScalarWhereInput
    data: XOR<PropertyImageUpdateManyMutationInput, PropertyImageUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyImageScalarWhereInput = {
    AND?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
    OR?: PropertyImageScalarWhereInput[]
    NOT?: PropertyImageScalarWhereInput | PropertyImageScalarWhereInput[]
    id?: IntFilter<"PropertyImage"> | number
    propertyId?: IntFilter<"PropertyImage"> | number
    imageUrl?: StringFilter<"PropertyImage"> | string
    displayOrder?: IntFilter<"PropertyImage"> | number
    altText?: StringNullableFilter<"PropertyImage"> | string | null
    isPrimary?: BoolFilter<"PropertyImage"> | boolean
    createdAt?: DateTimeFilter<"PropertyImage"> | Date | string
    updatedAt?: DateTimeFilter<"PropertyImage"> | Date | string
  }

  export type PropertyAmenityUpsertWithWhereUniqueWithoutPropertyInput = {
    where: PropertyAmenityWhereUniqueInput
    update: XOR<PropertyAmenityUpdateWithoutPropertyInput, PropertyAmenityUncheckedUpdateWithoutPropertyInput>
    create: XOR<PropertyAmenityCreateWithoutPropertyInput, PropertyAmenityUncheckedCreateWithoutPropertyInput>
  }

  export type PropertyAmenityUpdateWithWhereUniqueWithoutPropertyInput = {
    where: PropertyAmenityWhereUniqueInput
    data: XOR<PropertyAmenityUpdateWithoutPropertyInput, PropertyAmenityUncheckedUpdateWithoutPropertyInput>
  }

  export type PropertyAmenityUpdateManyWithWhereWithoutPropertyInput = {
    where: PropertyAmenityScalarWhereInput
    data: XOR<PropertyAmenityUpdateManyMutationInput, PropertyAmenityUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertyAmenityScalarWhereInput = {
    AND?: PropertyAmenityScalarWhereInput | PropertyAmenityScalarWhereInput[]
    OR?: PropertyAmenityScalarWhereInput[]
    NOT?: PropertyAmenityScalarWhereInput | PropertyAmenityScalarWhereInput[]
    id?: IntFilter<"PropertyAmenity"> | number
    propertyId?: IntFilter<"PropertyAmenity"> | number
    amenityId?: IntFilter<"PropertyAmenity"> | number
    createdAt?: DateTimeFilter<"PropertyAmenity"> | Date | string
  }

  export type PropertyCreateWithoutPropertyImagesInput = {
    title: string
    description?: string | null
    address: string
    comuna: string
    region: string
    zipCode?: string | null
    propertyType: $Enums.PropertyType
    bedrooms: number
    bathrooms: number
    squareMeters?: number | null
    monthlyRent: Decimal | DecimalJsLike | number | string
    isAvailable?: boolean
    utilityBillUrl: string
    utilityBillValidated?: boolean
    rules?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    landlord: LandlordCreateNestedOneWithoutPropertiesInput
    propertyAmenities?: PropertyAmenityCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutPropertyImagesInput = {
    id?: number
    landlordId: number
    title: string
    description?: string | null
    address: string
    comuna: string
    region: string
    zipCode?: string | null
    propertyType: $Enums.PropertyType
    bedrooms: number
    bathrooms: number
    squareMeters?: number | null
    monthlyRent: Decimal | DecimalJsLike | number | string
    isAvailable?: boolean
    utilityBillUrl: string
    utilityBillValidated?: boolean
    rules?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    propertyAmenities?: PropertyAmenityUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutPropertyImagesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutPropertyImagesInput, PropertyUncheckedCreateWithoutPropertyImagesInput>
  }

  export type PropertyUpsertWithoutPropertyImagesInput = {
    update: XOR<PropertyUpdateWithoutPropertyImagesInput, PropertyUncheckedUpdateWithoutPropertyImagesInput>
    create: XOR<PropertyCreateWithoutPropertyImagesInput, PropertyUncheckedCreateWithoutPropertyImagesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutPropertyImagesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutPropertyImagesInput, PropertyUncheckedUpdateWithoutPropertyImagesInput>
  }

  export type PropertyUpdateWithoutPropertyImagesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    comuna?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    utilityBillUrl?: StringFieldUpdateOperationsInput | string
    utilityBillValidated?: BoolFieldUpdateOperationsInput | boolean
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    landlord?: LandlordUpdateOneRequiredWithoutPropertiesNestedInput
    propertyAmenities?: PropertyAmenityUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutPropertyImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    landlordId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    comuna?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    utilityBillUrl?: StringFieldUpdateOperationsInput | string
    utilityBillValidated?: BoolFieldUpdateOperationsInput | boolean
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyAmenities?: PropertyAmenityUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyAmenityCreateWithoutAmenityInput = {
    createdAt?: Date | string
    property: PropertyCreateNestedOneWithoutPropertyAmenitiesInput
  }

  export type PropertyAmenityUncheckedCreateWithoutAmenityInput = {
    id?: number
    propertyId: number
    createdAt?: Date | string
  }

  export type PropertyAmenityCreateOrConnectWithoutAmenityInput = {
    where: PropertyAmenityWhereUniqueInput
    create: XOR<PropertyAmenityCreateWithoutAmenityInput, PropertyAmenityUncheckedCreateWithoutAmenityInput>
  }

  export type PropertyAmenityCreateManyAmenityInputEnvelope = {
    data: PropertyAmenityCreateManyAmenityInput | PropertyAmenityCreateManyAmenityInput[]
    skipDuplicates?: boolean
  }

  export type PropertyAmenityUpsertWithWhereUniqueWithoutAmenityInput = {
    where: PropertyAmenityWhereUniqueInput
    update: XOR<PropertyAmenityUpdateWithoutAmenityInput, PropertyAmenityUncheckedUpdateWithoutAmenityInput>
    create: XOR<PropertyAmenityCreateWithoutAmenityInput, PropertyAmenityUncheckedCreateWithoutAmenityInput>
  }

  export type PropertyAmenityUpdateWithWhereUniqueWithoutAmenityInput = {
    where: PropertyAmenityWhereUniqueInput
    data: XOR<PropertyAmenityUpdateWithoutAmenityInput, PropertyAmenityUncheckedUpdateWithoutAmenityInput>
  }

  export type PropertyAmenityUpdateManyWithWhereWithoutAmenityInput = {
    where: PropertyAmenityScalarWhereInput
    data: XOR<PropertyAmenityUpdateManyMutationInput, PropertyAmenityUncheckedUpdateManyWithoutAmenityInput>
  }

  export type PropertyCreateWithoutPropertyAmenitiesInput = {
    title: string
    description?: string | null
    address: string
    comuna: string
    region: string
    zipCode?: string | null
    propertyType: $Enums.PropertyType
    bedrooms: number
    bathrooms: number
    squareMeters?: number | null
    monthlyRent: Decimal | DecimalJsLike | number | string
    isAvailable?: boolean
    utilityBillUrl: string
    utilityBillValidated?: boolean
    rules?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    landlord: LandlordCreateNestedOneWithoutPropertiesInput
    propertyImages?: PropertyImageCreateNestedManyWithoutPropertyInput
  }

  export type PropertyUncheckedCreateWithoutPropertyAmenitiesInput = {
    id?: number
    landlordId: number
    title: string
    description?: string | null
    address: string
    comuna: string
    region: string
    zipCode?: string | null
    propertyType: $Enums.PropertyType
    bedrooms: number
    bathrooms: number
    squareMeters?: number | null
    monthlyRent: Decimal | DecimalJsLike | number | string
    isAvailable?: boolean
    utilityBillUrl: string
    utilityBillValidated?: boolean
    rules?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    propertyImages?: PropertyImageUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertyCreateOrConnectWithoutPropertyAmenitiesInput = {
    where: PropertyWhereUniqueInput
    create: XOR<PropertyCreateWithoutPropertyAmenitiesInput, PropertyUncheckedCreateWithoutPropertyAmenitiesInput>
  }

  export type AmenityCreateWithoutPropertyAmenitiesInput = {
    name: string
    description?: string | null
    icon?: string | null
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AmenityUncheckedCreateWithoutPropertyAmenitiesInput = {
    id?: number
    name: string
    description?: string | null
    icon?: string | null
    category?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AmenityCreateOrConnectWithoutPropertyAmenitiesInput = {
    where: AmenityWhereUniqueInput
    create: XOR<AmenityCreateWithoutPropertyAmenitiesInput, AmenityUncheckedCreateWithoutPropertyAmenitiesInput>
  }

  export type PropertyUpsertWithoutPropertyAmenitiesInput = {
    update: XOR<PropertyUpdateWithoutPropertyAmenitiesInput, PropertyUncheckedUpdateWithoutPropertyAmenitiesInput>
    create: XOR<PropertyCreateWithoutPropertyAmenitiesInput, PropertyUncheckedCreateWithoutPropertyAmenitiesInput>
    where?: PropertyWhereInput
  }

  export type PropertyUpdateToOneWithWhereWithoutPropertyAmenitiesInput = {
    where?: PropertyWhereInput
    data: XOR<PropertyUpdateWithoutPropertyAmenitiesInput, PropertyUncheckedUpdateWithoutPropertyAmenitiesInput>
  }

  export type PropertyUpdateWithoutPropertyAmenitiesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    comuna?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    utilityBillUrl?: StringFieldUpdateOperationsInput | string
    utilityBillValidated?: BoolFieldUpdateOperationsInput | boolean
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    landlord?: LandlordUpdateOneRequiredWithoutPropertiesNestedInput
    propertyImages?: PropertyImageUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutPropertyAmenitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    landlordId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    comuna?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    utilityBillUrl?: StringFieldUpdateOperationsInput | string
    utilityBillValidated?: BoolFieldUpdateOperationsInput | boolean
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyImages?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type AmenityUpsertWithoutPropertyAmenitiesInput = {
    update: XOR<AmenityUpdateWithoutPropertyAmenitiesInput, AmenityUncheckedUpdateWithoutPropertyAmenitiesInput>
    create: XOR<AmenityCreateWithoutPropertyAmenitiesInput, AmenityUncheckedCreateWithoutPropertyAmenitiesInput>
    where?: AmenityWhereInput
  }

  export type AmenityUpdateToOneWithWhereWithoutPropertyAmenitiesInput = {
    where?: AmenityWhereInput
    data: XOR<AmenityUpdateWithoutPropertyAmenitiesInput, AmenityUncheckedUpdateWithoutPropertyAmenitiesInput>
  }

  export type AmenityUpdateWithoutPropertyAmenitiesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AmenityUncheckedUpdateWithoutPropertyAmenitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyCreateManyLandlordInput = {
    id?: number
    title: string
    description?: string | null
    address: string
    comuna: string
    region: string
    zipCode?: string | null
    propertyType: $Enums.PropertyType
    bedrooms: number
    bathrooms: number
    squareMeters?: number | null
    monthlyRent: Decimal | DecimalJsLike | number | string
    isAvailable?: boolean
    utilityBillUrl: string
    utilityBillValidated?: boolean
    rules?: string | null
    latitude?: Decimal | DecimalJsLike | number | string | null
    longitude?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyUpdateWithoutLandlordInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    comuna?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    utilityBillUrl?: StringFieldUpdateOperationsInput | string
    utilityBillValidated?: BoolFieldUpdateOperationsInput | boolean
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyImages?: PropertyImageUpdateManyWithoutPropertyNestedInput
    propertyAmenities?: PropertyAmenityUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateWithoutLandlordInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    comuna?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    utilityBillUrl?: StringFieldUpdateOperationsInput | string
    utilityBillValidated?: BoolFieldUpdateOperationsInput | boolean
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    propertyImages?: PropertyImageUncheckedUpdateManyWithoutPropertyNestedInput
    propertyAmenities?: PropertyAmenityUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertyUncheckedUpdateManyWithoutLandlordInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    comuna?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    zipCode?: NullableStringFieldUpdateOperationsInput | string | null
    propertyType?: EnumPropertyTypeFieldUpdateOperationsInput | $Enums.PropertyType
    bedrooms?: IntFieldUpdateOperationsInput | number
    bathrooms?: IntFieldUpdateOperationsInput | number
    squareMeters?: NullableFloatFieldUpdateOperationsInput | number | null
    monthlyRent?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    utilityBillUrl?: StringFieldUpdateOperationsInput | string
    utilityBillValidated?: BoolFieldUpdateOperationsInput | boolean
    rules?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    longitude?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageCreateManyPropertyInput = {
    id?: number
    imageUrl: string
    displayOrder?: number
    altText?: string | null
    isPrimary?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PropertyAmenityCreateManyPropertyInput = {
    id?: number
    amenityId: number
    createdAt?: Date | string
  }

  export type PropertyImageUpdateWithoutPropertyInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyImageUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    altText?: NullableStringFieldUpdateOperationsInput | string | null
    isPrimary?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyAmenityUpdateWithoutPropertyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    amenity?: AmenityUpdateOneRequiredWithoutPropertyAmenitiesNestedInput
  }

  export type PropertyAmenityUncheckedUpdateWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amenityId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyAmenityUncheckedUpdateManyWithoutPropertyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amenityId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyAmenityCreateManyAmenityInput = {
    id?: number
    propertyId: number
    createdAt?: Date | string
  }

  export type PropertyAmenityUpdateWithoutAmenityInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property?: PropertyUpdateOneRequiredWithoutPropertyAmenitiesNestedInput
  }

  export type PropertyAmenityUncheckedUpdateWithoutAmenityInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertyAmenityUncheckedUpdateManyWithoutAmenityInput = {
    id?: IntFieldUpdateOperationsInput | number
    propertyId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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