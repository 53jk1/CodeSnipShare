.PHONY: install build test start

install:
	cd backend && npm install
	cd frontend && npm install

build:
	cd frontend && npm run build

test:
	cd backend && npm test
	cd frontend && npm test

start:
	cd backend && npm start &
	cd frontend && npm start &
