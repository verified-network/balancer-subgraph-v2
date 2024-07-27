// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class PoolCreated extends ethereum.Event {
  get params(): PoolCreated__Params {
    return new PoolCreated__Params(this);
  }
}

export class PoolCreated__Params {
  _event: PoolCreated;

  constructor(event: PoolCreated) {
    this._event = event;
  }

  get pool(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ERC4626LinearPoolFactory__getCreationCodeContractsResult {
  value0: Address;
  value1: Address;

  constructor(value0: Address, value1: Address) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    return map;
  }
}

export class ERC4626LinearPoolFactory__getPauseConfigurationResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class ERC4626LinearPoolFactory extends ethereum.SmartContract {
  static bind(address: Address): ERC4626LinearPoolFactory {
    return new ERC4626LinearPoolFactory("ERC4626LinearPoolFactory", address);
  }

  create(
    name: string,
    symbol: string,
    mainToken: Address,
    wrappedToken: Address,
    upperTarget: BigInt,
    swapFeePercentage: BigInt,
    owner: Address
  ): Address {
    let result = super.call(
      "create",
      "create(string,string,address,address,uint256,uint256,address):(address)",
      [
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(symbol),
        ethereum.Value.fromAddress(mainToken),
        ethereum.Value.fromAddress(wrappedToken),
        ethereum.Value.fromUnsignedBigInt(upperTarget),
        ethereum.Value.fromUnsignedBigInt(swapFeePercentage),
        ethereum.Value.fromAddress(owner)
      ]
    );

    return result[0].toAddress();
  }

  try_create(
    name: string,
    symbol: string,
    mainToken: Address,
    wrappedToken: Address,
    upperTarget: BigInt,
    swapFeePercentage: BigInt,
    owner: Address
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "create",
      "create(string,string,address,address,uint256,uint256,address):(address)",
      [
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(symbol),
        ethereum.Value.fromAddress(mainToken),
        ethereum.Value.fromAddress(wrappedToken),
        ethereum.Value.fromUnsignedBigInt(upperTarget),
        ethereum.Value.fromUnsignedBigInt(swapFeePercentage),
        ethereum.Value.fromAddress(owner)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getCreationCode(): Bytes {
    let result = super.call("getCreationCode", "getCreationCode():(bytes)", []);

    return result[0].toBytes();
  }

  try_getCreationCode(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getCreationCode",
      "getCreationCode():(bytes)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getCreationCodeContracts(): ERC4626LinearPoolFactory__getCreationCodeContractsResult {
    let result = super.call(
      "getCreationCodeContracts",
      "getCreationCodeContracts():(address,address)",
      []
    );

    return new ERC4626LinearPoolFactory__getCreationCodeContractsResult(
      result[0].toAddress(),
      result[1].toAddress()
    );
  }

  try_getCreationCodeContracts(): ethereum.CallResult<
    ERC4626LinearPoolFactory__getCreationCodeContractsResult
  > {
    let result = super.tryCall(
      "getCreationCodeContracts",
      "getCreationCodeContracts():(address,address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ERC4626LinearPoolFactory__getCreationCodeContractsResult(
        value[0].toAddress(),
        value[1].toAddress()
      )
    );
  }

  getPauseConfiguration(): ERC4626LinearPoolFactory__getPauseConfigurationResult {
    let result = super.call(
      "getPauseConfiguration",
      "getPauseConfiguration():(uint256,uint256)",
      []
    );

    return new ERC4626LinearPoolFactory__getPauseConfigurationResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getPauseConfiguration(): ethereum.CallResult<
    ERC4626LinearPoolFactory__getPauseConfigurationResult
  > {
    let result = super.tryCall(
      "getPauseConfiguration",
      "getPauseConfiguration():(uint256,uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new ERC4626LinearPoolFactory__getPauseConfigurationResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  getVault(): Address {
    let result = super.call("getVault", "getVault():(address)", []);

    return result[0].toAddress();
  }

  try_getVault(): ethereum.CallResult<Address> {
    let result = super.tryCall("getVault", "getVault():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  isPoolFromFactory(pool: Address): boolean {
    let result = super.call(
      "isPoolFromFactory",
      "isPoolFromFactory(address):(bool)",
      [ethereum.Value.fromAddress(pool)]
    );

    return result[0].toBoolean();
  }

  try_isPoolFromFactory(pool: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isPoolFromFactory",
      "isPoolFromFactory(address):(bool)",
      [ethereum.Value.fromAddress(pool)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get vault(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateCall extends ethereum.Call {
  get inputs(): CreateCall__Inputs {
    return new CreateCall__Inputs(this);
  }

  get outputs(): CreateCall__Outputs {
    return new CreateCall__Outputs(this);
  }
}

export class CreateCall__Inputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get symbol(): string {
    return this._call.inputValues[1].value.toString();
  }

  get mainToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get wrappedToken(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get upperTarget(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get swapFeePercentage(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
  }

  get owner(): Address {
    return this._call.inputValues[6].value.toAddress();
  }
}

export class CreateCall__Outputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}
