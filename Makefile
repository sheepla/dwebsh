PREFIX ?= /usr/local
BINDIR := $(PREFIX)/bin

NAME := websh-deno
SRC := bin/$(NAME)
DEST := $(BINDIR)/$(NAME)

.PHONY: lint
lint:
	deno lint

.PHONY: fmt
fmt:
	deno fmt

.PHONY: build
build:
	deno compile --allow-net --allow-write --allow-read -o $(SRC) cli.ts 

.PHONY: install
install:
	install -Dm 0755 $(SRC) $(DEST)

.PHONY: uninstall
uninstall:
	rm -f $(DEST)

.PHONY: clean
clean:
	rm ./bin/*
