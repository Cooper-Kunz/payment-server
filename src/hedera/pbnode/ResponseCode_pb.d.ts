// package: proto
// file: ResponseCode.proto

import * as jspb from "google-protobuf";

export enum ResponseCodeEnum {
  OK = 0,
  INVALID_TRANSACTION = 1,
  PAYER_ACCOUNT_NOT_FOUND = 2,
  INVALID_NODE_ACCOUNT = 3,
  TRANSACTION_EXPIRED = 4,
  INVALID_TRANSACTION_START = 5,
  INVALID_TRANSACTION_DURATION = 6,
  INVALID_SIGNATURE = 7,
  MEMO_TOO_LONG = 8,
  INSUFFICIENT_TX_FEE = 9,
  INSUFFICIENT_PAYER_BALANCE = 10,
  DUPLICATE_TRANSACTION = 11,
  BUSY = 12,
  NOT_SUPPORTED = 13,
  INVALID_FILE_ID = 14,
  INVALID_ACCOUNT_ID = 15,
  INVALID_CONTRACT_ID = 16,
  INVALID_TRANSACTION_ID = 17,
  RECEIPT_NOT_FOUND = 18,
  RECORD_NOT_FOUND = 19,
  INVALID_SOLIDITY_ID = 20,
  UNKNOWN = 21,
  SUCCESS = 22,
  FAIL_INVALID = 23,
  FAIL_FEE = 24,
  FAIL_BALANCE = 25,
  KEY_REQUIRED = 26,
  BAD_ENCODING = 27,
  INSUFFICIENT_ACCOUNT_BALANCE = 28,
  INVALID_SOLIDITY_ADDRESS = 29,
  INSUFFICIENT_GAS = 30,
  CONTRACT_SIZE_LIMIT_EXCEEDED = 31,
  LOCAL_CALL_MODIFICATION_EXCEPTION = 32,
  CONTRACT_REVERT_EXECUTED = 33,
  CONTRACT_EXECUTION_EXCEPTION = 34,
  INVALID_RECEIVING_NODE_ACCOUNT = 35,
  MISSING_QUERY_HEADER = 36,
  ACCOUNT_UPDATE_FAILED = 37,
  INVALID_KEY_ENCODING = 38,
  NULL_SOLIDITY_ADDRESS = 39,
  CONTRACT_UPDATE_FAILED = 40,
  INVALID_QUERY_HEADER = 41,
  INVALID_FEE_SUBMITTED = 42,
  INVALID_PAYER_SIGNATURE = 43,
  KEY_NOT_PROVIDED = 44,
  INVALID_EXPIRATION_TIME = 45,
  NO_WACL_KEY = 46,
  FILE_CONTENT_EMPTY = 47,
  INVALID_ACCOUNT_AMOUNTS = 48,
  EMPTY_TRANSACTION_BODY = 49,
  INVALID_TRANSACTION_BODY = 50,
  INVALID_SIGNATURE_TYPE_MISMATCHING_KEY = 51,
  INVALID_SIGNATURE_COUNT_MISMATCHING_KEY = 52,
  EMPTY_CLAIM_BODY = 53,
  EMPTY_CLAIM_HASH = 54,
  EMPTY_CLAIM_KEYS = 55,
  INVALID_CLAIM_HASH_SIZE = 56,
  EMPTY_QUERY_BODY = 57,
  EMPTY_CLAIM_QUERY = 58,
  CLAIM_NOT_FOUND = 59,
  ACCOUNT_ID_DOES_NOT_EXIST = 60,
  CLAIM_ALREADY_EXISTS = 61,
  INVALID_FILE_WACL = 62,
  SERIALIZATION_FAILED = 63,
  TRANSACTION_OVERSIZE = 64,
  TRANSACTION_TOO_MANY_LAYERS = 65,
  CONTRACT_DELETED = 66,
  PLATFORM_NOT_ACTIVE = 67,
  KEY_PREFIX_MISMATCH = 68,
  PLATFORM_TRANSACTION_NOT_CREATED = 69,
  INVALID_RENEWAL_PERIOD = 70,
  INVALID_PAYER_ACCOUNT_ID = 71,
  ACCOUNT_REPEATED_IN_ACCOUNT_AMOUNTS = 72,
}

