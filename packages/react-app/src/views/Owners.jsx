import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, List, Divider, Input, Card, DatePicker, Slider, Switch, Progress, Spin, Select } from "antd";
import { SyncOutlined } from '@ant-design/icons';
import { Address, AddressInput, Balance, Blockie } from "../components";
import { parseEther, formatEther } from "@ethersproject/units";
import { ethers } from "ethers";
import { useContractReader, useEventListener, useLocalStorage } from "../hooks";
const axios = require('axios');
const { Option } = Select;

export default function Owners({ownerEvents, signaturesRequired, address, nonce, transactions, userProvider, mainnetProvider, localProvider, yourLocalBalance, price, tx, readContracts, writeContracts, blockExplorer }) {

  const history = useHistory();

  const [to, setTo] = useLocalStorage("to");
  const [amount, setAmount] = useLocalStorage("amount","0");
  const [method, setMethod] = useLocalStorage("addSigner");
  const [newOwner, setNewOwner] = useLocalStorage("newOwner");
  const [newSignaturesRequired, setNewSignaturesRequired] = useLocalStorage("newSignaturesRequired");
  const [data, setData] = useLocalStorage("data","0x");

  return (
    <div>

      <h2 style={{marginTop:32}}>Signatures Required: {signaturesRequired?signaturesRequired.toNumber():<Spin></Spin>}</h2>

      <List
        style={{maxWidth:450,margin:"auto",marginTop:32}}
        bordered
        dataSource={ownerEvents}
        renderItem={(item) => {
          //console.log("OWENRS ITEM",item)
          return (
            <List.Item>
            <Address
              value={item[0]}
              ensProvider={mainnetProvider}
              blockExplorer={blockExplorer}
              fontSize={32}
            />
            <div style={{padding:16}}>
              {item[1]?"👍":"👎"}
            </div>
            </List.Item>
          )
        }}
      />

      <div style={{border:"1px solid #cccccc", padding:16, width:400, margin:"auto",marginTop:64}}>
        <div style={{margin:8,padding:8}}>
          <Select defaultValue="addSigner" value={method} style={{ width: "100%" }} onChange={ setMethod }>
            <Option key="addSigner">addSigner()</Option>
            <Option key="removeSigner">removeSigner()</Option>
          </Select>
        </div>
        <div style={{margin:8,padding:8}}>
          <AddressInput
            autoFocus
            ensProvider={mainnetProvider}
            placeholder="new owner address"
            value={newOwner}
            onChange={setNewOwner}
          />
        </div>
        <div style={{margin:8,padding:8}}>
          <Input
            ensProvider={mainnetProvider}
            placeholder="new # of signatures required"
            value={newSignaturesRequired}
            onChange={(e)=>{setNewSignaturesRequired(e.target.value)}}
          />
        </div>
        <div style={{margin:8,padding:8}}>
          <Button onClick={()=>{
            console.log("METHOD",setMethod)
            let calldata = readContracts.MetaMultiSigWallet.interface.encodeFunctionData(method,[newOwner,newSignaturesRequired])
            console.log("calldata",calldata)
            setData(calldata)
            setAmount("0")
            setTo(readContracts.MetaMultiSigWallet.address)
            setTimeout(()=>{
              history.push('/create')
            },777)
          }}>
            Update
          </Button>
        </div>
      </div>


    </div>
  );
}
