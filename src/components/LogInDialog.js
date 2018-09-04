import React, { Fragment } from "react";
import { Button, TextField } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const styles = {
  button: {
    color: "inherit"
  },
  title: {
    textAlign: "center"
  }
};

export default class LogInDialog extends React.Component {
  state = {
    open: false
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  handleToggle = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { open } = this.state;
    return (
      <Fragment>
        <Button onClick={this.handleToggle} style={styles.button}>
          Iniciar sesión
        </Button>
        <Dialog
          open={open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title" style={styles.title}>
            INICIAR SESIÓN
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Ya tienes cuenta? Incia sesión o suscribete.
            </DialogContentText>
            <TextField
              required
              margin="dense"
              id="name"
              label="Correo"
              type="email"
              fullWidth
            />
            <TextField
              required
              margin="dense"
              id="password-input"
              label="Contraseña"
              type="password"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Aceptar
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Cancelar
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Subscribete
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
