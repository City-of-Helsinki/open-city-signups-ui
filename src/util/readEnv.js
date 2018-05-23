export default function(name) {
  if (process.env[name]) {
    return process.env[name];
  }
  throw Error(`Could not read env (${name})`);
}
