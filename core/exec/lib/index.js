"use strict";

const path = require("path");
const Package = require("@dada-fe-cli/package");
const log = require("@dada-fe-cli/log");
const { exec: spawn } = require("@dada-fe-cli/utils");

async function exec() {
  try {
    // 在当前进程中调用
    // require(rootFile).call(null, Array.from(arguments));
    // 在node子进程中调用
    const args = Array.from(arguments);
    const cmd = args[args.length - 1];
    const o = Object.create(null);
    Object.keys(cmd).forEach((key) => {
      if (cmd.hasOwnProperty(key) && !key.startsWith("_") && key !== "parent") {
        o[key] = cmd[key];
      }
    });
    args[args.length - 1] = o;
    const code = `require('@dada-fe-cli/init').call(null, ${JSON.stringify(
      args
    )})`;
    const child = spawn("node", ["-e", code], {
      cwd: process.cwd(),
      stdio: "inherit",
    });
    child.on("error", (e) => {
      log.error(e.message);
      process.exit(1);
    });
    child.on("exit", (e) => {
      log.verbose("命令执行成功:" + e);
      process.exit(e);
    });
  } catch (e) {
    log.error(e.message);
  }
}

module.exports = exec;
