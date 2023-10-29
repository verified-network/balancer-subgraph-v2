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

export class FactoryDisabled extends ethereum.Event {
  get params(): FactoryDisabled__Params {
    return new FactoryDisabled__Params(this);
  }
}

export class FactoryDisabled__Params {
  _event: FactoryDisabled;

  constructor(event: FactoryDisabled) {
    this._event = event;
  }
}

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

export class OffchainSecondariesPoolFactory__getCreationCodeContractsResult {
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

export class OffchainSecondariesPoolFactory__getPauseConfigurationResult {
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

export class OffchainSecondariesPoolFactory extends ethereum.SmartContract {
  static bind(address: Address): OffchainSecondariesPoolFactory {
    return new OffchainSecondariesPoolFactory(
      "OffchainSecondariesPoolFactory",
      address
    );
  }

  create(
    name: string,
    symbol: string,
    security: Address,
    currency: Address,
    maxAmountsIn: BigInt,
    tradeFeePercentage: BigInt
  ): Address {
    let result = super.call(
      "create",
      "create(string,string,address,address,uint256,uint256):(address)",
      [
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(symbol),
        ethereum.Value.fromAddress(security),
        ethereum.Value.fromAddress(currency),
        ethereum.Value.fromUnsignedBigInt(maxAmountsIn),
        ethereum.Value.fromUnsignedBigInt(tradeFeePercentage)
      ]
    );

    return result[0].toAddress();
  }

  try_create(
    name: string,
    symbol: string,
    security: Address,
    currency: Address,
    maxAmountsIn: BigInt,
    tradeFeePercentage: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "create",
      "create(string,string,address,address,uint256,uint256):(address)",
      [
        ethereum.Value.fromString(name),
        ethereum.Value.fromString(symbol),
        ethereum.Value.fromAddress(security),
        ethereum.Value.fromAddress(currency),
        ethereum.Value.fromUnsignedBigInt(maxAmountsIn),
        ethereum.Value.fromUnsignedBigInt(tradeFeePercentage)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getActionId(selector: Bytes): Bytes {
    let result = super.call("getActionId", "getActionId(bytes4):(bytes32)", [
      ethereum.Value.fromFixedBytes(selector)
    ]);

    return result[0].toBytes();
  }

  try_getActionId(selector: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall("getActionId", "getActionId(bytes4):(bytes32)", [
      ethereum.Value.fromFixedBytes(selector)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getAuthorizer(): Address {
    let result = super.call("getAuthorizer", "getAuthorizer():(address)", []);

    return result[0].toAddress();
  }

  try_getAuthorizer(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getAuthorizer",
      "getAuthorizer():(address)",
      []
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

  getCreationCodeContracts(): OffchainSecondariesPoolFactory__getCreationCodeContractsResult {
    let result = super.call(
      "getCreationCodeContracts",
      "getCreationCodeContracts():(address,address)",
      []
    );

    return new OffchainSecondariesPoolFactory__getCreationCodeContractsResult(
      result[0].toAddress(),
      result[1].toAddress()
    );
  }

  try_getCreationCodeContracts(): ethereum.CallResult<
    OffchainSecondariesPoolFactory__getCreationCodeContractsResult
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
      new OffchainSecondariesPoolFactory__getCreationCodeContractsResult(
        value[0].toAddress(),
        value[1].toAddress()
      )
    );
  }

  getPauseConfiguration(): OffchainSecondariesPoolFactory__getPauseConfigurationResult {
    let result = super.call(
      "getPauseConfiguration",
      "getPauseConfiguration():(uint256,uint256)",
      []
    );

    return new OffchainSecondariesPoolFactory__getPauseConfigurationResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_getPauseConfiguration(): ethereum.CallResult<
    OffchainSecondariesPoolFactory__getPauseConfigurationResult
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
      new OffchainSecondariesPoolFactory__getPauseConfigurationResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  getProtocolFeePercentagesProvider(): Address {
    let result = super.call(
      "getProtocolFeePercentagesProvider",
      "getProtocolFeePercentagesProvider():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_getProtocolFeePercentagesProvider(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getProtocolFeePercentagesProvider",
      "getProtocolFeePercentagesProvider():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
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

  isDisabled(): boolean {
    let result = super.call("isDisabled", "isDisabled():(bool)", []);

    return result[0].toBoolean();
  }

  try_isDisabled(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isDisabled", "isDisabled():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
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

  get protocolFeeProvider(): Address {
    return this._call.inputValues[1].value.toAddress();
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

  get security(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get currency(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get maxAmountsIn(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get tradeFeePercentage(): BigInt {
    return this._call.inputValues[5].value.toBigInt();
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

export class DisableCall extends ethereum.Call {
  get inputs(): DisableCall__Inputs {
    return new DisableCall__Inputs(this);
  }

  get outputs(): DisableCall__Outputs {
    return new DisableCall__Outputs(this);
  }
}

export class DisableCall__Inputs {
  _call: DisableCall;

  constructor(call: DisableCall) {
    this._call = call;
  }
}

export class DisableCall__Outputs {
  _call: DisableCall;

  constructor(call: DisableCall) {
    this._call = call;
  }
}
