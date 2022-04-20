var clone = $("#holder > li").last().clone();
clone.data("id", parseInt(clone.data("id"), 10) + 1);
$("#holder").append(clone);