doc:
https://www.npmjs.com/package/ts-node
comandos:
# Locally in your project.
npm install -D typescript
npm install -D ts-node

# Or globally with TypeScript.
npm install -g typescript
npm install -g ts-node

# Depending on configuration, you may also need these
npm install -D tslib @types/node

tsc -v
tsc index.ts
ts-node index.ts