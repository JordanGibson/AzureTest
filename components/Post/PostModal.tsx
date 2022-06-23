import { Button, Checkbox, Input, Modal, Text, Row } from '@nextui-org/react'
import React, { Dispatch, SetStateAction, useState } from 'react'
import { FaLock, FaMailBulk } from 'react-icons/fa'

export const PostModal = ({ setVisible, visible }: { setVisible: Dispatch<SetStateAction<boolean>>, visible: boolean }) => {
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  return (
    <Modal
      closeButton
      blur
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Welcome to
          <Text b size={18}>
            NextUI
          </Text>
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Email"
          contentLeft={<FaMailBulk />}
        />
        <Input
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="Password"
          contentLeft={<FaLock />}
        />
        <Row justify="space-between">
          <Checkbox>
            <Text size={14}>Remember me</Text>
          </Checkbox>
          <Text size={14}>Forgot password?</Text>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button auto flat color="error" onClick={closeHandler}>
          Close
        </Button>
        <Button auto onClick={closeHandler}>
          Sign in
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
