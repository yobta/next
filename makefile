dev:
	pnpm run dev

lint:
	pnpm run lint

pretty:
	pnpm run prettify

test:
	pnpm run test:watch

typecheck:
	pnpm run typecheck

check:
	make typecheck
	make lint
	pnpm run test

up:
	pnpm update
	pnpm i

build:
	make check
	pnpm run build

i:
	rm -rf node_modules
	pnpm i
