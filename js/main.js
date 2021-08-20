$(document).ready(function () {
  let currentFloor = 2;
  let floorPath = $(".home-image path");
  let counterUp = $(".counter-up");
  let counterDown = $(".counter-down");
  let modal = $(".modal");
  let closeButton = $(".modal-close-button");
  let viewButton = $(".view-flats");

  let currentFlat = 40;
  let flatPath = $(".flats path");
  let link = $(".flat-link");

  link.on("click", function () {
    currentFlat = $(this).attr("data-id");
    flatPath.removeClass("current-flat");
    $(`[data-flat=${currentFlat}]`).toggleClass("current-flat");
  });

  flatPath.on("mouseover", function () {
    flatPath.removeClass("current-flat");
    link.removeClass("active");
    currentFlat = $(this).attr("data-flat");
    $(`[data-id=${currentFlat}]`).toggleClass("active");
  });

  flatPath.on("mouseleave", function () {
    link.removeClass("active");
  });
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor");
    currentFloor = $(this).attr("data-floor");
    $(".counter").text(currentFloor);
  });

  floorPath.on("click", toggleModal);

  closeButton.on("click", toggleModal);

  viewButton.on("click", toggleModal);

  counterUp.on("click", function () {
    if (currentFloor < 18) {
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString("en-Us", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
    }
    $(".counter").text(usCurrentFloor);

    floorPath.removeClass("current-floor");
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
  });

  counterDown.on("click", function () {
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString("en-Us", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
    }
    $(".counter").text(usCurrentFloor);

    floorPath.removeClass("current-floor");
    $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
  });
  function toggleModal() {
    modal.toggleClass("is-open");
  }
});
