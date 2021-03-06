const testDialog = new BaseDialog("test");
//Add "go back" button
testDialog.addCloseButton();
//Add text to the main content
testDialog.cont.add("test
Test");
//Show dialog
testDialog.show();
