#!/bin/bash
for module in ./ignition/modules/*.ts; do
  bun hardhat --show-stack-traces ignition deploy "$module" --network ganache
done