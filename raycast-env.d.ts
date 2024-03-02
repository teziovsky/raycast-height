/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** API Results Limit - Limit the number of results returned by the API. */
  "apiResultsLimit": "100" | "200" | "300" | "400" | "500"
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search_lists` command */
  export type SearchLists = ExtensionPreferences & {}
  /** Preferences accessible in the `create_list` command */
  export type CreateList = ExtensionPreferences & {}
  /** Preferences accessible in the `search_tasks` command */
  export type SearchTasks = ExtensionPreferences & {}
  /** Preferences accessible in the `create_task` command */
  export type CreateTask = ExtensionPreferences & {}
  /** Preferences accessible in the `assigned_tasks` command */
  export type AssignedTasks = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search_lists` command */
  export type SearchLists = {}
  /** Arguments passed to the `create_list` command */
  export type CreateList = {}
  /** Arguments passed to the `search_tasks` command */
  export type SearchTasks = {}
  /** Arguments passed to the `create_task` command */
  export type CreateTask = {}
  /** Arguments passed to the `assigned_tasks` command */
  export type AssignedTasks = {}
}

