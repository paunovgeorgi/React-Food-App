export default (items) => {
    return items.reduce((acc, item) => {
        return acc + (item.quantity * item.price);
      }, 0)
}