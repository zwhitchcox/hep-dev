export { IAtom, Atom, BaseAtom };
export { IObservable, IDepTreeNode };
export { Reaction, IReactionPublic };
export { IDerivation, untracked, IDerivationState };
export { useStrict, isStrictModeEnabled };
export { spy };
export { transaction };
export { IComputedValue };
export { asReference, asFlat, asStructure, asMap };
export { IInterceptable, IInterceptor };
export { IListenable };
export { IObjectWillChange, IObjectChange, isObservableObject };
export { IValueWillChange, IObservableValue };
export { IObservableArray, IArrayWillChange, IArrayWillSplice, IArrayChange, IArraySplice, isObservableArray, fastArray };
export { IKeyValueMap, ObservableMap, IMapEntries, IMapEntry, IMapWillChange, IMapChange, isObservableMap, map };
export { observable };
export { computed, IComputedValueOptions };
export { isObservable };
export { extendObservable };
export { observe };
export { intercept };
export { autorun, autorunAsync, autorunUntil, when, reaction };
export { action, isAction, runInAction };
export { expr };
export { toJSON, toJS };
export { ITransformer, createTransformer };
export { whyRun };
export { Lambda };
export { Iterator };
export { SimpleEventEmitter, ISimpleEventListener };
export { IObserverTree, IDependencyTree };
export declare const extras: {
    allowStateChanges: <T>(allowStateChanges: boolean, func: () => T) => T;
    getAtom: (thing: any, property?: string) => IDepTreeNode;
    getDebugName: (thing: any, property?: string) => string;
    getDependencyTree: (thing: any, property?: string) => IDependencyTree;
    getObserverTree: (thing: any, property?: string) => IObserverTree;
    isComputingDerivation: () => boolean;
    isSpyEnabled: () => boolean;
    resetGlobalState: () => void;
    spyReport: (event: any) => boolean;
    spyReportEnd: (change?: any) => void;
    spyReportStart: (event: any) => void;
    trackTransitions: (onReport?: (c: any) => void) => Lambda;
};
export declare const _: {
    getAdministration: (thing: any, property?: string) => any;
    resetGlobalState: () => void;
};
declare function action<A1, R, T extends (a1: A1) => R>(fn: T): T;
declare function action<A1, A2, R, T extends (a1: A1, a2: A2) => R>(fn: T): T;
declare function action<A1, A2, A3, R, T extends (a1: A1, a2: A2, a3: A3) => R>(fn: T): T;
declare function action<A1, A2, A3, A4, R, T extends (a1: A1, a2: A2, a3: A3, a4: A4) => R>(fn: T): T;
declare function action<A1, R, T extends (a1: A1) => R>(name: string, fn: T): T;
declare function action<A1, A2, R, T extends (a1: A1, a2: A2) => R>(name: string, fn: T): T;
declare function action<A1, A2, A3, R, T extends (a1: A1, a2: A2, a3: A3) => R>(name: string, fn: T): T;
declare function action<A1, A2, A3, A4, R, T extends (a1: A1, a2: A2, a3: A3, a4: A4) => R>(name: string, fn: T): T;
declare function action<T extends Function>(fn: T): T;
declare function action<T extends Function>(name: string, fn: T): T;
declare function action(customName: string): (target: Object, key: string, baseDescriptor?: PropertyDescriptor) => void;
declare function action(target: Object, propertyKey: string, descriptor?: PropertyDescriptor): void;
declare function runInAction<T>(block: () => T, scope?: any): T;
declare function runInAction<T>(name: string, block: () => T, scope?: any): T;
declare function isAction(thing: any): boolean;
declare function autorun(view: (r: IReactionPublic) => void, scope?: any): any;
declare function autorun(name: string, view: (r: IReactionPublic) => void, scope?: any): any;
declare function when(name: string, predicate: () => boolean, effect: Lambda, scope?: any): any;
declare function when(predicate: () => boolean, effect: Lambda, scope?: any): any;
declare function autorunUntil(predicate: () => boolean, effect: (r: IReactionPublic) => void, scope?: any): any;
declare function autorunAsync(name: string, func: (r: IReactionPublic) => void, delay?: number, scope?: any): any;
declare function autorunAsync(func: (r: IReactionPublic) => void, delay?: number, scope?: any): any;
declare function reaction<T>(name: string, expression: () => T, effect: (arg: T, r: IReactionPublic) => void, fireImmediately?: boolean, delay?: number, scope?: any): any;
declare function reaction<T>(expression: () => T, effect: (arg: T, r: IReactionPublic) => void, fireImmediately?: boolean, delay?: number, scope?: any): any;
interface IComputedValueOptions {
    asStructure: boolean;
}
declare function computed<T>(func: () => T, setter: (value: T) => void): IComputedValue<T>;
declare function computed<T>(func: () => T, scope?: any): IComputedValue<T>;
declare function computed(opts: IComputedValueOptions): (target: Object, key: string, baseDescriptor?: PropertyDescriptor) => void;
declare function computed(target: Object, key: string | symbol, baseDescriptor?: PropertyDescriptor): void;
declare type ITransformer<A, B> = (object: A) => B;
declare function createTransformer<A, B>(transformer: ITransformer<A, B>, onCleanup?: (resultObject: B, sourceObject?: A) => void): ITransformer<A, B>;
declare function expr<T>(expr: () => T, scope?: any): T;
declare function extendObservable<A extends Object, B extends Object>(target: A, ...properties: B[]): A & B;
interface IDependencyTree {
    name: string;
    dependencies?: IDependencyTree[];
}
interface IObserverTree {
    name: string;
    observers?: IObserverTree[];
}
declare function intercept<T>(value: IObservableValue<T>, handler: IInterceptor<IValueWillChange<T>>): Lambda;
declare function intercept<T>(observableArray: IObservableArray<T>, handler: IInterceptor<IArrayWillChange<T> | IArrayWillSplice<T>>): Lambda;
declare function intercept<T>(observableMap: ObservableMap<T>, handler: IInterceptor<IMapWillChange<T>>): Lambda;
declare function intercept<T>(observableMap: ObservableMap<T>, property: string, handler: IInterceptor<IValueWillChange<T>>): Lambda;
declare function intercept(object: Object, handler: IInterceptor<IObjectWillChange>): Lambda;
declare function intercept(object: Object, property: string, handler: IInterceptor<IValueWillChange<any>>): Lambda;
declare function isObservable(value: any, property?: string): boolean;
declare function observable<T>(): IObservableValue<T>;
declare function observable(target: Object, key: string, baseDescriptor?: PropertyDescriptor): any;
declare function observable<T>(value: T[]): IObservableArray<T>;
declare function observable<T, S extends Object>(value: () => T, thisArg?: S): IObservableValue<T>;
declare function observable<T extends string | number | boolean | Date | RegExp | Function | void>(value: T): IObservableValue<T>;
declare function observable<T extends Object>(value: T): T;
declare function observe<T>(value: IObservableValue<T> | IComputedValue<T>, listener: (newValue: T, oldValue: T) => void, fireImmediately?: boolean): Lambda;
declare function observe<T>(observableArray: IObservableArray<T>, listener: (change: IArrayChange<T> | IArraySplice<T>) => void, fireImmediately?: boolean): Lambda;
declare function observe<T>(observableMap: ObservableMap<T>, listener: (change: IMapChange<T>) => void, fireImmediately?: boolean): Lambda;
declare function observe<T>(observableMap: ObservableMap<T>, property: string, listener: (newValue: T, oldValue: T) => void, fireImmediately?: boolean): Lambda;
declare function observe(object: Object, listener: (change: IObjectChange) => void, fireImmediately?: boolean): Lambda;
declare function observe(object: Object, property: string, listener: (newValue: any, oldValue: any) => void, fireImmediately?: boolean): Lambda;
declare function toJS(source: any, detectCycles?: boolean, __alreadySeen?: [any, any][]): any;
declare function toJSON(source: any, detectCycles?: boolean, __alreadySeen?: [any, any][]): any;
declare function whyRun(thing?: any, prop?: string): string;
declare function useStrict(): boolean;
declare function useStrict(strict: boolean): any;
declare function isStrictModeEnabled(): boolean;
interface IAtom extends IObservable {
}
declare class BaseAtom implements IAtom {
    name: string;
    isPendingUnobservation: boolean;
    observers: any[];
    observersIndexes: {};
    diffValue: number;
    lastAccessedBy: number;
    lowestObserverState: IDerivationState;
    constructor(name?: string);
    onBecomeUnobserved(): void;
    reportObserved(): void;
    reportChanged(): void;
    toString(): string;
}
declare class Atom extends BaseAtom implements IAtom {
    name: string;
    onBecomeObservedHandler: () => void;
    onBecomeUnobservedHandler: () => void;
    isPendingUnobservation: boolean;
    isBeingTracked: boolean;
    constructor(name?: string, onBecomeObservedHandler?: () => void, onBecomeUnobservedHandler?: () => void);
    reportObserved(): boolean;
    onBecomeUnobserved(): void;
}
interface IComputedValue<T> {
    get(): T;
    set(value: T): void;
    observe(listener: (newValue: T, oldValue: T) => void, fireImmediately?: boolean): Lambda;
}
declare enum IDerivationState {
    NOT_TRACKING = -1,
    UP_TO_DATE = 0,
    POSSIBLY_STALE = 1,
    STALE = 2,
}
interface IDerivation extends IDepTreeNode {
    observing: IObservable[];
    newObserving: IObservable[];
    dependenciesState: IDerivationState;
    runId: number;
    unboundDepsCount: number;
    __mapid: string;
    onBecomeStale(): any;
    recoverFromError(): any;
}
declare function untracked<T>(action: () => T): T;
interface IDepTreeNode {
    name: string;
    observing?: IObservable[];
}
interface IObservable extends IDepTreeNode {
    diffValue: number;
    lastAccessedBy: number;
    lowestObserverState: IDerivationState;
    isPendingUnobservation: boolean;
    observers: IDerivation[];
    observersIndexes: {};
    onBecomeUnobserved(): any;
}
interface IReactionPublic {
    dispose: () => void;
}
declare class Reaction implements IDerivation, IReactionPublic {
    name: string;
    private onInvalidate;
    observing: any[];
    newObserving: any[];
    dependenciesState: IDerivationState;
    diffValue: number;
    runId: number;
    unboundDepsCount: number;
    __mapid: string;
    isDisposed: boolean;
    _isScheduled: boolean;
    _isTrackPending: boolean;
    _isRunning: boolean;
    constructor(name: string, onInvalidate: () => void);
    onBecomeStale(): void;
    schedule(): void;
    isScheduled(): boolean;
    runReaction(): void;
    track(fn: () => void): void;
    recoverFromError(): void;
    dispose(): void;
    getDisposer(): Lambda & {
        $mosbservable: Reaction;
    };
    toString(): string;
    whyRun(): string;
}
declare function spy(listener: (change: any) => void): Lambda;
declare function transaction<T>(action: () => T, thisArg?: any, report?: boolean): T;
declare type IInterceptor<T> = (change: T) => T;
interface IInterceptable<T> {
    interceptors: IInterceptor<T>[];
    intercept(handler: IInterceptor<T>): Lambda;
}
interface IListenable {
    changeListeners: Function[];
    observe(handler: (change: any, oldValue?: any) => void, fireImmediately?: boolean): Lambda;
}
declare function asReference<T>(value: T): T;
declare function asStructure<T>(value: T): T;
declare function asFlat<T>(value: T): T;
declare function asMap(): ObservableMap<any>;
declare function asMap<T>(): ObservableMap<T>;
declare function asMap<T>(entries: IMapEntries<T>, modifierFunc?: Function): ObservableMap<T>;
declare function asMap<T>(data: IKeyValueMap<T>, modifierFunc?: Function): ObservableMap<T>;
interface IObservableArray<T> extends Array<T> {
    spliceWithArray(index: number, deleteCount?: number, newItems?: T[]): T[];
    observe(listener: (changeData: IArrayChange<T> | IArraySplice<T>) => void, fireImmediately?: boolean): Lambda;
    intercept<T>(handler: IInterceptor<IArrayChange<T> | IArraySplice<T>>): Lambda;
    clear(): T[];
    peek(): T[];
    replace(newItems: T[]): T[];
    find(predicate: (item: T, index: number, array: IObservableArray<T>) => boolean, thisArg?: any, fromIndex?: number): T;
    remove(value: T): boolean;
}
interface IArrayChange<T> {
    type: "update";
    object: IObservableArray<T>;
    index: number;
    newValue: T;
    oldValue: T;
}
interface IArraySplice<T> {
    type: "splice";
    object: IObservableArray<T>;
    index: number;
    added: T[];
    addedCount: number;
    removed: T[];
    removedCount: number;
}
interface IArrayWillChange<T> {
    type: "update";
    object: IObservableArray<T>;
    index: number;
    newValue: T;
}
interface IArrayWillSplice<T> {
    type: "splice";
    object: IObservableArray<T>;
    index: number;
    added: T[];
    removedCount: number;
}
declare function fastArray<V>(initialValues?: V[]): IObservableArray<V>;
declare function isObservableArray(thing: any): thing is IObservableArray<any>;
interface IKeyValueMap<V> {
    [key: string]: V;
}
declare type IMapEntry<V> = [string, V];
declare type IMapEntries<V> = IMapEntry<V>[];
interface IMapChange<T> {
    object: ObservableMap<T>;
    type: "update" | "add" | "delete";
    name: string;
    newValue?: any;
    oldValue?: any;
}
interface IMapWillChange<T> {
    object: ObservableMap<T>;
    type: "update" | "add" | "delete";
    name: string;
    newValue?: any;
}
declare class ObservableMap<V> implements IInterceptable<IMapWillChange<V>>, IListenable {
    $mobx: {};
    private _data;
    private _hasMap;
    private _valueMode;
    name: string;
    private _keys;
    interceptors: any;
    changeListeners: any;
    constructor(initialData?: IMapEntries<V> | IKeyValueMap<V>, valueModeFunc?: Function);
    private _has(key);
    has(key: string): boolean;
    set(key: string, value: V): void;
    delete(key: string): boolean;
    private _updateHasMapEntry(key, value);
    private _updateValue(name, newValue);
    private _addValue(name, newValue);
    get(key: string): V;
    keys(): string[] & Iterator<string>;
    values(): V[] & Iterator<V>;
    entries(): IMapEntries<V> & Iterator<IMapEntry<V>>;
    forEach(callback: (value: V, key: string, object: IKeyValueMap<V>) => void, thisArg?: any): void;
    merge(other: ObservableMap<V> | IKeyValueMap<V>): ObservableMap<V>;
    clear(): void;
    size: number;
    toJS(): IKeyValueMap<V>;
    toJs(): IKeyValueMap<V>;
    toJSON(): IKeyValueMap<V>;
    private isValidKey(key);
    private assertValidKey(key);
    toString(): string;
    observe(listener: (changes: IMapChange<V>) => void, fireImmediately?: boolean): Lambda;
    intercept(handler: IInterceptor<IMapWillChange<V>>): Lambda;
}
declare function map<V>(initialValues?: IMapEntries<V> | IKeyValueMap<V>, valueModifier?: Function): ObservableMap<V>;
declare function isObservableMap(thing: any): thing is ObservableMap<any>;
interface IObjectChange {
    name: string;
    object: any;
    type: "update" | "add";
    oldValue?: any;
    newValue: any;
}
interface IObjectWillChange {
    object: any;
    type: "update" | "add";
    name: string;
    newValue: any;
}
declare function isObservableObject(thing: any): boolean;
interface IValueWillChange<T> {
    object: any;
    type: "update";
    newValue: T;
}
interface IObservableValue<T> {
    get(): T;
    set(value: T): void;
    intercept(handler: IInterceptor<IValueWillChange<T>>): Lambda;
    observe(listener: (newValue: T, oldValue: T) => void, fireImmediately?: boolean): Lambda;
}
interface Iterator<T> {
    next(): {
        done: boolean;
        value?: T;
    };
}
declare type ISimpleEventListener = {
    (...data: any[]): void;
};
declare class SimpleEventEmitter {
    listeners: ISimpleEventListener[];
    constructor();
    emit(...data: any[]): any;
    on(listener: ISimpleEventListener): Lambda;
    once(listener: ISimpleEventListener): Lambda;
}
interface Lambda {
    (): void;
    name?: string;
}
