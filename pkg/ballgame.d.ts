/* tslint:disable */
/* eslint-disable */
/**
* @param {number} x_mouse_vec
* @param {number} y_mouse_vec
* @param {number} width
* @param {number} height
* @param {CanvasRenderingContext2D} context
* @param {number} mode
*/
export function run_sim(x_mouse_vec: number, y_mouse_vec: number, width: number, height: number, context: CanvasRenderingContext2D, mode: number): void;
/**
*/
export function add_ball(): void;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly run_sim: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly add_ball: () => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_exn_store: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
