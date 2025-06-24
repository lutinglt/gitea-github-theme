type Primitive = string | boolean | number | null | undefined;
type Tokens = { [key: string]: string | Tokens };

export type WithOptionalLayer<T extends Tokens> = T & { "@layer"?: string };

export type MapLeafNodes<Obj, LeafType> = {
  [Prop in keyof Obj]: Obj[Prop] extends Primitive
    ? LeafType
    : Obj[Prop] extends Record<string | number, unknown>
      ? MapLeafNodes<Obj[Prop], LeafType>
      : never;
};
