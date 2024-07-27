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

export class AggregatorConverter__getRoundDataResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromSignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class AggregatorConverter__latestRoundDataResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromSignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class AggregatorConverter__proposedGetRoundDataResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromSignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class AggregatorConverter__proposedLatestRoundDataResult {
  value0: BigInt;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromSignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }
}

export class AggregatorConverter extends ethereum.SmartContract {
  static bind(address: Address): AggregatorConverter {
    return new AggregatorConverter("AggregatorConverter", address);
  }

  AGGR_ADDR(): Address {
    let result = super.call("AGGR_ADDR", "AGGR_ADDR():(address)", []);

    return result[0].toAddress();
  }

  try_AGGR_ADDR(): ethereum.CallResult<Address> {
    let result = super.tryCall("AGGR_ADDR", "AGGR_ADDR():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  DECIMALS(): BigInt {
    let result = super.call("DECIMALS", "DECIMALS():(uint256)", []);

    return result[0].toBigInt();
  }

  try_DECIMALS(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("DECIMALS", "DECIMALS():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  DIVISOR(): BigInt {
    let result = super.call("DIVISOR", "DIVISOR():(int256)", []);

    return result[0].toBigInt();
  }

  try_DIVISOR(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("DIVISOR", "DIVISOR():(int256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  description(): string {
    let result = super.call("description", "description():(string)", []);

    return result[0].toString();
  }

  try_description(): ethereum.CallResult<string> {
    let result = super.tryCall("description", "description():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  getAnswer(roundId: BigInt): BigInt {
    let result = super.call("getAnswer", "getAnswer(uint256):(int256)", [
      ethereum.Value.fromUnsignedBigInt(roundId)
    ]);

    return result[0].toBigInt();
  }

  try_getAnswer(roundId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getAnswer", "getAnswer(uint256):(int256)", [
      ethereum.Value.fromUnsignedBigInt(roundId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getRoundData(_roundId: BigInt): AggregatorConverter__getRoundDataResult {
    let result = super.call(
      "getRoundData",
      "getRoundData(uint80):(uint80,int256,uint256,uint256,uint80)",
      [ethereum.Value.fromUnsignedBigInt(_roundId)]
    );

    return new AggregatorConverter__getRoundDataResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_getRoundData(
    _roundId: BigInt
  ): ethereum.CallResult<AggregatorConverter__getRoundDataResult> {
    let result = super.tryCall(
      "getRoundData",
      "getRoundData(uint80):(uint80,int256,uint256,uint256,uint80)",
      [ethereum.Value.fromUnsignedBigInt(_roundId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AggregatorConverter__getRoundDataResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  latestAnswer(): BigInt {
    let result = super.call("latestAnswer", "latestAnswer():(int256)", []);

    return result[0].toBigInt();
  }

  try_latestAnswer(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("latestAnswer", "latestAnswer():(int256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  latestRoundData(): AggregatorConverter__latestRoundDataResult {
    let result = super.call(
      "latestRoundData",
      "latestRoundData():(uint80,int256,uint256,uint256,uint80)",
      []
    );

    return new AggregatorConverter__latestRoundDataResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_latestRoundData(): ethereum.CallResult<
    AggregatorConverter__latestRoundDataResult
  > {
    let result = super.tryCall(
      "latestRoundData",
      "latestRoundData():(uint80,int256,uint256,uint256,uint80)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AggregatorConverter__latestRoundDataResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  proposedGetRoundData(
    roundId: BigInt
  ): AggregatorConverter__proposedGetRoundDataResult {
    let result = super.call(
      "proposedGetRoundData",
      "proposedGetRoundData(uint80):(uint80,int256,uint256,uint256,uint80)",
      [ethereum.Value.fromUnsignedBigInt(roundId)]
    );

    return new AggregatorConverter__proposedGetRoundDataResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_proposedGetRoundData(
    roundId: BigInt
  ): ethereum.CallResult<AggregatorConverter__proposedGetRoundDataResult> {
    let result = super.tryCall(
      "proposedGetRoundData",
      "proposedGetRoundData(uint80):(uint80,int256,uint256,uint256,uint80)",
      [ethereum.Value.fromUnsignedBigInt(roundId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AggregatorConverter__proposedGetRoundDataResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }

  proposedLatestRoundData(): AggregatorConverter__proposedLatestRoundDataResult {
    let result = super.call(
      "proposedLatestRoundData",
      "proposedLatestRoundData():(uint80,int256,uint256,uint256,uint80)",
      []
    );

    return new AggregatorConverter__proposedLatestRoundDataResult(
      result[0].toBigInt(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_proposedLatestRoundData(): ethereum.CallResult<
    AggregatorConverter__proposedLatestRoundDataResult
  > {
    let result = super.tryCall(
      "proposedLatestRoundData",
      "proposedLatestRoundData():(uint80,int256,uint256,uint256,uint80)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AggregatorConverter__proposedLatestRoundDataResult(
        value[0].toBigInt(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
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

  get _aggregator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _divisor(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _description(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class DefaultCall extends ethereum.Call {
  get inputs(): DefaultCall__Inputs {
    return new DefaultCall__Inputs(this);
  }

  get outputs(): DefaultCall__Outputs {
    return new DefaultCall__Outputs(this);
  }
}

export class DefaultCall__Inputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}

export class DefaultCall__Outputs {
  _call: DefaultCall;

  constructor(call: DefaultCall) {
    this._call = call;
  }
}
